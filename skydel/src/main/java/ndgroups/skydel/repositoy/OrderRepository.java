package ndgroups.skydel.repositoy;

import ndgroups.skydel.model.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrderRepository  extends JpaRepository<Order, Integer> {
    public List<Order>findByUserId(Integer id);
    public List<Order>findByRestaurantId(Integer restaurantId);
}
