import React from 'react';

const BetterProfileCard = () => {
    return (
        <div className="font-sans flex flex-col justify-evenly w-[18vw] h-[50vh] p-5 pt-1 border border-black shadow-2xl rounded-md bg-white">
            
            {/* Profile Image */}
            <div className="flex items-center justify-center rounded-full overflow-hidden w-24 h-24 mx-auto border-4 border-blue-500">
                <img className="w-full h-full object-cover rounded-full" src="https://randomuser.me/api/portraits/men/75.jpg" alt="userImage" />
            </div>

            {/* Name & Role */}
            <div className="border-b pb-2 text-center">
                <div className="text-2xl font-semibold">Robin Sharma</div>
                <div className="text-gray-600">Web Developer</div>
            </div>

            {/* Experience Section */}
            <div className="border-b pb-2">
                <div className="flex justify-between">
                    <p>Google SDE 1</p> <span className="text-gray-600">20yrs</span>
                </div>
                <div className="flex justify-between">
                    <p>Microsoft SDE 1</p> <span className="text-gray-600">20yrs</span>
                </div>
            </div>

            {/* Bio & Follow Button */}
            <div className="flex justify-between items-center mt-2">
                <p className="text-sm text-gray-700">Lorem ipsum dolor sit amet consectetur.</p>
                <button className="bg-blue-700 px-3 py-1 text-white rounded-2xl hover:bg-blue-800 transition cursor-pointer">
                    Follow
                </button>
            </div>
        </div>
    );
};

export default BetterProfileCard;
