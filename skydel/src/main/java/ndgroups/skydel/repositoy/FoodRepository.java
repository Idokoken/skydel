package ndgroups.skydel.repositoy;

import ndgroups.skydel.model.Food;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FoodRepository  extends JpaRepository<Food, Integer> {
    public List<Food> findByRestaurantId(Integer restaurantId);
    @Query("SELECT f FROM Food f WHERE f.name LIKE %:keyword% OR f.foodCategory.name LIKE %:keyword%")
    public List<Food> searchFood(@Param("keyword") String keyword);
}
