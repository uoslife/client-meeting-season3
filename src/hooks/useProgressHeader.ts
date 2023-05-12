import { useAppDispatch } from '@/store/hooks';
import {
  setCurrentPage,
  setIsProgressbar,
  setMaxPage,
  setTitle,
} from '@/store/feature/progressHeaderSlice';

const useProgressHeader = () => {
  const dispatch = useAppDispatch();

  const updateProgressHeader = (currentPage, maxPage, isProgressbar, title) => {
    dispatch(setCurrentPage(currentPage));
    dispatch(setMaxPage(maxPage));
    dispatch(setIsProgressbar(isProgressbar));
    dispatch(setTitle(title));
  };

  return { updateProgressHeader };
};

export default useProgressHeader;
