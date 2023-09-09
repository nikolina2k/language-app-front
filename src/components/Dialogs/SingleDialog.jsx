import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const SingleDialog = ({
    id,
    title,
    description,
    voteCount
}) => {
  return (

    <Link to={`/chat/${id}`}>
        <li className="mb-4 border p-4 flex items-center justify-between hover:bg-grey-400 py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
            <div className="hover:shadow-lg cursor-pointer">
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </div>
        <div className="flex items-center">
            {/* Display the FontAwesome "faArrowUp" icon */}
            <FontAwesomeIcon icon={faArrowUp} className="text-blue-500 mr-2" />

            {/* Display the vote count */}
            <span className="text-blue-500">{voteCount}</span>
        </div>
        </li>
    </Link>
      
  );
};

export default SingleDialog;
