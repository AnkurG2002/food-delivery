import { Button } from "./elements/Button";

function ProductDetailCard({ product, onAddProduct }) {
  const addProduct = () => {
    onAddProduct(product);
  };
  return (
    <div className="w-[320px] p-4 m-4 rounded-lg bg-slate-50">
      <div className="flex-col items-center justify-around">
        <div className="text-3xl text-center font-extrabold max-md:text-2xl max-sm:text-xl">
          {product.name}
        </div>
        <p className="w-[90%] mx-auto text-2xl text-gray-500 max-md:text-xl max-sm:text-lg my-6">
          {product.desciption}
        </p>
      </div>

      <div className="text-3xl font-bold text-black max-md:text-2xl max-sm:text-xl">
        {product.price}
      </div>

      <div className="w-full flex items-center justify-center">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-40 h-40 rounded-xl object-cover"
        />
      </div>

      <div className="w-full flex items-center justify-center">
        <Button onClick={addProduct}>Add to Cart</Button>
      </div>
    </div>
  );
}

export default ProductDetailCard;
