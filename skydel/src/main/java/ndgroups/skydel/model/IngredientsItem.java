package ndgroups.skydel.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
public class IngredientsItem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer ingredientsItemId;
    private String name;
    @ManyToOne
    @JoinColumn(name = "ingredientCategory_id")
    private IngredientCategory category;
    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "restaurant_id")
    private Restaurant restaurant;
    private boolean isInStock = true;

    @ManyToOne
//    @JoinColumn(name = "food_id")
    private Food food;

}
