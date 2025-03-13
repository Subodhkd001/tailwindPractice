import React from 'react'

const ProfileCard = () => {
    return (
        <div className='flex justify-center items-center w-screen h-screen'>
            <div className='font-sans flex flex-col justify-evenly w-[18vw] h-[50vh] p-5 pt-1 border border-black shadow-2xl rounded-md'>

                <div className='flex items-center justify-center rounded-full overflow-hidden'><img className='rounded-full' src="https://randomuser.me/api/portraits/men/75.jpg" alt="userImage" /></div>

                <div className='border-b-1 pb-2'>
                    <div className='text-2xl'>Robin Sharma</div>
                    <div>Web developer</div>
                </div>
                <div className='border-b-1 pb-2'>
                    <div className='flex justify-between'><p>Google SDE 1</p> <span>20yrs</span></div>
                    <div className='flex justify-between'><p>Microsoft SDE 1</p> <span>20yrs</span></div>
                </div>
                <div className='flex items-center'>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                    <div className='bg-blue-700 px-2.5 py-1 text-white rounded-2xl hover:bg-blue-800 transition cursor-pointer'>Follow</div>
                </div>
            </div>
        </div>
    )
}

export default ProfileCard