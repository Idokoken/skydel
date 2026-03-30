package ndgroups.skydel.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
//@RequestMapping("${api.prefix}")
public class OrderController {
    @GetMapping("/test")
    public String getMessage(){
        return "hello testing";
    }
}
