package ndgroups.skydel.request;

import lombok.Data;

@Data
public class UpdateCartItemRequest {
    private Integer cartItemId;
    private int quantity;
}
