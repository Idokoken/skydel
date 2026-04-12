package ndgroups.skydel.request;

import lombok.Data;

import java.util.List;

@Data
public class AddCartItemRequest {
    private Integer foodId;
    private int quantity;
    private List<String>ingredients;
}
