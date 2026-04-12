package ndgroups.skydel.request;

import lombok.Data;
import ndgroups.skydel.model.Address;

@Data
public class OrderRequest {
    private Integer restaurantId;
    private Address deliveryAddress;
}
