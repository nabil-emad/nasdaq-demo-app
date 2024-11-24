import { useQuery } from '@tanstack/react-query';
import { stocksApi } from 'src/Shared/services/apis/stocks-api.service';

const useStocks = (params: any) => {
  return useQuery({
    queryKey: ['search-stocks', params],
    queryFn: () => stocksApi.searchStocks(params),
    staleTime: 10 * 60 * 1000, // 10 minutes
    retry: 0
  });
};

export { useStocks };
