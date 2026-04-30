package ndgroups.skydel.controller;

import ndgroups.skydel.model.Order;
import ndgroups.skydel.model.User;
import ndgroups.skydel.service.Interface.IOrderService;
import ndgroups.skydel.service.Interface.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("${api.prefix}/admin/orders")
public class OrderAdminController {
    @Autowired
    private IOrderService orderService;
    @Autowired
    private IUserService userService;


    @GetMapping("/user")
    public ResponseEntity<List<Order>>getUserOrderHistory(@RequestHeader("Authorization") String jwt)
            throws Exception {
        User user = userService.findUserByJwtToken(jwt);
        List<Order>orders = orderService.getUserOrders(user.getId());
        return new ResponseEntity<>(orders, HttpStatus.OK);
    }

    @GetMapping("/restaurant/{id}")
    public ResponseEntity<List<Order>>getRestaurantOrders(@RequestHeader("Authorization") String jwt,
                                                          @RequestParam(required = false) String orderStatus,
                                                          @PathVariable Integer id) throws Exception {
        User user = userService.findUserByJwtToken(jwt);
        List<Order>orders = orderService.getRestaurantOrders(id, orderStatus);
        return new ResponseEntity<>(orders, HttpStatus.OK);
    }

    @PutMapping("/edit/{id}/{orderStatus}")
    public ResponseEntity<Order>updateOrder(@RequestHeader("Authorization") String jwt,
                                            @PathVariable Integer id, @PathVariable String orderStatus)
            throws Exception {
        User user = userService.findUserByJwtToken(jwt);
        Order order = orderService.updateOrder(id, orderStatus);
        return new ResponseEntity<>(order, HttpStatus.OK);
    }

}
