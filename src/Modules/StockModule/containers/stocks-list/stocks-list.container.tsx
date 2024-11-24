import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { ReactComponent as NasdaqLogo } from '../../../../Assets/svgs/nasdaq.svg';
import Grid2 from '@mui/material/Grid2';
import { useStocks } from 'src/Shared/hooks/data/stocks/stocks.hooks';
import { StyledAppBar, StyledPaper, StyledStocksContainer } from './stock-list.styles';
import { useCallback, useEffect, useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { useInView } from 'react-intersection-observer';
import { stocksApi } from 'src/Shared/services/apis/stocks-api.service';
import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import { debounce } from 'lodash';

import OutlinedInput from '@mui/material/OutlinedInput';
import { useAlert } from 'src/Shared/hooks/alert/useAlert';
import Alert from 'src/Shared/components/core-ui/alert/alert.component';
import { useNavigate } from 'react-router-dom';

const StocksListContainer = () => {
  const [stockList, setStockList] = useState<any[]>([]);
  const [nextUrl, setNextUrl] = useState<string | null>(null);
  const [isLoadingMore, setIsLoadingMore] = useState<boolean>(false);

  const [searchValue, setSearchValue] = useState<string>('');
  const [searchLoading, setSearchLoading] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const { ref, inView } = useInView();

  const { isOpenAlert, setIsOpenAlert, alertText, showAlert } = useAlert();

  const navigate = useNavigate();

  const { data, isLoading, failureReason } = useStocks({
    limit: 100,
    ...(searchQuery && { search: searchQuery })
  });

  useEffect(() => {
    if (failureReason) {
      setSearchLoading(false);
      // @ts-ignore
      showAlert(failureReason?.response?.data?.error);
    }
  }, [failureReason]);

  useEffect(() => {
    if (data) {
      data?.results.length > 0 ? setStockList(data?.results) : setStockList([]);
      data?.next_url ? setNextUrl(data?.next_url?.split('=')[1]) : setNextUrl(null);
      setSearchLoading(false);
    }
  }, [data]);

  const loadMoreStocks = async () => {
    setIsLoadingMore(true);
    stocksApi
      .searchStocks({ limit: 100, cursor: nextUrl, search: searchQuery })
      .then((response) => {
        setStockList((prev) => [...prev, ...response.results]);
        setNextUrl(response.next_url.split('=')[1]);
      })
      .catch((error) => {
        showAlert(error.response.data.error);
      })
      .finally(() => {
        setIsLoadingMore(false);
      });
  };

  // handle loading more stocks when user scrolls to the bottom of the page
  useEffect(() => {
    if (inView && nextUrl) {
      loadMoreStocks();
    }
  }, [inView]);

  // handle debouncing behaviuor for search input
  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    setSearchLoading(true);
    setNextUrl(null);
    debouncedSearch(e.target.value);
  };
  const debouncedSearch = useCallback(
    debounce((value: string) => {
      setSearchQuery(value);
    }, 1000),
    []
  );

  return (
    <>
      <StyledAppBar>
        <Toolbar>
          <NasdaqLogo
            style={{ width: '35px', height: '35px', cursor: 'pointer' }}
            onClick={() => navigate('/')}
          />

          <OutlinedInput
            placeholder={'Search stocks by name or ticker'}
            label=""
            endAdornment={
              <InputAdornment position="end">
                {searchLoading ? <CircularProgress size={20} /> : <SearchIcon />}
              </InputAdornment>
            }
            value={searchValue}
            autoComplete="off"
            onChange={onSearch}
          />

          <div />
        </Toolbar>
      </StyledAppBar>

      <StyledStocksContainer container spacing={2}>
        {isLoading ? (
          <Box sx={{ width: '40px', margin: '200px auto' }}>
            <CircularProgress />
          </Box>
        ) : (
          stockList.map((stock: any, index: number) => {
            return (
              <Grid2 key={index} size={{ xs: 6, md: 4, lg: 3 }}>
                <StyledPaper>
                  <span>{stock.ticker}</span> <br />
                  {stock.name}
                </StyledPaper>
              </Grid2>
            );
          })
        )}
      </StyledStocksContainer>

      <Box sx={{ width: '120px', margin: '24px auto' }}>
        {stockList.length > 0 ? (
          nextUrl ? (
            <Button variant="outlined" ref={ref} onClick={() => loadMoreStocks()}>
              {isLoadingMore ? 'Loading ...' : 'Load More'}
            </Button>
          ) : (
            !isLoading && 'No more stocks'
          )
        ) : (
          !isLoading && 'No stock found'
        )}
      </Box>

      <Alert
        data={{ text: alertText }}
        config={{ isOpen: isOpenAlert }}
        eventHandlers={{ setOpen: setIsOpenAlert }}
      />
    </>
  );
};

export default StocksListContainer;
