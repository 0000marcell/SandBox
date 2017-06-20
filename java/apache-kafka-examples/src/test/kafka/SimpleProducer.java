package test.kafka;

import kafka.javaapi.producer.Producer;
import kafka.producer.KeyedMessage;
import kafka.producer.ProducerConfig;
import org.apache.log4j.Logger;
import org.apache.log4j.BasicConfigurator;

import java.util.Properties;

public class SimpleProducer {
    static Logger logger = 
      Logger.getLogger(SimpleProducer.class);
    private static Producer<Integer, String> producer;
    private final Properties properties = new Properties();

    public SimpleProducer() {
        properties.put("metadata.broker.list", "localhost:9092");
        properties.put("serializer.class", "kafka.serializer.StringEncoder");
        properties.put("request.required.acks", "1");
        producer = new Producer<>(new ProducerConfig(properties));
    }

    public static void main(String[] args) {
      if(args.length == 0){
        System.out
          .println("SimpleProducer {topic} {msg}");
        return;
      }
      BasicConfigurator.configure();
      logger.info("beggining!");
      new SimpleProducer();
      logger.info("after producer creation!");
      String topic = args[0];
      String msg = args[1];
      logger.info("topic: "+topic);
      logger.info("msg "+msg);
      KeyedMessage<Integer, String> data = new KeyedMessage<>(topic, msg);
      producer.send(data);
      producer.close();
    }
}
