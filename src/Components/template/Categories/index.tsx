import Card from "../../Card/Card";

const CategoriesTemplate = ({ category, data, isLoading, error }) => {
  const removeHyphens = (str: string): string => {
    return str.replace(/-/g, " ");
  };

  return (
    <main>
      {isLoading && <p>Loading ...</p>}
      {error && <p>Error</p>}
      <h1 className="text-center my-10 text-5xl font-black uppercase underline underline-offset-8">
        {removeHyphens(category)}
      </h1>
      <section className="p-9 grid grid-cols-4 gap-10">
        {data && data?.map((item) => <Card key={item.id} data={item} />)}
      </section>
    </main>
  );
};

export default CategoriesTemplate;
