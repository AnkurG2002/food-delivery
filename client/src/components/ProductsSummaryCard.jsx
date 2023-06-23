import { useDispatch } from "react-redux";
import {
  incrementProductAmount,
  decrementProductAmount,
} from "../stores/cart/cartSlice";

export function ProductsSummaryCard({ product }) {
  const dispatch = useDispatch();

  return (
    <div className="flex max-sm:flex-col p-1 my-2 sm:p-2 border-b border-b-gray-200">
      <div className="product-image mr-2 border border-grey-200 rounded-lg sm:w-1/3 max-sm:w-1/3 max-sm:mx-auto">
        <img src={product.imageUrl} alt={product.name} />
      </div>
      <div className="product-info">
        <h3 className="max-sm:mt-3 font-bold">{product.name}</h3>
        <p className="text-gray-600 max-sm:my-4">{product.desciption}</p>
      </div>
      <div className="product-price-qt sm:ml-4 flex flex-col items-center justify-center">
        <div className="price"> ₹ {product.price}</div>
        <div className="quantity flex">
          <button
            className="p-1"
            disabled={product.amount <= 0}
            onClick={() => dispatch(decrementProductAmount(product))}
          >
            -
          </button>
          <span className="p-1">{product.amount}</span>
          <button
            className="p-1"
            onClick={() => dispatch(incrementProductAmount(product))}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}
