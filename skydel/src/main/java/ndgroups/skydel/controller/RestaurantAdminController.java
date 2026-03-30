package ndgroups.skydel.controller;

import ndgroups.skydel.model.Restaurant;
import ndgroups.skydel.model.User;
import ndgroups.skydel.request.CreateRestaurantRequest;
import ndgroups.skydel.respnse.MessageResponse;
import ndgroups.skydel.service.Interface.IRestaurantService;
import ndgroups.skydel.service.Interface.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("${api.prefix}/admin/restaurants")
public class RestaurantAdminController {
    @Autowired
    private IUserService userService;
    @Autowired
    private IRestaurantService restaurantService;

    @PostMapping
    public ResponseEntity<Restaurant>createRestaurant(@RequestBody CreateRestaurantRequest request,
                                                      @RequestHeader("Authorization") String jwt)
            throws Exception{
        User user = userService.findUserByJwtToken(jwt);
        Restaurant restaurant = restaurantService.createRestaurant(request, user);
        return new ResponseEntity<>(restaurant, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Restaurant>updateRestaurant(@RequestBody CreateRestaurantRequest request,
                                                      @RequestHeader("Authorization") String jwt,
                                                      @PathVariable Integer id) throws Exception {
        User user = userService.findUserByJwtToken(jwt);
        Restaurant restaurant = restaurantService.updateRestaurant(id, request);
        return new ResponseEntity<>(restaurant, HttpStatus.OK);
    }
    @DeleteMapping("/{restaurantId}")
    public ResponseEntity<MessageResponse>deleteRestaurant(@RequestHeader("Authorization") String jwt,
                                             @PathVariable Integer restaurantId) throws Exception {
        User user = userService.findUserByJwtToken(jwt);
        restaurantService.deleteRestaurant(restaurantId);

        MessageResponse response = new MessageResponse();
        response.setMessage("restaurant deleted successfully");
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @GetMapping("/user")
    public ResponseEntity<Restaurant> getRestaurantById(@RequestHeader("Authorization") String jwt)
             throws Exception {
        User user = userService.findUserByJwtToken(jwt);
        Restaurant restaurant = restaurantService.findRestaurantById(user.getId());
        return new ResponseEntity<>(restaurant, HttpStatus.OK);
    }

    @GetMapping("/all")
    public ResponseEntity<List<Restaurant>>getAllRestaurants(){
        List<Restaurant> restaurants = restaurantService.getAllRestaurant();
        return new ResponseEntity<>(restaurants, HttpStatus.OK);
    }

    @PutMapping("/{id}/status")
    private ResponseEntity<?>updateRestaurantStatus(@PathVariable Integer id,
                                                    @RequestHeader("Authorization") String jwt)
            throws Exception {
        User user = userService.findUserByJwtToken(jwt);
        Restaurant restaurant = restaurantService.updateRestaurantStatus(id);
        return new ResponseEntity<>(restaurant, HttpStatus.OK);
    }

}
