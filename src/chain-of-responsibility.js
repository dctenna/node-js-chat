function addTime(message) {
  if (message.user === 'lion') {
    return `${new Date()}: ${message.message}`;
  }
}

function addCatSmile(message) {
  if (message.user === 'cat') {
    return `${message.message} ^._.^`;
  }
}

function addSmile(message) {
  return `${message.message} :-)`;
}

const chain = [addTime, addCatSmile, addSmile];

module.exports = function processMessage(message) {
  for (let func of chain) {
    const result = func(message);
    if (result) {
      return result;
    }
  }
};

