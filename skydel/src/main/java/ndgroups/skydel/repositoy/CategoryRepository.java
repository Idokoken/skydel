package ndgroups.skydel.repositoy;

import ndgroups.skydel.model.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CategoryRepository  extends JpaRepository<Category, Integer> {
    public List<Category>findByRestaurantId(Integer restaurantId);
}
