package ndgroups.skydel.controller;

import ndgroups.skydel.model.Cart;
import ndgroups.skydel.model.CartItem;
import ndgroups.skydel.model.User;
import ndgroups.skydel.request.AddCartItemRequest;
import ndgroups.skydel.request.UpdateCartItemRequest;
import ndgroups.skydel.respnse.MessageResponse;
import ndgroups.skydel.service.Interface.ICartService;
import ndgroups.skydel.service.Interface.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("${api.prefix}/cart")
public class CartController {
    @Autowired
    private ICartService cartService;
    @Autowired
    private IUserService userService;

    @PutMapping("/add")
    public ResponseEntity<CartItem>addCartItemToCart(@RequestBody AddCartItemRequest req,
                                                     @RequestHeader("Authorization") String jwt) throws Exception {
        CartItem cartItem = cartService.addCartItemToCart(req, jwt);
        return new ResponseEntity<>(cartItem, HttpStatus.CREATED);
    }

    @PutMapping("/cart-item/update")
    public ResponseEntity<CartItem>updateCartItemQuantity(@RequestBody UpdateCartItemRequest req)
            throws Exception {
        CartItem cartItem = cartService.updateCartItemQuantity(req.getCartItemId(), req.getQuantity()) ;
        return new ResponseEntity<>(cartItem, HttpStatus.CREATED);
    }

    @DeleteMapping ("/cart-item/remove/{id}")
    public ResponseEntity<Cart>removeCartItemFromCart(@RequestHeader("Authorization") String jwt,
                                                      @PathVariable Integer id) throws Exception {
        Cart cart = cartService.removeCartItemFromCart(id, jwt);
        return new ResponseEntity<>(cart, HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Cart>getCartById(@PathVariable Integer id, @RequestHeader("Authorization") String jwt)
            throws Exception {
        User user = userService.findUserByJwtToken(jwt);
        Cart cart = cartService.findCartById(id);
        return new ResponseEntity<>(cart, HttpStatus.OK);
    }
    @GetMapping("/user/{id}")
    public ResponseEntity<Cart>getUserCart(@RequestHeader("Authorization") String jwt,
                                               @PathVariable Integer id) throws Exception {
        Cart cart = cartService.findCartByUserId(jwt);
        return new ResponseEntity<>(cart, HttpStatus.OK);
    }

    @PutMapping("/clear")
    public ResponseEntity<Cart>clearCart(@RequestHeader("Authorization") String jwt,
                                                    @PathVariable Integer id) throws Exception {
        Cart cart = cartService.clearCart(jwt);
        return new ResponseEntity<>(cart, HttpStatus.OK);
    }
}
