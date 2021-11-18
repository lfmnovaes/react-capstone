import reducer from '../redux/cryptos/cryptos';

const mockData = [{
  id: '123',
  symbol: 'tst',
  name: 'test',
  price: 0,
  img: 'image',
},
{
  id: '42',
  symbol: 'li',
  name: 'Lorem Ipsum',
  price: 42,
  img: 'lorem',
}];

const action = {
  type: 'GET_CRYPTOS',
  payload: [],
}

describe('Test redux', () => {
  test('Check if gets empty', () => {
    expect(reducer([], action)).toEqual([]);
  });
  test('Check if gets the mock fetched data', () => {
    expect(reducer(mockData, action)).toEqual(mockData);
  });
});
