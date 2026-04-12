package ndgroups.skydel.request;

import lombok.Data;

@Data
public class IngredientCategoryRequest {
    private String name;
    private Integer restaurantId;
}
