import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const SingleDialog = ({ id, title, description, voteCount }) => {
  return (
    <Link to={`/chat/${id}`}>
      <li className="mb-4 border p-7 flex items-center justify-between hover:shadow-lg cursor-pointer rounded-xl transition duration-300 ease-in-out transform hover:scale-105">
        <div className="cursor-pointer grid grid-cols-1">
          <div className="flex flex-col items-start">
            <h1 className="text-lg font-semibold">{title}</h1>
            <p className="text-gray-600">{description}</p>
          </div>
        </div>
        <div className="flex items-center">
          <FontAwesomeIcon icon={faArrowUp} className="text-green-500 mr-2" />

          <span className="text-green-500">{voteCount}</span>
        </div>
      </li>
    </Link>
  );
};

export default SingleDialog;
