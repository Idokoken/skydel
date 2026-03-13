package ndgroups.skydel.respnse;

import lombok.Data;
import ndgroups.skydel.model.USER_ROLE;

@Data
public class AuthResponse {
    private String jwt;
    private String message;
    private USER_ROLE role;

}
