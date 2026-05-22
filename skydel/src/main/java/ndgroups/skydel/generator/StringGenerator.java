package ndgroups.skydel.generator;

import org.hibernate.engine.spi.SharedSessionContractImplementor;
import org.hibernate.id.IdentifierGenerator;

import java.io.Serializable;
import java.util.UUID;

public class StringGenerator implements IdentifierGenerator {
    @Override
    public Serializable generate(SharedSessionContractImplementor session, Object object) {
        // Use UUID or any custom logic to generate unique IDs
        return "ID-" + UUID.randomUUID().toString();
    }
}
