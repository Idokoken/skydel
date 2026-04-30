package ndgroups.skydel.service.impl;

import ndgroups.skydel.config.JwtProvider;
import ndgroups.skydel.model.User;
import ndgroups.skydel.repositoy.UserRepository;
import ndgroups.skydel.service.Interface.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService implements IUserService {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private JwtProvider jwtProvider;

    @Override
    public User findUserByJwtToken(String jwt) throws Exception {
        String email = jwtProvider.getEmailFromJwtToken(jwt);
        User user = userRepository.findByEmail(email);
        if(user==null){
            throw new Exception("user not found");
        }
        return user;
    }

    @Override
    public User findUserByEmail(String email) throws Exception {
        User user = userRepository.findByEmail(email);
        if(user==null){
            throw new Exception("user not found");
        }
        return user;
    }

    @Override
    public User getUserByUserId(Integer id) throws Exception{
        Optional<User> user = userRepository.findById(id);
        if(user.isEmpty()){
            throw new Exception("user not found with id " + id);
        }
        return user.get();
    }
}
