import { AutoComplete } from '../components/AutoComplete';
import { StockList } from '../components/StockList';

export const StockOverviewPage = () => {
  return (
    <div>
      <div className="d-flex flex-column p-2 align-items-center mt-3">
        <img
          className="img"
          src="../picture.jpg"
          alt="stock"
          style={{ width: '520px' }}
        />
        <h2 className="mt-5">Stock application</h2>
      </div>

      <AutoComplete />
      <StockList />
    </div>
  );
};
