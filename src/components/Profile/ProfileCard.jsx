import { Link } from "react-router-dom";

const ProfileCard = ({ link, title }) => {
  return (
    <Link to={`${link}`}>
      <li className="mb-4 border p-4 flex items-center justify-between hover:shadow-lg cursor-pointer rounded-xl transition duration-300 ease-in-out transform hover:scale-105 bg-white">
        <div className="cursor-pointer">
          <h3 className="text-xl text-black">{title}</h3>
        </div>
      </li>
    </Link>
  );
};

export default ProfileCard;
