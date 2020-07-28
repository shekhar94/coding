

package academy.learn;

import org.owasp.esapi.*;

public class Hello {
    private static final Logger logger = ESAPI.getLogger(Hello.class);
    private static final Encoder encoder = ESAPI.encoder();
    public static void main(String[] args)  {
        String encodedHTML = encoder.encodeForHTML("Encoded html: <html><script>alert('hello')</script></html>");
        logger.info(Logger.SECURITY_AUDIT, encodedHTML);
    }
}
