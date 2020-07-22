module.exports = {
  replaceUserWithDog(message) {
    return ({
      ...message,
      user: 'dog',
    });
  },
  addLimit(message, limit) {
    return ({
      ...message,
      limit,
    });
  },
};
