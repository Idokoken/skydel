package ndgroups.skydel.service.impl;

import ndgroups.skydel.dto.RestaurantDto;
import ndgroups.skydel.model.Address;
import ndgroups.skydel.model.Restaurant;
import ndgroups.skydel.model.User;
import ndgroups.skydel.repositoy.AddressRepository;
import ndgroups.skydel.repositoy.RestaurantRepository;
import ndgroups.skydel.repositoy.UserRepository;
import ndgroups.skydel.request.CreateRestaurantRequest;
import ndgroups.skydel.service.Interface.IRestaurantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class RestaurantService implements IRestaurantService {
    @Autowired
    private RestaurantRepository restaurantRepository;
    @Autowired
    private AddressRepository addressRepository;
    @Autowired
    private UserRepository userRepository;

    @Override
    public Restaurant createRestaurant(CreateRestaurantRequest req, User user) {
        Address address = addressRepository.save(req.getAddress());
        Restaurant restaurant = new Restaurant();
        restaurant.setName(req.getName());
        restaurant.setDescription(req.getDescription());
        restaurant.setAddress(address);
        restaurant.setCuisineType(req.getCuisineType());
        restaurant.setContactInformation(req.getContactInformation());
        restaurant.setImages(req.getImages());
        restaurant.setOpeningHour(req.getOpeningHour());
        restaurant.setClosingHour(req.getClosingHour());
        restaurant.setRegistration(LocalDateTime.now());
        restaurant.setOwner(user);

        return restaurantRepository.save(restaurant);
    }

    @Override
    public Restaurant updateRestaurant(Integer restaurantId, CreateRestaurantRequest updateRestaurant)
            throws Exception {
        Restaurant restaurant = findRestaurantById(restaurantId);

        if(restaurant.getName()!= null){
            restaurant.setName(updateRestaurant.getName());
        }
        if(restaurant.getDescription()!= null){
            restaurant.setDescription(updateRestaurant.getDescription());
        }
        if(restaurant.getCuisineType()!= null){
            restaurant.setCuisineType(updateRestaurant.getCuisineType());
        }
        if(restaurant.getImages()!= null){
            restaurant.setImages(updateRestaurant.getImages());
        }
        if(restaurant.getOpeningHour()!= null){
            restaurant.setOpeningHour(updateRestaurant.getOpeningHour());
        }
        if(restaurant.getClosingHour()!= null){
            restaurant.setClosingHour(updateRestaurant.getClosingHour());
        }

        return restaurantRepository.save(restaurant);
    }

    @Override
    public void deleteRestaurant(Integer restaurantId) throws Exception {
        Restaurant restaurant = findRestaurantById(restaurantId);
//        if(restaurant==null){
//            throw new Exception("no restaurant with the given id " + restaurantId);
//        }
        restaurantRepository.delete(restaurant);
    }

    @Override
    public Restaurant findRestaurantById(Integer restaurantId) throws Exception {
        Optional<Restaurant> restaurant = restaurantRepository.findById(restaurantId);
        if(restaurant.isEmpty()){
            throw new Exception("no restaurant with the given id " + restaurantId);
        }
        return restaurant.get();
    }

    @Override
    public List<Restaurant> getAllRestaurant() {
        return restaurantRepository.findAll();
    }

//    @Override
//    public List<Restaurant> searchRestaurant(String query) {
//        return restaurantRepository.findBySearchQuery(query);
//    }

    @Override
    public Restaurant getRestaurantByUserId(Integer id) throws Exception {
        Restaurant restaurant = restaurantRepository.findByOwnerId(id);
        if(restaurant == null){
            throw new Exception("no restaurant with the given id " + id);
        }
        return restaurant;
    }

    @Override
    public RestaurantDto addToFavourites(Integer restaurantId, User user) throws Exception {
        Restaurant restaurant = findRestaurantById(restaurantId);
        RestaurantDto dto = new RestaurantDto();
        dto.setRestaurantId(restaurant.getId());
        dto.setDescription(restaurant.getDescription());
        dto.setTitle(restaurant.getName());
        dto.setImages(restaurant.getImages());

        boolean isFavourite = false;
        List<RestaurantDto>favourites = user.getFavourites();
        for (RestaurantDto favourite : favourites){
            if(favourite.getRestaurantId().equals(restaurantId)){
                isFavourite = true;
                break;
            }
        }
        if (isFavourite){
            favourites.removeIf(favourite -> favourite.getRestaurantId().equals(restaurantId));
        }else {
            favourites.add(dto);
        }

        userRepository.save(user);
        return dto;

    }

    @Override
    public Restaurant updateRestaurantStatus(Integer id) throws Exception {
        Restaurant restaurant = findRestaurantById(id);
        restaurant.setOpen(!restaurant.isOpen());
        return restaurantRepository.save(restaurant);
    }
}
