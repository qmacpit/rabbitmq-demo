const connect = require('./utils').connect;
const bail = require('./utils').bail;

const q = 'io';

connect(conn => {
  console.log('producer connected')
  conn.createChannel((err, channel) => {

    if (err) {
      bail(err);
    }

    channel.assertExchange(q, 'fanout', { durable: false });
    let counter = 0;
    setInterval(() => {
      channel.publish(q, '', new Buffer(`message : ${counter++}`));
    }, 2000);

  });

})