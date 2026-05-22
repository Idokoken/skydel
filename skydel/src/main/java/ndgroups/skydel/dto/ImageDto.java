package ndgroups.skydel.dto;

import jakarta.persistence.Embeddable;
import lombok.Data;

@Data
@Embeddable
public class ImageDto {
    private Integer imageId;
    private String imageName;
    private String imageUrl;
}
