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
        <h1>name1</h1>
      </div>
      <div>
        <h1>name2</h1>
      </div>
    </div>
  );
};

export default Navbar;
