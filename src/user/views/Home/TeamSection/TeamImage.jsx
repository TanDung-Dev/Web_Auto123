import React from 'react';

const TeamImage = ({ imageSrc }) => {
    return (
        <div className="w-full md:w-1/2">
            <div className="rounded-lg overflow-hidden shadow-lg">
                <img
                    src={imageSrc}
                    alt="Auto123 Technical Team"
                    className="w-full h-auto"
                />
            </div>
        </div>
    );
};

export default TeamImage;
