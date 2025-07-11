import React from 'react'

const PageTitle = ({title}) => {
  return (
    <>
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              {title}
        </h2>
    </>
  );
};

export default PageTitle;