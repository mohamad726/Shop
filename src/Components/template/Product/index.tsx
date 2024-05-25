import Card from "../../Card/Card";

const ProductTemplate = ({ data, isLoading, error }) => {
  return (
    <main>
      {isLoading && <p>Loading ...</p>}
      {error && <p>Error</p>}
      <section className="p-9 grid grid-cols-3 gap-4">
        <Card data={data} />
      </section>
    </main>
  );
};

export default ProductTemplate;
