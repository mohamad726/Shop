import { useParams } from "react-router-dom";
import CategoriesTemplate from "../../Components/template/Categories";
import { useFetchData } from "../../hooks/useFetchData";
import { getData } from "../../services/getData";

function Category() {
  const { category } = useParams();
  const { data, isLoading, error } = useFetchData(() => getData(category));
  return <CategoriesTemplate data={data} isLoading={isLoading} error={error} />;
}

export default Category;
