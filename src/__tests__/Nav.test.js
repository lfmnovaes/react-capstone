import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import Nav from '../components/Nav';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => ({
    pathname: "/"
  })
}));

describe('Test Nav component', () => {
  test('Check if shows Home on root', () => {
    render(<BrowserRouter><Nav /></BrowserRouter>);
    expect(screen.getByText('Home')).toBeInTheDocument();
  });
  test('Compare Nav with snapshot', () => {
    const tree = renderer
      .create(<BrowserRouter><Nav /></BrowserRouter>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
