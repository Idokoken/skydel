package ndgroups.skydel.service.impl;

import ndgroups.skydel.model.Category;
import ndgroups.skydel.model.Restaurant;
import ndgroups.skydel.model.User;
import ndgroups.skydel.repositoy.CategoryRepository;
import ndgroups.skydel.service.Interface.ICategoryService;
import ndgroups.skydel.service.Interface.IRestaurantService;
import ndgroups.skydel.service.Interface.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CategoryService implements ICategoryService {
    @Autowired
    private CategoryRepository categoryRepository;
    @Autowired
    private IRestaurantService restaurantService;

    @Override
    public Category createcategory(String name, Integer userId) throws Exception {
        Restaurant restaurant = restaurantService.getRestaurantByUserId(userId);
        Category category = new Category();
        category.setName(name);
        category.setRestaurant(restaurant);
        return categoryRepository.save(category);
    }

    @Override
    public List<Category> findCategoryByRestaurantId(Integer id) throws Exception {
        Restaurant restaurant = restaurantService.getRestaurantByUserId(id);
        return categoryRepository.findByRestaurantId(restaurant.getId());
    }

    @Override
    public Category findCategoryId(Integer id) throws Exception {
        Optional<Category>category = categoryRepository.findById(id);
        if(category.isEmpty()){
            throw new Exception("category not found with the given Id :" + id);
        }
        return category.get();
    }
}
