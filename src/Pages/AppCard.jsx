import React from 'react';
import { Link } from 'react-router-dom';

const AppCard = ({ app }) =>
    {
        const {id,thumbnail,name,rating} =app
        return (
            <Link to={`/AppDetails/${id}`} className="bg-white shadow rounded-lg overflow-hidden hover:shadow-lg transition cursor-pointer">
          <img src={thumbnail} alt={name} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="font-semibold text-lg">{name}</h3>
            <p className="text-sm text-gray-600">⭐ {rating} | ⬇️ {app.downloads.toLocaleString()}</p>
          </div>
        </Link>
        );
    }

export default AppCard;