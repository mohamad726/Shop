import Category from "../../Categories";
import Hero from "../../Hero";

const HomeTemplate = () => {
  return (
    <main className="flex flex-col gap-9">
      <Hero />
      <Category />
    </main>
  );
};

export default HomeTemplate;
