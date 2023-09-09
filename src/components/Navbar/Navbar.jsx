import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const isLinkActive = (path) => {
    return location.pathname === path ? "text-green-500" : "text-black";
  };

  return (
    <div className="flex justify-between items-center border-b border-gray-100 w-full py-2">
      <div className="text-3xl font-extrabold text-gray-900 dark:text-white font-roboto">
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-red-600 from-green-500">
          ТатарЛинго
        </span>
      </div>

      <div className="flex items-center">
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className={`text-black ${isLinkActive("/")}`}>
              Профиль
            </Link>
          </li>
          <li>
            <Link
              to="/dialogs"
              className={`text-black ${isLinkActive("/dialogs")}`}
            >
              Диалоги
            </Link>
          </li>
          <li>
            <Link
              to="/create"
              className={`text-black ${isLinkActive("/create")}`}
            >
              Создать Диалог
            </Link>
          </li>
          <li>
            <Link to="/word" className={`text-black ${isLinkActive("/word")}`}>
              Слова
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
