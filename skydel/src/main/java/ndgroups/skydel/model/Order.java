package ndgroups.skydel.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "orders")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer orderId;
    private Date orderDate;
//    @Enumerated(EnumType.STRING)
    private String orderStatus;
    private Long totalAmount;
    @OneToMany(mappedBy = "order", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<OrderItem> items;
    @ManyToOne
//    @JoinColumn(name = "user_id")
    private User user;
    @JsonIgnore
    @ManyToOne
    private Restaurant restaurant;
    @ManyToOne
//    @JoinColumn(name = "address_id")
    private Address deliveryAddress;
    private int totalItem;
    private Long totalPrice;



}
