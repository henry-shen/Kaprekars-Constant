const obj = require('./index');

describe('Testing the helper function', () => {
  test(' "425316" should equal 123456', () => {
    expect(obj.digitSort('425316')).toBe(123456);
    expect(obj.digitSort('0010')).toBe(1);
  }); 
});

describe('Testing KaprekarsConstant function', () => {
  test(' "3524" should equal 3', () => {
    expect(obj.kaprekarsConstant('3524')).toBe(3); 
  });
  test(' "3215" should equal 7', () => {
    expect(obj.kaprekarsConstant('3215')).toBe(7); 
  });
  test(' "0001" should equal 5', () => {
    expect(obj.kaprekarsConstant('0001')).toBe(5); 
  });
});

describe('Testing the implementation of recursion', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  test(' "3524" should equal 3 and the function KaprekarsConstant should be called 3 times', () => {
    const mock = jest.spyOn(obj, 'kaprekarsConstant');
    obj.kaprekarsConstant('3524');
    expect(mock).toHaveBeenCalledTimes(3); 
  });
  test(' "6432" should equal 7 and the function KaprekarsConstant should be called 7 times', () => {
    const mock = jest.spyOn(obj, 'kaprekarsConstant');
    obj.kaprekarsConstant('6432');
    expect(mock).toHaveBeenCalledTimes(7); 
  });
});