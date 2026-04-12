package ndgroups.skydel.controller;

import ndgroups.skydel.model.Category;
import ndgroups.skydel.model.User;
import ndgroups.skydel.respnse.MessageResponse;
import ndgroups.skydel.service.Interface.ICategoryService;
import ndgroups.skydel.service.Interface.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("${api.prefix}/category")
public class CategoryController {
    @Autowired
    private ICategoryService categoryService;
    @Autowired
    private IUserService userService;

    @PostMapping("/admin")
    public ResponseEntity<Category>createCategory(@RequestHeader("Authorization") String jwt,
                                                  @RequestBody Category cat) throws Exception {
        User user = userService.findUserByJwtToken(jwt);
        Category category = categoryService.createcategory(cat.getName(), user.getId());
        return new ResponseEntity<>(category, HttpStatus.CREATED);
    }

    @GetMapping("/restaurant")
    public ResponseEntity<List<Category>>findCategoryByRestaurantId(@RequestHeader("Authorization") String jwt)
            throws Exception {
        User user = userService.findUserByJwtToken(jwt);
        List<Category> categories = categoryService.findCategoryByRestaurantId(user.getId());
        return new ResponseEntity<>(categories, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Category>getCategoryById(@RequestHeader("Authorization") String jwt,
                                                   @PathVariable Integer id) throws Exception {
        User user = userService.findUserByJwtToken(jwt);
        Category category = categoryService.findCategoryId(id);
        return new ResponseEntity<>(category, HttpStatus.OK);
    }

    @DeleteMapping("/admin/{id}")
    public ResponseEntity<MessageResponse>deleteCategory(@RequestHeader("Authorization") String jwt,
                                                         @PathVariable Integer id) throws Exception{
        User user = userService.findUserByJwtToken(jwt);
        categoryService.deleteCategory(id);
        MessageResponse response = new MessageResponse();
        response.setMessage("Category deleted successfully");
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @GetMapping("/edit/{id}")
    public ResponseEntity<Category>updateCategory(@RequestHeader("Authorization") String jwt,
                                                   @RequestBody Category req,
                                                   @PathVariable Integer id) throws Exception {
        User user = userService.findUserByJwtToken(jwt);
        Category category = categoryService.updateCategory(req.getName(), id);
        return new ResponseEntity<>(category, HttpStatus.OK);
    }
}
