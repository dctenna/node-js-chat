module.exports = {
  checkMessage: function (message) {
    if (!message.user) {
      throw new Error('There is no user');
    } else {
      return message;
    }
  },
};
