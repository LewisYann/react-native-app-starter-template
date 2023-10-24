import {PAGINATION_LENGHT} from 'constants/all';
import {useState} from 'react';

function useRtkPagination<T>({
  paginationStep = PAGINATION_LENGHT,
  getMoreEntities,
  data,
}: {
  paginationStep: number;
  getMoreEntities: (props: unknown) => void;
  data;
}) {
  const [hasReachedEnd, setReachedEnd] = useState(false);
  const [pagination, setPagination] = useState(paginationStep);
  const [paginateData, setDataPaginate] = useState<T>();

  const loadMore = async () => {
    setPagination(prev => prev + PAGINATION_LENGHT);
    await getMoreEntities({
      limit: pagination,
      offset: pagination - 1,
    });
    if (data?.results) {
      setDataPaginate(
        prev => [...((prev as Array<unknown>) || []), ...(data || [])] as T,
      );
      setReachedEnd(false);
    }
  };
  const onReachEndPagination = () => {
    setReachedEnd(true);
  };

  return {hasReachedEnd, loadMore, onReachEndPagination, paginateData};
}

export default useRtkPagination;
