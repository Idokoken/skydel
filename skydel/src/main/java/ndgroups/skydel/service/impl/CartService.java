package ndgroups.skydel.service.impl;

import ndgroups.skydel.model.Cart;
import ndgroups.skydel.model.CartItem;
import ndgroups.skydel.model.Food;
import ndgroups.skydel.model.User;
import ndgroups.skydel.repositoy.CartItemRepository;
import ndgroups.skydel.repositoy.CartRepository;
import ndgroups.skydel.request.AddCartItemRequest;
import ndgroups.skydel.service.Interface.ICartService;
import ndgroups.skydel.service.Interface.IFoodService;
import ndgroups.skydel.service.Interface.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class CartService implements ICartService {
    @Autowired
    private CartRepository cartRepository;
    @Autowired
    private CartItemRepository cartItemRepository;
    @Autowired
    private IUserService userService;
    @Autowired
    private IFoodService foodService;

    @Override
    public CartItem addCartItemToCart(AddCartItemRequest req, String jwt) throws Exception {
        User user = userService.findUserByJwtToken(jwt);
        Food food = foodService.findFoodById(req.getFoodId());
        Cart cart = cartRepository.findByUserId(user.getId());
//        Cart cart = user.getCart();

        for (CartItem cartItem: cart.getCartItems()){
            if (cartItem.getFood().equals(food)){
                int newQuantity = cartItem.getQuantity() + req.getQuantity();
                return updateCartItemQuantity(cartItem.getCartItemId(), newQuantity);
            }
        }

        CartItem newCartItem = new CartItem();
        newCartItem.setFood(food);
        newCartItem.setCart(cart);
        newCartItem.setQuantity(req.getQuantity());
        newCartItem.setIngredients(req.getIngredients());
        newCartItem.setTotalPrice(req.getQuantity() * food.getPrice());

        CartItem saveCartItem = cartItemRepository.save(newCartItem);
        cart.getCartItems().add(saveCartItem);
        return saveCartItem;
    }

    @Override
    public CartItem updateCartItemQuantity(Integer cartItemId, int quantity) throws Exception {
        Optional<CartItem>cartItem = cartItemRepository.findById(cartItemId);
        if(cartItem.isEmpty()){
            throw new Exception("cart item not found");
        }
        CartItem item = cartItem.get();
        item.setQuantity(quantity);
        item.setTotalPrice(item.getFood().getPrice() * quantity);

        return cartItemRepository.save(item);
    }

    @Override
    public Cart removeCartItemFromCart(Integer cartItemId, String jwt) throws Exception {
        User user = userService.findUserByJwtToken(jwt);
        Cart cart = cartRepository.findByUserId(user.getId());
        Optional<CartItem>cartItem = cartItemRepository.findById(cartItemId);
        if(cartItem.isEmpty()){
            throw new Exception("cart item not found");
        }
        CartItem item = cartItem.get();
        cart.getCartItems().remove(item);

        return cartRepository.save(cart);
    }

    @Override
    public Long calculateCartTotal(Cart cart) throws Exception {
        Long total =  0L;
        for (CartItem cartItem: cart.getCartItems()){
            total = cartItem.getFood().getPrice() * cartItem.getQuantity();
        }
        return total;
    }

    @Override
    public Cart findCartById(Integer cartId) throws Exception {
        Optional<Cart>cart = cartRepository.findById(cartId);
        if (cart.isEmpty()) {
            throw new Exception("cart not found");
        }
        return cart.get();
    }

    @Override
    public Cart findCartByUserId(Integer userId) throws Exception {
//        User user = userService.getUserByUserId(userId);
        Cart cart = cartRepository.findByUserId(userId);
        cart.setTotalAmount(calculateCartTotal(cart));
        return cart;
    }

    @Override
    public Cart clearCart(Integer userId) throws Exception {
//        User user = userService.getUserByUserId(userId);
        Cart cart = findCartByUserId(userId);
        cart.getCartItems().clear();
        return cartRepository.save(cart);
    }
}
