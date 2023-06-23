import { useEffect, useState } from "react";
import { ProductPreviewCard } from "./ProductPreviewCard";
import axios from "axios";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { useDispatch } from "react-redux";
import { addToCart } from "../stores/cart/cartSlice";

function ProductsPreview() {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products")
      .then((response) => setProducts(response.data?.data))
      .catch((err) => console.log(err));
  }, []);

  const onAddProduct = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="container text-white text-center mx-auto my-8 w-2/3">
      <Carousel
        swipeable={true}
        draggable={false}
        showDots={true}
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        transitionDuration={500}
      >
        {products.map((product, index) => {
          return (
            <div key={index} className="w-full p-2">
              <ProductPreviewCard
                product={product}
                onAddProduct={onAddProduct}
              />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}

export default ProductsPreview;
