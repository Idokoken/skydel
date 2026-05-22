package ndgroups.skydel.mapper;

import ndgroups.skydel.dto.RestaurantDto;
import ndgroups.skydel.model.Restaurant;


public class RestaurantMapper {
    public static Restaurant mapToRestaurant(RestaurantDto restaurantDto) {
        Restaurant restaurant = new Restaurant(
                restaurantDto.getRestaurantId(),
                restaurantDto.getName(),
                restaurantDto.getDescription(),
                restaurantDto.getImages()

        );

        return restaurant;
    }

    public static RestaurantDto mapToProductDto(Restaurant restaurant) {
        RestaurantDto restaurantDto = new RestaurantDto(
                restaurant.getId(),
                restaurant.getName(),
                restaurant.getDescription(),
                restaurant.getImages()
        );

        return restaurantDto;
    }
}
