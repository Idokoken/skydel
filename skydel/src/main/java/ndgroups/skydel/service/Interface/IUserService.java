package ndgroups.skydel.service.Interface;

import ndgroups.skydel.model.User;

public interface IUserService {
    public User findUserByJwtToken(String jwt) throws Exception;
    public User findUserByEmail(String email) throws Exception;
}
