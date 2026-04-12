package ndgroups.skydel.service.impl;

import ndgroups.skydel.model.Order;
import ndgroups.skydel.model.User;
import ndgroups.skydel.repositoy.OrderItemRepository;
import ndgroups.skydel.repositoy.OrderRepository;
import ndgroups.skydel.request.OrderRequest;
import ndgroups.skydel.service.Interface.IOrderService;
import ndgroups.skydel.service.Interface.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderService implements IOrderService {
    @Autowired
    private IUserService userService;
    @Autowired
    private OrderRepository orderRepository;
    @Autowired
    private OrderItemRepository orderItemRepository;

    @Override
    public Order placeOrder(OrderRequest req, User user) {
        return null;
    }

    @Override
    public Order updateOrder(Integer orderId, String orderStatus) throws Exception {
        return null;
    }

    @Override
    public void cancelOrder(Integer orderId) throws Exception {

    }

    @Override
    public List<Order> getUserOrders(Integer userId) throws Exception {
        return List.of();
    }

    @Override
    public List<Order> getRestaurantOrders(Integer orderId) {
        return List.of();
    }

    @Override
    public List<Order> getAllOrders() {
        return orderRepository.findAll();
    }
}
