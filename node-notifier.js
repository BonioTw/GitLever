const notifier = require('node-notifier');
const path = require('path');

var img_path =  __dirname + '/img';

function send_notify(title, message){
  notifier.notify({
    title: title,
    message: message,
    icon: path.join(img_path, 'git-lever.png'),
    sound: true,
    reply: true,
  });
}
