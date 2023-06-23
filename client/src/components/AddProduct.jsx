export function AddProduct({ onAddProduct }) {
  return (
    <div className="flex justify-end">
      <button
        onClick={onAddProduct}
        className="bg-yellow-600 hover:bg-yellow-500 rounded-full w-5 h-5 flex items-center justify-center text-xl"
      >
        <span>+</span>
      </button>
    </div>
  );
}
