import Router from 'next/router';

const ArticleCard = ({ title, excerpt, video, id, url }) => {
    return (
        <div className='article__container xs:w-full xs:mr-0 2xs:w-full 2xs:mr-0 sm:mr-0 md:mr-0 sm:w-two-card md:w-two-card lg:w-two-card lg:mr-0'>
            {!video ? (
                <div className='mb-2 flex-1'>
                    <h2 className='text-primary-blue text-xl font-semibold mb-2'>{title}</h2>
                    <p className='text-sm leading-5'>{excerpt}</p>
                </div>
            ) : (
                <div className='mb-2 flex-1'>
                    <div className='w-full h-36 relative'>
                        <img src={video} alt='Video Player' className='w-full h-full object-cover absolute' />
                        <p className='absolute left-1 bottom-1 text-sm text-white'>{title}</p>
                    </div>
                    <p className='text-sm leading-5 mt-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            )}
            <button
                className='w-full h-10 rounded-md bg-primary-blue text-white text-sm flex justify-center items-center font-medium focus:outline-none'
                onClick={() => Router.push(url + `/${id}?type=${video ? 'video' : 'text'}`)}>
                Read Article
            </button>
        </div>
    );
};

export default ArticleCard;
