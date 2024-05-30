import { Link } from "react-router-dom";
import { useFetchData } from "../../hooks/useFetchData";
import { getCategoriesData } from "../../services/getData";

const Category = () => {
  const { data, isLoading, error } = useFetchData(getCategoriesData);
  return (
    <section className="p-8">
      {isLoading && <p>Loading ...</p>}
      {error && <p>Error</p>}
      {data && (
        <div className="flex flex-col gap-7 px-6">
          <h3 className="text-2xl font-bold">Shop Our Top Categories</h3>
          <div className="flex justify-between gap-5">
            {data?.map((item: any) => {
              return (
                <Link to={item.categoryName} key={item.id} className="relative">
                  <h5 className="absolute top-3 left-1/2 -translate-x-1/2 text-white text-xl font-semibold">
                    {item.title}
                  </h5>
                  <img
                    className="w-full h-full"
                    src={item.image}
                    alt={item.title}
                  />
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
};

export default Category;
