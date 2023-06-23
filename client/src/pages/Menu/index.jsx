import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  selectAllProducts,
} from "../../stores/menu/productsSlice";
import ProductDetailCard from "../../components/ProductDetailCard";
import { Tabs } from "../../components/Tabs";
import { addToCart } from "../../stores/cart/cartSlice";

function Menu() {
  const dispatch = useDispatch();
  const products = useSelector(selectAllProducts);
  const [activeTab, setActiveTab] = useState("");
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const onTabSwitch = (newActiveTab) => {
    setActiveTab(newActiveTab);

    let categories = products.products.map((product) => product.name.name);
    let index = categories.findIndex((category) => newActiveTab === category);

    index !== -1 ? setActiveTabIndex(index) : setActiveTabIndex(0);
  };

  const onAddProduct = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div>
      {products.status !== "fulfilled" ? (
        <div>Loading...</div>
      ) : (
        <div className="menu-wrapper">
          {products.products && (
            <Tabs
              list={products.products.map((product) => product.name.name)}
              activeTab={activeTab}
              onTabSwitch={onTabSwitch}
            />
          )}
          <div className="flex flex-wrap mx-2">
            {products.products &&
              products.products[activeTabIndex].products.map(
                (product, index) => (
                  <ProductDetailCard
                    key={index}
                    product={product}
                    onAddProduct={onAddProduct}
                  />
                )
              )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Menu;
