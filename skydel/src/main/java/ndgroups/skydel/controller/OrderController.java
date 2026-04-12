package ndgroups.skydel.controller;

import ndgroups.skydel.model.CartItem;
import ndgroups.skydel.model.Order;
import ndgroups.skydel.model.User;
import ndgroups.skydel.request.AddCartItemRequest;
import ndgroups.skydel.service.Interface.ICartService;
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
    private ICartService cartService;
    @Autowired
    private IUserService userService;

//    @PostMapping("/add")
//    public ResponseEntity<Order> placeOrder(@RequestHeader("Authorization") String jwt) throws Exception {
//        CartItem cartItem = cartService.addCartItemToCart(req, jwt);
//        return new ResponseEntity<>(cartItem, HttpStatus.CREATED);
//    }

    @GetMapping("/all")
    public ResponseEntity<List<Order>>getAllOrders(@RequestHeader("Authorization") String jwt) throws Exception {
        User user = userService.findUserByJwtToken(jwt);
        List<Order>orders = orderService.getAllOrders();
        return new ResponseEntity<>(orders, HttpStatus.CREATED);
    }

    @GetMapping("/test")
    public String getMessage(){
        return "hello testing";
    }
}
