package ndgroups.skydel.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.math.BigDecimal;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
public class CartItem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer cartItemId;
    private int quantity;
    private Long unitPrice;
    private Long totalPrice;
    @JsonIgnore
    @ManyToOne(cascade = CascadeType.ALL)
    private Cart cart;
    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "food_id")
    private Food food;
    private List<String>ingredients;


}

