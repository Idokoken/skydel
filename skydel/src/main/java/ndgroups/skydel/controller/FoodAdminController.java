package ndgroups.skydel.controller;

import ndgroups.skydel.model.Food;
import ndgroups.skydel.model.Restaurant;
import ndgroups.skydel.model.User;
import ndgroups.skydel.request.CreateFoodRequest;
import ndgroups.skydel.respnse.MessageResponse;
import ndgroups.skydel.service.Interface.IFoodService;
import ndgroups.skydel.service.Interface.IRestaurantService;
import ndgroups.skydel.service.Interface.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("${api.prefix}/admin/food")
public class FoodAdminController {
    @Autowired
    private IFoodService foodService;
    @Autowired
    private IUserService userService;
    @Autowired
    private IRestaurantService restaurantService;


    @PostMapping
    public ResponseEntity<Food> createFood(@RequestBody CreateFoodRequest request,
                                           @RequestHeader("Authorization") String jwt) throws Exception {
        User user = userService.findUserByJwtToken(jwt);
        Restaurant restaurant = restaurantService.findRestaurantById(request.getRestaurantId());

        Food food = foodService.createFood(request, request.getCategory(), restaurant);
        return new ResponseEntity<>(food, HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<MessageResponse> deleteFood(@RequestHeader("Authorization") String jwt,
                                                      @PathVariable Integer id) throws Exception {
        User user = userService.findUserByJwtToken(jwt);
        foodService.deleteFood(id);
        MessageResponse response = new MessageResponse();
        response.setMessage("food successfully deleted");
        return new ResponseEntity<>(response, HttpStatus.OK);

    }

    @PutMapping("/{id}/status")
    public ResponseEntity<Food> updateFoodAvailabilityStatus(@RequestHeader("Authorization") String jwt,
                                                             @PathVariable Integer id) throws Exception {
        User user = userService.findUserByJwtToken(jwt);
        Food food = foodService.updateAvailabilityStatus(id);
        return new ResponseEntity<>(food, HttpStatus.OK);
    }

}
