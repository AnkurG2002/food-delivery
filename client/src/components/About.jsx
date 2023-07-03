import aboutImg from "../assets/images/about-image.png";

function About() {
  return (
    <div
      id="about"
      className="bg-white flex max-lg:flex-col justify-center items-center p-24 max-md:p-12"
    >
      <div className="lg:w-[50%] lg:mr-4 max-lg:mb-6">
        <h2 className="text-2xl font-bold">About Us</h2>
        <div className="text-lg mt-2 lg:mr-6">
          Welcome to our food ordering website, where convenience meets culinary
          delight! We have created a user-friendly platform that connects you
          with a plethora of restaurants, bringing the flavors you crave right
          to your doorstep. With a seamless ordering process, personalized
          recommendations, and a secure payment gateway, we aim to provide you
          with a delightful and hassle-free food ordering experience.
        </div>
      </div>
      <div className="w-[500px] max-sm:w-[300px]">
        <img
          src={aboutImg}
          alt="about"
          className="rounded-3xl hover:opacity-70"
        />
      </div>
    </div>
  );
}

export default About;
