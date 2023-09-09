import { useParams } from "react-router-dom";
import items from "./Items";

const Chat = () => {

    // Use the useParams hook to get the item ID from the URL
  const { id } = useParams();

  // Find the item based on the item ID from the URL
  const selectedItem = items.find((item) => item.id === id);

  if (!selectedItem) {
    return <div>Item not found</div>;
  }

  return (
        <div className="lg:col-span-2 lg:block ">
      <div className="w-full">
        <div className="p-3 bg-white border-b border-gray-200 dark:bg-gray-900 dark:border-gray-700 text-white">
            {selectedItem.title}
        </div>

        <div className="relative w-full p-6 overflow-y-auto h-[30rem] bg-white border-b border-gray-200 dark:bg-gray-900 dark:border-gray-700">
          <ul className="space-y-2">
            
              <div className="text-white text-left">
                Some MEssage
              </div>
              <div  className="text-white text-right">
                Another message
              </div>
              <div  className="text-white text-left">
                Come cools message or what?
              </div>
          
          </ul>
        </div>

        <form>
        <div className="flex items-center justify-between w-full p-3 bg-white border-b border-gray-200 dark:bg-gray-900 dark:border-gray-700">

          <input
            type="text"
            placeholder="Write a message"
            className="block w-full py-2 pl-4 mx-3 outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            name="message"
            required
          />
          <button type="submit" className="text-white">
            
             Submit
          </button>
        </div>
      </form>
      </div>
    </div>
  );
};

export default Chat;
