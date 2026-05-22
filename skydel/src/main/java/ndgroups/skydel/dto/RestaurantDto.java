package ndgroups.skydel.dto;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Embeddable
public class RestaurantDto {
    private Integer restaurantId;
    private String name;
    private String description;
//    @Column(length = 1000)
    private List<String> images;
}
