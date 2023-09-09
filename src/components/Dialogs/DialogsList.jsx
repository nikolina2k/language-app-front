import items from "./Items";
import SingleDialog from "./SingleDialog";

const DialogsList = () => {
  const sortedItems = items.slice().sort((a, b) => b.voteCount - a.voteCount);

  return (
    <div className="p-4">
      <div className="pb-4 flex space-x-4">
        <div className="flex-grow">
          <select
            data-te-select-init
            className="border rounded-lg pl-2 pr-8 py-1 w-full relative"
          >
            <option value="1">Romance</option>
            <option value="2">Horror</option>
            <option value="3">Drama</option>
            <option value="4">Action</option>
            <option value="5">Sci-Fi</option>
          </select>
        </div>

        <div className="flex-grow">
          <select
            data-te-select-init
            className="border rounded-lg pl-2 pr-8 py-1 w-full relative"
          >
            <option value="1">Easy</option>
            <option value="2">Medium</option>
            <option value="3">Hard</option>
          </select>
        </div>

        <div className="flex-grow">
          <form>
            <div className="relative">
              <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
                Search
              </label>
              <input
                type="text"
                placeholder="Search"
                className="border rounded-lg pl-10 pr-2 py-1 w-full relative focus:outline-none focus:border-green-500 focus:ring focus:ring-green-200"
              />
            </div>
          </form>
        </div>
      </div>

      <ul>
        {sortedItems &&
          sortedItems.map((item) => (
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
