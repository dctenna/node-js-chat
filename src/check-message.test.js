const checkMessageModule = require('./check-message');

test('It should throw error when there is no user in message', () => {
  try {
    checkMessageModule.checkMessage({ message: 'hello' });
  } catch (error) {
    expect(error).toEqual(new Error('There is no user'));
  }
});
