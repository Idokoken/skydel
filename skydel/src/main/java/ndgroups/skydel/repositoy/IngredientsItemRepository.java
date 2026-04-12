package ndgroups.skydel.repositoy;

import ndgroups.skydel.model.IngredientsItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IngredientsItemRepository extends  JpaRepository<IngredientsItem, Integer> {
    public List<IngredientsItem> findByRestaurantId(Integer id);
}
