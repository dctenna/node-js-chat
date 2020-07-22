const playWithMessageModule = require('./play-with-message');

test('It should replace user with dog', () => {
  expect(
    playWithMessageModule.replaceUserWithDog({ message: 'hello', user: 'cat' })
  ).toStrictEqual({ message: 'hello', user: 'dog' });
});

test('It should add limit to message', () => {
  expect(
    playWithMessageModule.addLimit({ message: 'hello', user: 'cat' }, 300)
  ).toStrictEqual({ message: 'hello', user: 'cat', limit: 300 });
});
