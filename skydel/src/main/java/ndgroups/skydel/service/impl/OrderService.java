package ndgroups.skydel.service.impl;

import ndgroups.skydel.model.*;
import ndgroups.skydel.repositoy.AddressRepository;
import ndgroups.skydel.repositoy.OrderItemRepository;
import ndgroups.skydel.repositoy.OrderRepository;
import ndgroups.skydel.repositoy.UserRepository;
import ndgroups.skydel.request.OrderRequest;
import ndgroups.skydel.service.Interface.IOrderService;
import ndgroups.skydel.service.Interface.IRestaurantService;
import ndgroups.skydel.service.Interface.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collector;
import java.util.stream.Collectors;

@Service
public class OrderService implements IOrderService {
    @Autowired
    private OrderRepository orderRepository;
    @Autowired
    private OrderItemRepository orderItemRepository;
    @Autowired
    private IUserService userService;
    @Autowired
    private IRestaurantService restaurantService;
    @Autowired
    private AddressRepository addressRepository;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private CartService cartService;

    @Override
    public Order placeOrder(OrderRequest req, User user) throws Exception {
        Restaurant restaurant = restaurantService.findRestaurantById(req.getRestaurantId());
        Address shippingAddress = req.getDeliveryAddress();
        Address savedAddress = addressRepository.save(shippingAddress);
        if (!user.getAddresses().contains(savedAddress)){
            user.getAddresses().add(savedAddress);
            userRepository.save(user);
        }

        Order order = new Order();
        order.setRestaurant(restaurant);
        order.setUser(user);
        order.setDeliveryAddress(savedAddress);
        order.setOrderDate(new Date());
        order.setOrderStatus("PENDING");

        Cart cart = cartService.findCartByUserId(user.getId());

        List<OrderItem>orderItems = new ArrayList<>();

        for (CartItem cartItem : cart.getCartItems()){
            OrderItem orderItem = new OrderItem();
            orderItem.setFood(cartItem.getFood());
            orderItem.setIngredients(cartItem.getIngredients());
            orderItem.setQuantity(cartItem.getQuantity());

            OrderItem savedOrderItem = orderItemRepository.save(orderItem);
            orderItems.add(savedOrderItem);
        }
        Long totalPrice = cartService.calculateCartTotal(cart);

        order.setItems(orderItems);
        order.setTotalPrice(totalPrice);

        Order savedOrder = orderRepository.save(order);
        restaurant.getOrders().add(savedOrder);

        return order;
    }

    @Override
    public Order updateOrder(Integer orderId, String orderStatus) throws Exception {
        Order order = findOrderById(orderId);
        if (orderStatus.equals("OUT_FOR_DELIVERY")
                || orderStatus.equals("DELIVERED")
                || orderStatus.equals("COMPLETED")
                || orderStatus.equals("PENDING")
                || orderStatus.equals("CONFIRMED")){
            order.setOrderStatus(orderStatus);
            return orderRepository.save(order);
        }
        throw new Exception("Please select a valid order status");
    }

    @Override
    public void cancelOrder(Integer orderId) throws Exception {
        Order order = findOrderById(orderId);
        orderRepository.deleteById(orderId);

    }

    @Override
    public List<Order> getUserOrders(Integer userId) throws Exception {
        return orderRepository.findByUserId(userId);
    }

    @Override
    public List<Order> getRestaurantOrders(Integer restaurantId, String orderStatus) {
        List<Order> orders = orderRepository.findByRestaurantId(restaurantId);
        if (orderStatus != null){
            orders = orders.stream().filter(order -> order.getOrderStatus().equals(orderStatus))
                    .collect(Collectors.toList());
        }
        return orders;
    }

    @Override
    public List<Order> getAllOrders() {
        return orderRepository.findAll();
    }

    @Override
    public Order findOrderById(Integer orderId) throws Exception {
        Optional<Order> order = orderRepository.findById(orderId);
        if (order.isEmpty()){
            throw new Exception("order not found with the given Id " + orderId);
        }
        return order.get();
    }
}
