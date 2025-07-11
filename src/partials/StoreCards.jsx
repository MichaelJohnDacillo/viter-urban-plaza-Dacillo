import React from 'react'

const StoreCards = ({image, alt, icon: Icon, name, offer, type }) => {
  return (
    <>
        <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300">
                        <img
                            src={image}
                            className="w-full h-48 object-cover" 
                            alt={alt}
                        />
                        <div className="p-6">
                          <div className="flex items-center mb-2">
                            <Icon className="text-blue-600 mr-2" />
                            <h3 className="text-xl font-semibold">{name}</h3>
                          </div>
                          <p className="text-gray-600 mb-4">
                            {offer}
                          </p>
                          <p className="text-sm text-gray-500">{type}</p>
                        </div>
                      </div>
    </>
  );
};

export default StoreCards;