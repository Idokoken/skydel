package ndgroups.skydel.request;

import lombok.Data;
import ndgroups.skydel.model.*;

import java.time.LocalDateTime;
import java.util.List;

@Data
public class CreateRestaurantRequest {
    private Integer restaurantId;
    private String name;
    private User owner;
    private String description;
    private String cuisineType;
    private Address address;
    private ContactInformation contactInformation;
    private List<String> images;
    private String openingHour;
    private String closingHour;
    private LocalDateTime registration;

}
