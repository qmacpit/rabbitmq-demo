### start rabbitmq
```
docker run -d --hostname my-rabbit --name some-rabbit rabbitmq:3
```
### run consumer
```
env RABBITMQ_IP=172.17.0.2 node fanout/producer.js
```
### run producer
```
env RABBITMQ_IP=172.17.0.2 node fanout/producer.js
```