import renderer from 'react-test-renderer';
import Crypto from '../components/Crypto';

const objTest = {
  id: '42',
  symbol: 'li',
  name: 'Lorem Ipsum',
  price: 42,
  img: 'lorem',
};

describe('Test Crypto component', () => {
  test('Compare Crypto component with snapshot', () => {
    const tree = renderer
      .create(<Crypto
        key={objTest.id}
        id={objTest.id}
        symbol={objTest.symbol}
        name={objTest.name}
        price={objTest.price}
        img={objTest.img}
      />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
