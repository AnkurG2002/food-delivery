import aboutImg from "../assets/images/about-image.png";

function About() {
  return (
    <div
      id="about"
      className="bg-white flex max-lg:flex-col justify-center items-center p-24 max-md:p-12"
    >
      <div className="lg:w-[50%] lg:mr-4 max-lg:mb-6">
        <h2 className="text-2xl font-bold">About Us</h2>
        <div className="text-lg">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe eos
          iusto quibusdam repudiandae magnam praesentium soluta unde, accusamus
          animi exercitationem nam. Voluptatum vel illum delectus unde itaque
          numquam dignissimos alias dolor quisquam facere debitis expedita
          perspiciatis officia cum accusantium architecto, distinctio esse hic
          in sapiente earum nemo error. Neque, quia!
        </div>
      </div>
      <div className="w-[500px] max-sm:w-[300px]">
        <img src={aboutImg} alt="about" className="rounded-3xl" />
      </div>
    </div>
  );
}

export default About;
