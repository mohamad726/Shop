import { useParams } from "react-router-dom";
import { useFetchData } from "../../hooks/useFetchData";
import { getSingleData } from "../../services/getData";
import ProductTemplate from "../../Components/template/Product";

function Product() {
  const { product } = useParams();
  const { data, isLoading, error } = useFetchData(() => getSingleData(product));
  console.log(data);
  return <ProductTemplate data={data} isLoading={isLoading} error={error} />;
}

export default Product;
