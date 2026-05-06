package ndgroups.skydel.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.sql.Blob;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
public class Image {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column(length = 1000)
    private String imageUrl;

//    private String fileName;
//    private String fileType;
//    @Lob
//    @JsonIgnore
//    private Blob image;

    @JsonIgnore
    @ManyToOne
    private Food food;
    @JsonIgnore
    @ManyToOne
    private Restaurant restaurant;

}
