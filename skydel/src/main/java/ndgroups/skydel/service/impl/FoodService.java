package ndgroups.skydel.service.impl;

import ndgroups.skydel.model.Category;
import ndgroups.skydel.model.Food;
import ndgroups.skydel.model.Restaurant;
import ndgroups.skydel.repositoy.FoodRepository;
import ndgroups.skydel.request.CreateFoodRequest;
import ndgroups.skydel.service.Interface.IFoodService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class FoodService implements IFoodService {
    @Autowired
    private FoodRepository foodRepository;

    @Override
    public Food createFood(CreateFoodRequest request, Category category, Restaurant restaurant) {
        Food food = new Food();
        food.setFoodCategory(category);
        food.setRestaurant(restaurant);
        food.setDescription(request.getDescription());
        food.setImages(request.getImages());
        food.setName(request.getName());
        food.setPrice(request.getPrice());
        food.setIngredients(request.getIngredientsItems());
        food.setSeasonal(request.isSeasonal());
        food.setVegetarian(request.isVegetarian());

        Food savedFood = foodRepository.save(food);
        restaurant.getFood().add(savedFood);

        return savedFood;
    }

    @Override
    public void deleteFood(Integer foodId) throws Exception {
        Food food = findFoodById(foodId);
//        foodRepository.delete(food);
        food.setRestaurant(null);
        foodRepository.save(food);
    }

    @Override
    public List<Food> getRestaurantFoods(Integer restaurantId, boolean isVegetarian, boolean isNonVeg,
                                         boolean isSeasonal, String foodCategory) {
        List<Food> foods = foodRepository.findByRestaurantId(restaurantId);
        if(isVegetarian){
            foods = filterByVegetarian(foods, isVegetarian);
        }
        if(isNonVeg){
            foods = filterByNonVeg(foods, isNonVeg);
        }
        if(isSeasonal){
            foods = filterBySeasonal(foods, isSeasonal);
        }
        if(foodCategory!=null &&  !foodCategory.equals("")){
            foods = filterByFoodCategory(foods, foodCategory);
        }
        return foods;
    }

    private List<Food> filterByFoodCategory(List<Food> foods, String foodCategory) {
        return foods.stream().filter(food ->
                {
                    if (food.getFoodCategory() != null) {
                        return food.getFoodCategory().getName().equals(foodCategory);
                    }
                    return false;
                }).collect(Collectors.toList());

    }

    private List<Food> filterBySeasonal(List<Food> foods, boolean isSeasonal) {
        return foods.stream().filter(food -> food.isSeasonal() == isSeasonal).
                collect(Collectors.toList());
    }

    private List<Food> filterByNonVeg(List<Food> foods, boolean isNonVeg) {
        return foods.stream().filter(food -> food.isVegetarian() == false).
                collect(Collectors.toList());
    }

    private List<Food> filterByVegetarian(List<Food> foods, boolean isVegetarian) {
        return foods.stream().filter(food -> food.isVegetarian() == isVegetarian).
                collect(Collectors.toList());
    }

    @Override
    public List<Food> searchFood(String keyword) {
        return foodRepository.searchFood(keyword);
    }

    @Override
    public Food findFoodById(Integer foodId) throws Exception {
        Optional<Food>food = foodRepository.findById(foodId);
        if (food.isEmpty()){
            throw new Exception("food with the given Id not found : " + foodId);
        }
        return food.get();
    }

    @Override
    public Food updateAvailabilityStatus(Integer foodId) throws Exception {
        Food food = findFoodById(foodId);
        food.setAvailable(!food.isAvailable());
        return foodRepository.save(food);
    }

    @Override
    public Food updateFood(Integer foodId, CreateFoodRequest updateFoodRequest) throws Exception {
        Food food = findFoodById(foodId);
    if(food!=null){
        food.setName(updateFoodRequest.getName());
        food.setDescription(updateFoodRequest.getDescription());
        food.setPrice(updateFoodRequest.getPrice());
        food.setFoodCategory(updateFoodRequest.getCategory());
        food.setImages(updateFoodRequest.getImages());
        food.setSeasonal(updateFoodRequest.isSeasonal());
        food.setVegetarian(updateFoodRequest.isVegetarian());
        food.setIngredients(updateFoodRequest.getIngredientsItems());
    }
    return foodRepository.save(food);
    }



}
