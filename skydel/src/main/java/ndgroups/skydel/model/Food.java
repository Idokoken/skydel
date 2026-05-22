package ndgroups.skydel.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
public class Food {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer foodId;
    private String name;
    private String description;
    private Long price;
    @ManyToOne
    private Category foodCategory;
    @Column(length = 1000)
    @ElementCollection
    @CollectionTable(
            name = "food_images",
            joinColumns = @JoinColumn(name = "food_id")
    )
    @OrderColumn(name = "position")
    private List<String>images;
//    @OneToMany(mappedBy = "food", cascade = CascadeType.ALL, orphanRemoval = true)
//    private List<Image> images;
    private boolean  isAvailable;
    @ManyToOne
    private Restaurant restaurant;
    private boolean isVegetarian;
    private boolean isSeasonal;
    @OneToMany(mappedBy = "food", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<IngredientsItem>ingredients = new ArrayList<>();
    private Date CreationDate;
}

