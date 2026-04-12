package ndgroups.skydel.service.Interface;

import ndgroups.skydel.model.Cart;
import ndgroups.skydel.model.CartItem;
import ndgroups.skydel.request.AddCartItemRequest;

public interface ICartService {
    public CartItem addCartItemToCart(AddCartItemRequest req, String jwt) throws Exception;
    public CartItem updateCartItemQuantity(Integer cartItemId, int quantity) throws Exception;
    public Cart removeCartItemFromCart(Integer cartItemId, String jwt) throws Exception;
    public Long calculateCartTotal(Cart cart) throws Exception;
    public Cart findCartById(Integer cartId) throws Exception;
    public Cart findCartByUserId(String jwt) throws Exception;
    public Cart clearCart(String jwt) throws Exception;


}
