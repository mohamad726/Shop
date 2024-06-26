import { Link } from "react-router-dom";

const Card = ({ data }) => {
  return (
    <Link to={`${data?.id}`}>
      <article className="flex flex-col gap-4 border border-gray-400 rounded-lg shadow-lg p-3 min-h-96">
        <h5 className="text-lg font-semibold text-center">{data?.name}</h5>
        <img
          className="h-60 w-full rounded-md object-cover flex-grow"
          src={data?.image}
          alt={data?.name}
        />
        <span>${data?.price}</span>
      </article>
    </Link>
  );
};

export default Card;
