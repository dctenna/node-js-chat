const processMessage = require('./chain-of-responsibility');

test('It should add cat smile to message when user === cat', () => {
  expect(processMessage({ message: 'hello', user: 'cat' })).toBe('hello ^._.^');
});

test('It should add smile to message', () => {
  expect(processMessage({ message: 'hello', user: 'dog' })).toBe('hello :-)');
});

test('It should add new date to message when user === lion', () => {
  jest
    .spyOn(global, 'Date')
    .mockImplementationOnce(() =>
      new Date('2019-05-14T11:01:58.135Z').valueOf()
    );

  expect(processMessage({ message: 'hello', user: 'lion' })).toEqual(
    `${new Date('2019-05-14T11:01:58.135Z')}: hello`
  );
});
