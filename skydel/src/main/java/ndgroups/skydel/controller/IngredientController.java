package ndgroups.skydel.controller;

import ndgroups.skydel.model.IngredientCategory;
import ndgroups.skydel.model.IngredientsItem;
import ndgroups.skydel.model.Restaurant;
import ndgroups.skydel.model.User;
import ndgroups.skydel.request.CreateRestaurantRequest;
import ndgroups.skydel.request.IngredientCategoryRequest;
import ndgroups.skydel.request.IngredientRequest;
import ndgroups.skydel.service.Interface.IIngredientService;
import ndgroups.skydel.service.Interface.IRestaurantService;
import ndgroups.skydel.service.Interface.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.parameters.P;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("${api.prefix}/admin/ingredient")
public class IngredientController {
    @Autowired
    private IIngredientService ingredientService;
    @Autowired
    private IUserService userService;
    @Autowired
    private IRestaurantService restaurantService;

    @PostMapping("/category")
    public ResponseEntity<IngredientCategory> createIngredientCategory(
            @RequestBody IngredientCategoryRequest ingredientCat,
            @RequestHeader("Authorization") String jwt) throws Exception{
        User user = userService.findUserByJwtToken(jwt);
        IngredientCategory ingredientCategory = ingredientService.createIngredientCategory(
                ingredientCat.getName(), ingredientCat.getRestaurantId());
        return new ResponseEntity<>(ingredientCategory, HttpStatus.CREATED);
    }

    @GetMapping("/category/{id}")
    public ResponseEntity<IngredientCategory> getIngredientCategoryById(@RequestBody IngredientCategory ingredientCat,
                                                                 @PathVariable Integer restaurantId,
                                                                 @RequestHeader("Authorization") String jwt)
            throws Exception{
        User user = userService.findUserByJwtToken(jwt);
        IngredientCategory ingredientCategory = ingredientService.createIngredientCategory(
                ingredientCat.getName(), restaurantId);
        return new ResponseEntity<>(ingredientCategory, HttpStatus.OK);
    }

    @GetMapping("/category/restaurant/{id}")
    public ResponseEntity<List<IngredientCategory>>getIngredientCategoryByRestaurantId(
            @PathVariable Integer id, @RequestHeader("Authorization") String jwt) throws Exception {
        User user = userService.findUserByJwtToken(jwt);
        java.util.List<IngredientCategory>ingredientCategories = ingredientService
                .findIngredientCategoryByRestaurantId(id);
        return new ResponseEntity<>(ingredientCategories, HttpStatus.OK);
    }

    @PostMapping()
    public ResponseEntity<IngredientsItem> createIngredientItem(@RequestBody IngredientRequest req,
                                                                @RequestHeader("Authorization") String jwt)
            throws Exception{
        User user = userService.findUserByJwtToken(jwt);
        IngredientsItem ingredientsItem= ingredientService.createIngredientItem(req.getRestaurantId(),
                req.getName(), req.getCategoryId());
        return new ResponseEntity<>(ingredientsItem, HttpStatus.CREATED);
    }

    @GetMapping("/item/{id}")
    public ResponseEntity<IngredientsItem> getIngredientsItemById(@RequestBody IngredientsItem item,
                                                                @PathVariable Integer id,
                                                                @RequestHeader("Authorization") String jwt)
            throws Exception{
        User user = userService.findUserByJwtToken(jwt);
        IngredientsItem ingredientsItem= ingredientService.findIngredientsItemById(id);
        return new ResponseEntity<>(ingredientsItem, HttpStatus.OK);
    }

    @GetMapping("/restaurant/{id}")
    public ResponseEntity<List<IngredientsItem>> getRestaurantIngredients(@PathVariable Integer id,
                                                                   @RequestHeader("Authorization") String jwt)
            throws Exception{
        User user = userService.findUserByJwtToken(jwt);
        List<IngredientsItem> ingredientsItems= ingredientService.findRestaurantIngredients(id);
        return new ResponseEntity<>(ingredientsItems, HttpStatus.OK);
    }

    @PutMapping("/{id}/stock")
    public ResponseEntity<IngredientsItem> updateStock(@PathVariable Integer id,
                                                       @RequestHeader("Authorization") String jwt)
            throws Exception{
        User user = userService.findUserByJwtToken(jwt);
        IngredientsItem ingredientsItem = ingredientService.updateStock(id);
        return new ResponseEntity<>(ingredientsItem, HttpStatus.OK);
    }
}
