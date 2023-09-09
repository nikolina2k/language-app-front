import { Link } from "react-router-dom";
import food1Image from "../../assets/food1.jpg";
import fruits from "../../assets/fruit.jpg";
import animals from "../../assets/animals.jpg";
import veggies from "../../assets/veggies.jpg";

const categories = [
  {
    id: 0,
    title: "Татарские национальные блюда",
    description: "Слова для изучения татарских национальных блюд",
    bgImage: `url(${food1Image})`,
  },
  {
    id: 1,
    title: "Фрукты",
    description: "Слова для изучений названий фруктов",
    bgImage: `url(${fruits})`,
  },
  {
    id: 2,
    title: "Домашние животные",
    description: "Слова для изучения домашних животных",
    bgImage: `url(${animals})`,
  },
  {
    id: 3,
    title: "Овощи",
    description: "Слова для изучения овощей",
    bgImage: `url(${veggies})`,
  },
];

const CategoryList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-10">
      {categories.map((category) => (
        <Link to={`/word/${category.id}`} key={category.id}>
          <div
            className="bg-cover rounded-lg shadow-md hover:bg-grey-400 p-4 px-4 rounded-full text-white transition duration-300 ease-in-out transform hover:scale-110 h-full border"
            style={{
              backgroundImage: category.bgImage,
            }}
          >
            <div className="absolute inset-0 bg-black opacity-60 rounded-lg"></div>
            <div className="relative text-white">
              <div className="h-24">
                {" "}
                {/* Fixed height for title */}
                <h2 className="text-xl font-semibold line-clamp-3">
                  {category.title}
                </h2>
              </div>
            </div>
            <div className="relative text-white">
              <div className="h-16 mt-2">
                {" "}
                {/* Fixed height for description */}
                <p className="line-clamp-2">{category.description}</p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};
export default CategoryList;
