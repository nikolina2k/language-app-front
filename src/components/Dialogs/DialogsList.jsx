import items from "./Items";
import { useState } from "react";
import SingleDialog from "./SingleDialog";

const DialogsList = () => {
  const sortedItems = items.slice().sort((a, b) => b.voteCount - a.voteCount);

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedLevel, setSelectedLevel] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");


  const handleSearchChange = (event) => {
    const query = event.target.value.toLowerCase();

    // Filter the items based on the search query
    const filtered = items.filter((item) =>
      item.title.toLowerCase().includes(query)
    );

    // Update the state with the filtered items
    setFilteredItems(filtered);
    setSearchQuery(query);
  };

  return (
    <div className="p-4 mt-5">
      <div className="pb-8 flex space-x-4">
        <div className="flex-grow">
          <select
            data-te-select-init
            className="border rounded-lg pl-2 pr-8 py-1 w-full relative focus:outline-none focus:border-green-500 focus:ring focus:ring-green-200"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">Все категории</option>
            <option value="Romance">Романтика</option>
            <option value="Horror">Ужастик</option>
            <option value="Drama">Драма</option>
            <option value="Action">Действие</option>
            <option value="Sci-Fi">Фантастика</option>
          </select>
        </div>

        <div className="flex-grow">
          <select
            data-te-select-init
            className="border rounded-lg pl-2 pr-8 py-1 w-full relative focus:outline-none focus:border-green-500 focus:ring focus:ring-green-200"
            value={selectedLevel}
            onChange={(e) => setSelectedLevel(e.target.value)}
          >
            <option value="">Все уровни</option>
            <option value="Easy">Легкий</option>
            <option value="Medium">Средний</option>
            <option value="Hard">Сложный</option>
          </select>
        </div>

        <div className="flex-grow">
        <form>
            <div className="relative">
              <label className="mb-2 pl-0 text-sm font-medium text-gray-900 sr-only dark:text-white">
                Search
              </label>
              <input
                type="text"
                placeholder="Search"
                className="border rounded-lg pl-10 pr-2 py-1 w-full relative focus:outline-none focus:border-green-500 focus:ring focus:ring-green-200"
                value={searchQuery}
                onChange={handleSearchChange}
              />
            </div>
          </form>
        </div>
      </div>

      <ul>
      {(searchQuery
        ? filteredItems
        : sortedItems
      ).filter((item) =>
        (selectedCategory === "" || item.category === selectedCategory) &&
        (selectedLevel === "" || item.level === selectedLevel)
      ).map((item) => (
        <SingleDialog
          key={item.id}
          id={item.id}
          title={item.title}
          description={item.description}
          voteCount={item.voteCount}
        />
      ))}
      </ul>
    </div>
  );
};

export default DialogsList;
