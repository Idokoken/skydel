package ndgroups.skydel.repositoy;

import ndgroups.skydel.model.Restaurant;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RestaurantRepository extends JpaRepository<Restaurant, Integer> {
//    @Query("SELECT r FROM Restaurant r WHERE lower(r.name) LIKE lower(r.concat('%',:query, '%')) " +
//            "OR lower(r.cuisineType) LIKE lower(concat('%', :query, '%'))")
//    List<Restaurant>findBySearchQuery(String query);
    Restaurant findByOwnerId(Integer id);
}
