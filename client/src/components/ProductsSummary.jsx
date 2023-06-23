import { ProductsSummaryCard } from "./ProductsSummaryCard";

export function ProductsSummary({ products }) {
  return (
    <div className="flex flex-col overflow-y-auto">
      {products &&
        products.map((product, index) => {
          return <ProductsSummaryCard product={product} key={index} />;
        })}
    </div>
  );
}
