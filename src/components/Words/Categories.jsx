// CategoryList.js
import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you are using React Router for navigation

const categories = [
    {
        id: 1,
        title: 'Татарские национальные блюда',
        description: 'Слова для изучения татарских национальных блюд',
    },
    {
        id: 2,
        title: 'Фрукты',
        description: 'Слова для изучений названий фруктов',
    },
    {
        id: 3,
        title: 'Домашние животные',
        description: 'Слова для изучения домашних животных',
    },
    {
        id: 4,
        title: 'Овощи',
        description: 'Слова для изучения овощей',
    },
    {
        id: 5,
        title: 'Овощи',
        description: 'Слова для изучения овощей',
    },
    {
        id: 6,
        title: 'Овощи',
        description: 'Слова для изучения овощей',
    }
    // Add more categories as needed
];

const CategoryList = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {categories.map((category) => (
                <Link to={`/category/${category.id}`} key={category.id}>
                    <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg h-full">
                        <div className="h-24    "> {/* Fixed height for title */}
                            <h2 className="text-xl font-semibold line-clamp-3">{category.title}</h2>
                        </div>
                        <div className="h-16 mt-2"> {/* Fixed height for description */}
                            <p className="line-clamp-2">{category.description}</p>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
};
export default CategoryList;
