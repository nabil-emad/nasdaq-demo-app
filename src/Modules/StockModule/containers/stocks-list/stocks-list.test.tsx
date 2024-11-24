import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { useStocks } from 'src/Shared/hooks/data/stocks/stocks.hooks';
import { useInView } from 'react-intersection-observer';
import { stocksApi } from 'src/Shared/services/apis/stocks-api.service';
import { useAlert } from 'src/Shared/hooks/alert/useAlert';
import { useNavigate } from 'react-router-dom';
import StocksListContainer from './stocks-list.container';

// Mock the dependencies
jest.mock('src/Shared/hooks/data/stocks/stocks.hooks');
jest.mock('react-intersection-observer');
jest.mock('src/Shared/services/apis/stocks-api.service');
jest.mock('src/Shared/hooks/alert/useAlert');
jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn()
}));

// Mock SVG import
jest.mock('../../../../Assets/svgs/nasdaq.svg', () => ({
  ReactComponent: () => <div data-testid="nasdaq-logo" />
}));

describe('StocksListContainer', () => {
  const mockStocksData = {
    results: [
      { ticker: 'AAPL', name: 'Apple Inc.' },
      { ticker: 'GOOGL', name: 'Alphabet Inc.' }
    ],
    next_url: 'http://example.com/stocks?cursor=next'
  };

  const mockUseStocks = useStocks as jest.Mock;
  const mockUseInView = useInView as jest.Mock;
  const mockStocksApi = stocksApi as jest.Mocked<typeof stocksApi>;
  const mockUseAlert = useAlert as jest.Mock;
  const mockUseNavigate = useNavigate as jest.Mock;

  beforeEach(() => {
    mockUseStocks.mockReturnValue({ data: mockStocksData, isLoading: false, failureReason: null });
    mockUseInView.mockReturnValue({ ref: jest.fn(), inView: false });
    mockStocksApi.searchStocks = jest.fn().mockResolvedValue(mockStocksData);
    mockUseAlert.mockReturnValue({
      isOpenAlert: false,
      setIsOpenAlert: jest.fn(),
      alertText: '',
      showAlert: jest.fn()
    });
    mockUseNavigate.mockReturnValue(jest.fn());
  });

  test('renders StocksListContainer and displays stocks', async () => {
    render(<StocksListContainer />);

    await waitFor(() => {
      expect(screen.getByText('AAPL')).toBeInTheDocument();
      expect(screen.getByText('Apple Inc.')).toBeInTheDocument();
      expect(screen.getByText('GOOGL')).toBeInTheDocument();
      expect(screen.getByText('Alphabet Inc.')).toBeInTheDocument();
    });
  });

  test('handles search input', async () => {
    render(<StocksListContainer />);

    const searchInput = screen.getByPlaceholderText('Search stocks by name or ticker');
    await userEvent.type(searchInput, 'Apple');

    await waitFor(
      () => {
        expect(mockUseStocks).toHaveBeenCalledWith(expect.objectContaining({ search: 'Apple' }));
      },
      { timeout: 1500 }
    ); // Increased timeout due to debounce
  });

  test('loads more stocks when "Load More" button is clicked', async () => {
    mockUseInView.mockReturnValue({ ref: jest.fn(), inView: true });

    render(<StocksListContainer />);

    const loadMoreButton = screen.getByText('Load More');
    await userEvent.click(loadMoreButton);

    await waitFor(() => {
      expect(mockStocksApi.searchStocks).toHaveBeenCalled();
    });
  });

  test('displays error message when API call fails', async () => {
    const errorMessage = 'API Error';
    mockUseStocks.mockReturnValue({
      data: null,
      isLoading: false,
      failureReason: { response: { data: { error: errorMessage } } }
    });

    render(<StocksListContainer />);

    await waitFor(() => {
      expect(mockUseAlert().showAlert).toHaveBeenCalledWith(errorMessage);
    });
  });
});
