import Card from "../../Card/Card";

const CategoriesTemplate = ({ data, isLoading, error }) => {
  return (
    <main>
      {isLoading && <p>Loading ...</p>}
      {error && <p>Error</p>}
      <section className="p-9 grid grid-cols-3 gap-4">
        {data && data?.map((item) => <Card key={item.id} data={item} />)}
      </section>
    </main>
  );
};

export default CategoriesTemplate;
