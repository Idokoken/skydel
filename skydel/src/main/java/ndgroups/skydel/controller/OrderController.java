package ndgroups.skydel.controller;

import ndgroups.skydel.model.Order;
import ndgroups.skydel.model.User;
import ndgroups.skydel.request.OrderRequest;
import ndgroups.skydel.respnse.MessageResponse;
import ndgroups.skydel.service.Interface.IOrderService;
import ndgroups.skydel.service.Interface.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("${api.prefix}/orders")
public class OrderController {
    @Autowired
    private IOrderService orderService;
    @Autowired
    private IUserService userService;

    @PostMapping("/place")
    public ResponseEntity<Order> placeOrder(@RequestHeader("Authorization") String jwt, OrderRequest req)
            throws Exception {
        User user = userService.findUserByJwtToken(jwt);
        Order order = orderService.placeOrder(req, user);
        return new ResponseEntity<>(order, HttpStatus.CREATED);
    }

    @DeleteMapping("/cancel/{id}")
    public ResponseEntity<MessageResponse>cancelOrder(@RequestHeader("Authorization") String jwt,
                                                      @PathVariable Integer id) throws Exception {
        User user = userService.findUserByJwtToken(jwt);
        orderService.cancelOrder(id);
        MessageResponse response = new MessageResponse();
        response.setMessage("Order successfully deleted");
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @GetMapping("/user")
    public ResponseEntity<List<Order>>getUserOrderHistory(@RequestHeader("Authorization") String jwt)
            throws Exception {
        User user = userService.findUserByJwtToken(jwt);
        List<Order>orders = orderService.getUserOrders(user.getId());
        return new ResponseEntity<>(orders, HttpStatus.OK);
    }


    @GetMapping("/all")
    public ResponseEntity<List<Order>>getAllOrders(@RequestHeader("Authorization") String jwt)
            throws Exception {
        User user = userService.findUserByJwtToken(jwt);
        List<Order>orders = orderService.getAllOrders();
        return new ResponseEntity<>(orders, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Order>getOrderById(@RequestHeader("Authorization") String jwt,
                                             @PathVariable Integer id) throws Exception {
        User user = userService.findUserByJwtToken(jwt);
        Order orders = orderService.findOrderById(id);
        return new ResponseEntity<>(orders, HttpStatus.OK);
    }


    @GetMapping("/test")
    public String getMessage(){
        return "hello testing";
    }
}
