import { render, waitFor, screen } from '@testing-library/react';
import axios from 'axios';
import { BrowserRouter } from 'react-router-dom';
import DonorsList from '../DonarsList';

jest.mock('axios', () => ({
  get: jest.fn()
}));

const renderWithRouter = (component) => {
  return {
    ...render(<BrowserRouter>{component}</BrowserRouter>)
  };
};

const mockResponse = {
  data: [
    {
      id: 1,
      firstName: 'Tom',
      lastName: 'Pom',
      age: 40,
      gender: 'Male',
      bloodGroup: 'A+'
    }
  ]
};

test('Fetches data and renders post list', async () => {
  axios.get.mockResolvedValue(mockResponse);
  renderWithRouter(<DonorsList />);

  expect(screen.getByTestId('post-loading')).toBeInTheDocument();

  await waitFor(() => {
    expect(axios.get).toHaveBeenCalled();
    const postTitle = screen.getByTestId('first-name');
    expect(postTitle).toHaveTextContent('Tom');
  });
});
