import React from 'react';

function ProfileCard(props) {
    const card = [
        {
            name: 'Ayodele Tunde',
            img: '/images/profile.png',
            role: 'Founder',
        },
        {
            name: 'Ayodele Tunde',
            role: 'Founder',
            img: '/images/profile2.png',
        },
        {
            name: 'Ayodele Tunde',
            img: '/images/profile.png',
            role: 'Founder',
        },
        {
            name: 'Ayodele Tunde',
            role: 'Founder',
            img: '/images/profile2.png',
        },
        {
            name: 'Ayodele Tunde',
            role: 'Founder',
            img: '/images/profile2.png',
        },
    ];

    return (
        <div className='flex flex-wrap'>
            {card.map((profile, index) => (
                <div className='profile__card xs:w-full my-10  ' key={index}>
                    <div className='w-full'>
                        <img className='overflow-hidden rounded-sm' src={profile.img} />
                    </div>
                    <div className='p-4'>
                        <p className='text-center text-2xl'>{profile.name}</p>
                        <p className='text-center text-lg'>{profile.role}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ProfileCard;
