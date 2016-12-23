const connect = require('./utils').connect;
const bail = require('./utils').bail;

const ex = 'io';

connect(conn => {
  console.log('consumer connected');
  conn.createChannel((err, channel) => {

    if (err) {
      bail(err);
    }

    channel.assertExchange(ex, 'fanout', { durable: false});

    channel.assertQueue('', { exclusive: true }, (err, q) => {
      channel.bindQueue(q.queue, ex, '');

      channel.consume(q.queue, function(msg) {
        console.log(msg.content.toString());
      }, {noAck: true});
    });

  });
})