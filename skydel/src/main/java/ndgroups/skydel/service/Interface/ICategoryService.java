package ndgroups.skydel.service.Interface;

import ndgroups.skydel.model.Category;

import java.util.List;

public interface ICategoryService {
    public Category createcategory(String name, Integer userId) throws Exception;
    public List<Category> findCategoryByRestaurantId(Integer id) throws Exception;
    public Category findCategoryId(Integer id) throws Exception;

}
