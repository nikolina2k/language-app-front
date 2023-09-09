import items from "./Items";
import React, { useState } from "react";
import SingleDialog from "./SingleDialog";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
    <div className="p-4">
      <div className="pb-4 flex space-x-4">
        <div className="flex-grow">
          <select
            data-te-select-init
            className="border rounded-lg pl-2 pr-8 py-1 w-full relative focus:outline-none focus:border-green-500 focus:ring focus:ring-green-200"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">All Categories</option>
            <option value="Romance">Romance</option>
            <option value="Horror">Horror</option>
            <option value="Drama">Drama</option>
            <option value="Action">Action</option>
            <option value="Sci-Fi">Sci-Fi</option>
          </select>
        </div>

        <div className="flex-grow">
          <select
            data-te-select-init
            className="border rounded-lg pl-2 pr-8 py-1 w-full relative focus:outline-none focus:border-green-500 focus:ring focus:ring-green-200"
            value={selectedLevel}
            onChange={(e) => setSelectedLevel(e.target.value)}
          >
            <option value="">All Levels</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
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
