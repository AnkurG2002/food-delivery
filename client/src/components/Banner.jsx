import { Link } from "react-router-dom";
import bannerImg from "../assets/images/pizza_banner.png";
import { Button } from "./elements/Button";

function Banner() {
  return (
    <div className="banner pb-4 bg-black w-full max-md:px-12 px-24 mx-auto relative flex max-md:flex-col items-center justify-between">
      <div className="banner-description w-full md:w-1/2 py-4 md:p-3">
        <h2 className="mb-6 text-4xl font-bold text-white tracking-wider">
          Your Favourite food delivered hot & fresh at your Door step
        </h2>
        <p className="font-semibold text-lg text-red-600 py-2">Order Today!!</p>
        <div className="btn-container">
          <Button>
            <a href="#prods">Order Now</a>
          </Button>
          <Link
            to="/menu"
            className="text-yellow-400 hover:text-yellow-500 font-bold px-3"
          >
            See Menu
          </Link>
        </div>
      </div>
      <div className="banner-image w-full md:w-1/2 p-3 flex justify-end">
        <img src={bannerImg} alt="bannerIMG" className="max-h-96 tospin" />
      </div>
    </div>
  );
}

export default Banner;
