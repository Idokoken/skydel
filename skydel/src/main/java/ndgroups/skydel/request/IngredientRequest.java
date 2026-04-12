package ndgroups.skydel.request;

import lombok.Data;

@Data
public class IngredientRequest {
    private String name;
    private Integer categoryId;
    private Integer restaurantId;
}
