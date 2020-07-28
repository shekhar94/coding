package academy.learnprogramming.console;

import academy.learnprogramming.config.GameConfig;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

/**
 * project Lombok is a java library that helps generate boilerplate code
 */
@Slf4j
public class Main {

    public static void main(String[] args) {
        log.info("Guess the number game");

        // create context (container)
        ConfigurableApplicationContext context = new AnnotationConfigApplicationContext(GameConfig.class);

        context.close();
    }
}
