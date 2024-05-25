import { Link } from "react-router-dom";
import { ABOUT_US_PAGE_ROUTE } from "../../Const/routes";

const Hero = () => {
  return (
    <section className="relative">
      <img className="w-full" src="/landing.webp" alt="Shop" />
      <div className="w-1/3 absolute top-40 left-28 flex flex-col gap-10">
        <h1 className="text-green-800 text-5xl leading-[1.1] font-bold">
          Shopping And Department Store.
        </h1>
        <p className="text-gray-600 text-2xl font-medium">
          Shopping is bit of a relaxing hobby for me, which is sometimes
          troubling for the bank balance.
        </p>
        <Link to={ABOUT_US_PAGE_ROUTE}>
          <button className="bg-green-800 text-white font-semibold px-6 py-2 rounded-full">
            Learn More
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
