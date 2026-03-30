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

import java.util.List;

@RestController
@RequestMapping("${api.prefix}/foods")
public class FoodController {
    @Autowired
    private IFoodService foodService;
    @Autowired
    private IUserService userService;
    @Autowired
    private IRestaurantService restaurantService;

    @GetMapping("/restaurant/{restaurantId}")
    public ResponseEntity<List<Food>>getRestaurantFoods(@PathVariable Integer restaurantId,
                                                        @RequestParam boolean isVegetarian,
                                                        @RequestParam boolean isNonVeg,
                                                        @RequestParam boolean isSeasonal,
                                                        @RequestParam(required = false) String foodCategory){
        List<Food>foods = foodService.getRestaurantFoods(restaurantId, isVegetarian, isNonVeg, isSeasonal,
                foodCategory);
        return new ResponseEntity<>(foods, HttpStatus.OK);
    }

    @GetMapping("/search")
    public ResponseEntity<List<Food>> searchFood(@RequestParam String name){
        List<Food>foods = foodService.searchFood(name);
        return new ResponseEntity<>(foods, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Food> getFoodById(@PathVariable Integer id) throws Exception {
        Food food = foodService.findFoodById(id);
        return new ResponseEntity<>(food, HttpStatus.OK);
    }


    @PutMapping("/edit/{id}")
    public ResponseEntity<Food> updateFood(@PathVariable Integer id, @RequestBody CreateFoodRequest req)
            throws Exception {
        Food food = foodService.updateFood(id, req);
        return new ResponseEntity<>(food, HttpStatus.OK);
    }
}
