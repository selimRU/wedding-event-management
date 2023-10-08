import React from 'react';

const WorksCard = ({ work }) => {
    const { image } = work;
    return (
        <div className='rounded-md p-5 shadow-md'>
            <img className=' rounded-md transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 ' src={image} alt="" />
        </div>
    );
};

export default WorksCard;