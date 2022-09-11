import { AutoComplete } from '../components/AutoComplete';
import { StockList } from '../components/StockList';

export const StockOverviewPage = () => {
  return (
    <div>
      <h2 className="mt-5">StockOverviewPage</h2>
      <AutoComplete />
      <StockList />
    </div>
  );
};
