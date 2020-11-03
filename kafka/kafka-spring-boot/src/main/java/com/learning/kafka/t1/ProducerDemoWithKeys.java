package com.learning.kafka.t1;

import org.apache.kafka.clients.producer.*;
import org.apache.kafka.common.serialization.StringSerializer;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.Properties;

public class ProducerWithCallback {

    public static void main(String[] args) {
        final Logger logger = LoggerFactory.getLogger(ProducerWithCallback.class);

        String bootstrapServer = "127.0.0.1:9092";

        // create producer properties
        Properties properties = new Properties();
        properties.setProperty(ProducerConfig.BOOTSTRAP_SERVERS_CONFIG, bootstrapServer);
        properties.setProperty(ProducerConfig.KEY_SERIALIZER_CLASS_CONFIG, StringSerializer.class.getName());
        properties.setProperty(ProducerConfig.VALUE_SERIALIZER_CLASS_CONFIG, StringSerializer.class.getName());

        // create producer
        KafkaProducer<String, String> producer = new KafkaProducer<String, String>(properties);


        for (int messageNumber = 0; messageNumber < 10; messageNumber++) {
            // create producer record
            ProducerRecord<String, String> record = new ProducerRecord<String, String>("learning_kafka_first_topic",
                    "hello world from producer with callback " + Integer.toString(messageNumber));

            // send Data
            producer.send(record, new Callback() {
                public void onCompletion(RecordMetadata metadata, Exception exception) {
                    // executes every time a record is successfully sent or an exception is thrown
                    if (exception == null) {
                        logger.info("Received new metadata. \n" + "Topic: " + metadata.topic() + "\n" + "Partition: "
                                + metadata.partition() + "\n" + "Offset: " + metadata.offset() + "\n" + "Timestamp: "
                                + metadata.timestamp());
                    } else {
                        logger.error("Error while producing", exception);
                    }
                }
            });
        }


        // flush data
        producer.flush();
        // flush and close producer
        producer.close();
    }
}
