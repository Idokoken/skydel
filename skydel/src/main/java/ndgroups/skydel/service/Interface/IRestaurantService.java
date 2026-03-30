package ndgroups.skydel.service.Interface;

import ndgroups.skydel.dto.RestaurantDto;
import ndgroups.skydel.model.Restaurant;
import ndgroups.skydel.model.User;
import ndgroups.skydel.request.CreateRestaurantRequest;

import java.util.List;

public interface IRestaurantService {
    public Restaurant createRestaurant(CreateRestaurantRequest req, User user);
    public Restaurant updateRestaurant(Integer restaurantId, CreateRestaurantRequest updateRestaurant) throws
            Exception;
    public void deleteRestaurant(Integer restaurantId) throws Exception;
    public Restaurant findRestaurantById(Integer restaurantId) throws Exception;
    public List<Restaurant> getAllRestaurant();
//    public List<Restaurant> searchRestaurant(String query);
    public Restaurant getRestaurantByUserId(Integer id) throws Exception;
    public RestaurantDto addToFavourites(Integer restaurantId, User user) throws Exception;
    public Restaurant updateRestaurantStatus(Integer id)throws Exception;

}
