import { Link } from "react-router-dom";

const category = [
  {
    id: 1,
    title: "Furniture",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBFP2r7X9qypxSQAYEdg-ix2PhJQ0RZssSRjVcJfPEVQ&s",
    categoryName: "furniture",
  },
  {
    id: 2,
    title: "Hand Bag",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqoLhkk5uzj8Rx92Fp6gOzJRihFHzomOflGvNUze2yCw&s",
    categoryName: "hand-bag",
  },
  {
    id: 3,
    title: "Books",
    image:
      "https://media.licdn.com/dms/image/D4D12AQExorXUup5Ilg/article-cover_image-shrink_720_1280/0/1664311413075?e=2147483647&v=beta&t=NiblSaSkbbcqUoGQZAsEoacaVOBFATEtDkh4qOGJIhU",
    categoryName: "books",
  },
  {
    id: 4,
    title: "Tech",
    image:
      "https://cdn.vox-cdn.com/thumbor/x5n4FWu_Vw2ZzY4j9QWDR1EYqnU=/0x0:2040x1360/1400x1400/filters:focal(851x757:852x758)/cdn.vox-cdn.com/uploads/chorus_asset/file/22900781/bfarsace_211004_4777_0043.jpg",
    categoryName: "tech",
  },
  {
    id: 5,
    title: "Sneakers",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf17CBRWxwSli2FUhEIKEYHh9CkGR0sOkazKtmgN6bhQ&s",
    categoryName: "sneakers",
  },
  {
    id: 6,
    title: "Travel",
    image:
      "https://rukminim2.flixcart.com/image/850/1000/j1jlksw0/poster/y/w/h/medium-poster2123-travel-around-the-world-on-good-quality-hd-original-imaet2nf4qutqyd6.jpeg?q=90&crop=false",
    categoryName: "travel",
  },
];

const Category = () => {
  return (
    <section className="flex flex-col gap-7 px-6">
      <h3 className="text-2xl font-bold">Our Categories</h3>
      <div className="flex justify-between">
        {category.map((item) => {
          return (
            <Link to={item.categoryName} key={item.id} className="w-24">
              <h5 className="text-center">{item.title}</h5>
              <img
                className="w-full h-24 rounded-xl"
                src={item.image}
                alt={item.title}
              />
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Category;
