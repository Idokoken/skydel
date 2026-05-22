package ndgroups.skydel.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
public class Restaurant {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;
    @OneToOne
    private User owner;
    private String description;
    private String cuisineType;
    @OneToOne
    private Address address;
    @Embedded
    private ContactInformation contactInformation;
    private String openingHour;
    private String closingHour;
    @OneToMany(mappedBy = "restaurant", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Order>orders = new ArrayList<>();
    @ElementCollection
    @Column(length = 1000)
    @CollectionTable(
            name = "restaurant_images",
            joinColumns = @JoinColumn(name = "restaurant_id")
    )
    @OrderColumn(name = "position")
    private List<String> images;
//    @OneToMany(mappedBy = "restaurant", cascade = CascadeType.ALL, orphanRemoval = true)
//    private List<Image> images;
    private LocalDateTime registration;
    private boolean isOpen;
    @JsonIgnore
    @OneToMany(mappedBy = "restaurant", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Food>food = new ArrayList<>();
    @JsonIgnore
    @OneToMany(mappedBy = "restaurant", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<IngredientsItem>ingredientsItems = new ArrayList<>();

//    @JsonIgnore
//    @ManyToMany
////    @JoinColumn(name = "user_id")
//    private User user;

    public Restaurant(Integer id, String name, String description, List<String>images) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.images = images;
    }
}
