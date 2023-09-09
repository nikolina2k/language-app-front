const Navbar = () => {
  return (
    <div className="flex justify-between items-center border-b border-gray-100 w-full px-44 py-2">
        <div className="text-3xl font-extrabold text-gray-900 dark:text-white font-roboto">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-pink-600 from-blue-400">
            Language
          </span>
          App
        </div>
      
      <div className="flex justify-center item-center mx-auto">
        <ul className="flex space-x-4">
            <li>
              <a href="/" className="text-black">Home</a>
            </li>
            <li>
              <a href="/word" className="text-black">Word</a>
            </li>
            <li>
              <a href="/dialog" className="text-black">Dialog</a>
            </li>
          </ul>
      </div>
     
    </div>
  );
};

export default Navbar;
