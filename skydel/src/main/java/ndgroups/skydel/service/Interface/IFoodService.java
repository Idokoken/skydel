package ndgroups.skydel.service.Interface;


import ndgroups.skydel.model.Category;
import ndgroups.skydel.model.Food;
import ndgroups.skydel.model.Restaurant;
import ndgroups.skydel.request.CreateFoodRequest;

import java.util.List;

public interface IFoodService {
    public Food createFood(CreateFoodRequest request, Category category, Restaurant restaurant);
    public void deleteFood(Integer foodId) throws Exception;
    public List<Food> getRestaurantFoods(Integer restaurantId, boolean isVegetarian, boolean isNonVeg,
                                         boolean isSeasonal, String foodCategory);
    public List<Food>searchFood(String keyword);
    public Food findFoodById(Integer foodId) throws Exception;
    public Food updateAvailabilityStatus(Integer foodId) throws  Exception;
    public Food updateFood(Integer foodId, CreateFoodRequest foodRequest) throws Exception;

}
