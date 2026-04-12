package ndgroups.skydel.service.impl;

import ndgroups.skydel.model.IngredientCategory;
import ndgroups.skydel.model.IngredientsItem;
import ndgroups.skydel.model.Restaurant;
import ndgroups.skydel.repositoy.IngredientCategoryRepository;
import ndgroups.skydel.repositoy.IngredientsItemRepository;
import ndgroups.skydel.service.Interface.IIngredientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class IngredientService implements IIngredientService {
    @Autowired
    private IngredientCategoryRepository ingredientCategoryRepository;
    @Autowired
    private IngredientsItemRepository ingredientsItemRepository;
    @Autowired
    private RestaurantService restaurantService;

    @Override
    public IngredientCategory createIngredientCategory(String name, Integer restaurantId) throws Exception {
        Restaurant restaurant = restaurantService.findRestaurantById(restaurantId);
        IngredientCategory ingredientCategory = new IngredientCategory();
        ingredientCategory.setName(name);
        ingredientCategory.setRestaurant(restaurant);

        return ingredientCategoryRepository.save(ingredientCategory);
    }

    @Override
    public IngredientCategory findIngredientCategoryById(Integer id) throws Exception {
        Optional<IngredientCategory> ingredientCategory = ingredientCategoryRepository.findById(id);
        if (ingredientCategory.isEmpty()){
            throw new Exception("no ingredient category with the given :" + id);
        }
        return ingredientCategory.get();
    }

    @Override
    public List<IngredientCategory> findIngredientCategoryByRestaurantId(Integer restaurantId)
            throws Exception {
        restaurantService.findRestaurantById(restaurantId);
        List<IngredientCategory>ingredientCategories = ingredientCategoryRepository
                .findByRestaurantId(restaurantId);
        return ingredientCategories;
    }

    @Override
    public IngredientsItem createIngredientItem(Integer restaurantId, String ingredientName, Integer categoryId) throws Exception {
        Restaurant restaurant = restaurantService.findRestaurantById(restaurantId);
        IngredientCategory category = findIngredientCategoryById(categoryId);
        IngredientsItem ingredientsItem = new IngredientsItem();
        ingredientsItem.setName(ingredientName);
        ingredientsItem.setCategory(category);
        ingredientsItem.setRestaurant(restaurant);

        IngredientsItem ingredients = ingredientsItemRepository.save(ingredientsItem);
        category.getIngredientsItems().add(ingredients);

        return ingredients;
    }

    @Override
    public IngredientsItem findIngredientsItemById(Integer id) throws Exception {
        Optional<IngredientsItem>ingredientsItem = ingredientsItemRepository.findById(id);
        if(ingredientsItem.isEmpty()){
            throw new Exception("IngredientItem with given id not found: " + id);
        }
        return ingredientsItem.get();
    }

    @Override
    public List<IngredientsItem> findRestaurantIngredients(Integer restaurantId) {
        List<IngredientsItem>ingredientsItems = ingredientsItemRepository.findByRestaurantId(restaurantId);
        return ingredientsItems;
    }

    @Override
    public IngredientsItem updateStock(Integer id) throws Exception {
        IngredientsItem ingredientsItem = findIngredientsItemById(id);
        ingredientsItem.setInStock(!ingredientsItem.isInStock());
        return ingredientsItemRepository.save(ingredientsItem);
    }
}
