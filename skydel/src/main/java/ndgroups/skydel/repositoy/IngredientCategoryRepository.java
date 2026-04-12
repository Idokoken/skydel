package ndgroups.skydel.repositoy;

import ndgroups.skydel.model.IngredientCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IngredientCategoryRepository extends JpaRepository<IngredientCategory, Integer> {
    public List<IngredientCategory> findByRestaurantId(Integer id);
}
