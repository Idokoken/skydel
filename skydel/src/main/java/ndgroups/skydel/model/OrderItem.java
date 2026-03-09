package ndgroups.skydel.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
@Table
public class OrderItem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer orderItemId;
    @ManyToOne
    private Food food;
    private int quantity;
    private Long totalPrice;
    private List<String>ingredients;
    @ManyToOne
    @JoinColumn(name = "order_id")
    private Order order;
}


