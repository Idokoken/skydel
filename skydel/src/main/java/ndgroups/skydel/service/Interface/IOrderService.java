package ndgroups.skydel.service.Interface;

import ndgroups.skydel.model.Order;
import ndgroups.skydel.model.User;
import ndgroups.skydel.request.OrderRequest;

import java.util.List;

public interface IOrderService {
    public Order placeOrder(OrderRequest req, User user);
    public Order updateOrder(Integer orderId, String orderStatus) throws Exception;
    public void cancelOrder(Integer orderId) throws Exception;
    public List<Order>getUserOrders(Integer userId) throws Exception;
    public List<Order>getRestaurantOrders(Integer orderId);
    public List<Order>getAllOrders();
}
