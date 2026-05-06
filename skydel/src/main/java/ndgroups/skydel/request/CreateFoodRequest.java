package ndgroups.skydel.request;

import lombok.Data;
import ndgroups.skydel.model.Category;
import ndgroups.skydel.model.Image;
import ndgroups.skydel.model.IngredientsItem;

import java.util.List;

@Data
public class CreateFoodRequest {
    private String name;
    private String description;
    private Long price;
    private Category category;
    private List<Image> images;
    private Integer restaurantId;
    private boolean vegetarian;
    private boolean seasonal;
    private List<IngredientsItem>ingredientsItems;
}
