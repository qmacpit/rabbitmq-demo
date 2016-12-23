
function bail(err) {
  console.error(err);
  process.exit(1);
}

const connect = callback => {
  require('amqplib/callback_api')
    .connect(`amqp://${process.env.RABBITMQ_IP}`, function(err, conn) {
      if (err != null) bail(err);
      callback(conn);
    });
}


module.exports.connect = connect;
module.exports.bail = bail;