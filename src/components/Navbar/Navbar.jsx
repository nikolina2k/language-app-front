const Navbar = () => {
  return (
    <div className="flex justify-between items-center border-b border-gray-100 w-full py-2">
      <div className="text-3xl font-extrabold text-gray-900 dark:text-white font-roboto">
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-pink-600 from-blue-400">
          Language App
        </span>
      </div>

      <div className="flex items-center">
        <ul className="flex space-x-4">
          <li>
            <a href="/" className="text-black">
              User Profile
            </a>
          </li>
          <li>
            <a href="/dialog" className="text-black">
              Dialogs
            </a>
          </li>
          <li>
            <a href="/create" className="text-black">
              Create Dialog
            </a>
          </li>
          <li>
            <a href="/word" className="text-black">
              Words
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
