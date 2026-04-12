package ndgroups.skydel.service.Interface;

import ndgroups.skydel.model.IngredientCategory;
import ndgroups.skydel.model.IngredientsItem;

import java.util.List;

public interface IIngredientService {
    public IngredientCategory createIngredientCategory(String name, Integer restaurantId)throws Exception;
    public IngredientCategory findIngredientCategoryById(Integer id) throws Exception;
    public List<IngredientCategory> findIngredientCategoryByRestaurantId(Integer restaurantId) throws Exception;
    public IngredientsItem createIngredientItem(Integer RestaurantId, String ingredientName, Integer categoryId)
            throws Exception;

    IngredientsItem findIngredientsItemById(Integer id) throws Exception;

    public List<IngredientsItem>findRestaurantIngredients(Integer restaurantId);
    public IngredientsItem updateStock(Integer id) throws Exception;


}
