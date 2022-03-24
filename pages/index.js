import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { Header, Footer, SingleArticle } from 'components';
import { setTitle } from 'utils/setTitle';

function Home() {
    const testimonies = ['', '', '', '', '', '', '', '', '', '', '', ''];
    const settings = {
        dots: true,
        infinite: true,
        focusOnSelect: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        useTransform: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <>
            {setTitle('Home')}
            <Header />

            <div className='w-full'>
                <Carousel
                    autoPlay
                    showThumbs={false}
                    showStatus={false}
                    dynamicHeight={true}
                    renderArrowPrev={(onClickHandler, hasPrev, label) =>
                        hasPrev && (
                            <svg
                                width='25'
                                height='45'
                                viewBox='0 0 25 45'
                                fill='none'
                                onClick={onClickHandler}
                                className='absolute left-12 top-1/2  cursor-pointer z-10 xs:hidden'
                                xmlns='http://www.w3.org/2000/svg'>
                                <path
                                    d='M4.93808 22.5002L23.9461 3.49174C24.7448 2.69293 24.7448 1.3979 23.946 0.59909C23.1473 -0.199719 21.8522 -0.199719 21.0533 0.599226L0.599038 21.0541C0.215452 21.4375 0 21.9577 0 22.5002C0 23.0428 0.215588 23.563 0.599175 23.9466L21.0535 44.4004C21.4527 44.7998 21.9762 44.9994 22.4997 44.9994C23.0232 44.9994 23.5467 44.7998 23.9461 44.4002C24.7448 43.6014 24.7448 42.3064 23.946 41.5076L4.93808 22.5002Z'
                                    fill='white'
                                />
                            </svg>
                        )
                    }
                    renderArrowNext={(onClickHandler, hasNext, label) =>
                        hasNext && (
                            <svg
                                width='25'
                                height='45'
                                viewBox='0 0 25 45'
                                fill='none'
                                onClick={onClickHandler}
                                className='absolute right-12 top-1/2 cursor-pointer xs:hidden'
                                xmlns='http://www.w3.org/2000/svg'>
                                <path
                                    d='M19.6078 22.4998L0.599771 41.5083C-0.1989 42.3071 -0.198902 43.6021 0.599907 44.4009C1.39858 45.1997 2.69375 45.1997 3.49255 44.4008L23.9469 23.9459C24.3304 23.5625 24.5459 23.0423 24.5459 22.4998C24.5459 21.9572 24.3303 21.437 23.9467 21.0534L3.49242 0.599648C3.09315 0.200241 2.56966 0.000606537 2.04616 0.000606537C1.52267 0.000606537 0.999176 0.200245 0.599771 0.599785C-0.1989 1.39859 -0.198902 2.69362 0.599907 3.49243L19.6078 22.4998Z'
                                    fill='white'
                                />
                            </svg>
                        )
                    }
                    renderIndicator={(onClickHandler, isSelected, index, label) => {
                        if (isSelected) {
                            return (
                                <svg
                                    width='41'
                                    height='6'
                                    viewBox='0 0 41 6'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                    aria-label={`Selected: ${label} ${index + 1}`}
                                    title={`Selected: ${label} ${index + 1}`}
                                    className='mx-2 my-10 '>
                                    <rect x='0.455078' width='40' height='6' rx='3' fill='#375B87' />
                                </svg>
                            );
                        }
                        return (
                            <svg
                                width='41'
                                height='6'
                                viewBox='0 0 41 6'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                                onClick={onClickHandler}
                                onKeyDown={onClickHandler}
                                value={index}
                                key={index}
                                role='button'
                                tabIndex={0}
                                title={`${label} ${index + 1}`}
                                aria-label={`${label} ${index + 1}`}
                                className='mx-2 my-10'>
                                <rect x='0.455078' width='40' height='6' rx='3' fill='white' />
                            </svg>
                        );
                    }}>
                    <div>
                        <img className='slider control-dots xs:hidden 2xs:hidden    ' src='/images/bg-1.png' />
                        <img className='slider  md:hidden  xs:w-6/12  ' src='/images/bg-1-mobile.png' />
                        <div className='absolute inset-0 flex flex-col justify-center text-left px-56 max-w-5xl'>
                            <div className='text-white font-medium text-4xl xs:hidden'>
                                Probability distribution: An intuition for data scientists
                            </div>
                            <div className='text-white text-xl pt-4 xs:hidden'>
                                As a data scientist if you are asked to find the average income of customers, how’d you
                                do that? Having ALL customer data is of course “good to have”, but in reality, it never
                                exists nor feasible to collect.
                            </div>
                            <button className='mx-2 px-6 mt-4 w-1/2 py-4 rounded-md  xs:hidden  text-white bg-btn'>
                                Get Started
                            </button>
                        </div>
                    </div>
                    <div>
                        <img className='slider  xs:hidden 2xs:hidden  ' src='/images/bg-2.png' />
                        <img className=' lg:hidden  ' src='/images/bg-2-mobile.png' />
                        <div className='absolute inset-0 flex flex-col justify-center text-left px-56 max-w-5xl'>
                            <div className='text-white font-medium text-4xl xs:hidden'>
                                Probability distribution: An intuition for data scientists
                            </div>
                            <div className='text-white text-xl pt-4 xs:hidden'>
                                As a data scientist if you are asked to find the average income of customers, how’d you
                                do that? Having ALL customer data is of course “good to have”, but in reality, it never
                                exists nor feasible to collect.
                            </div>
                            <button className='mx-2 px-6 mt-4 w-1/2 py-4 rounded-md xs:hidden    text-white bg-btn'>
                                Get Started
                            </button>
                        </div>
                    </div>
                    <div>
                        <img className='slider  xs:hidden 2xs:hidden   ' src='/images/bg-3.png' />
                        <img className=' lg:hidden   ' src='/images/bg-3-mobile.png' />
                        <div className='absolute inset-0 flex flex-col justify-center text-left px-56 max-w-5xl'>
                            <div className='text-white font-medium text-4xl xs:hidden'>
                                Probability distribution: An intuition for data scientists
                            </div>
                            <div className='text-white text-xl pt-4 xs:hidden'>
                                As a data scientist if you are asked to find the average income of customers, how’d you
                                do that? Having ALL customer data is of course “good to have”, but in reality, it never
                                exists nor feasible to collect.
                            </div>
                            <button className='mx-2 px-6 mt-4 w-1/2 py-4 rounded-md  xs:hidden   text-white bg-btn'>
                                Get Started
                            </button>
                        </div>
                    </div>
                </Carousel>
            </div>
            <div className='pt-5'>
                <div className='text-black text-center pt-2 text-btn text-xl p-4 '>The future of online education </div>
                <div className='text-center text-btn text-4xl p-4 font-bold'>
                    Deliver your own course, learning programs and <br /> upskilling at scale
                </div>
                <div>
                    <p className='text-center p-4 text-lg'>
                        Deliver and create successful learning programs and courses on your branded
                        <br /> platform that activate learning and accelerate skill development. Engage
                        <br /> learners by combining collaborative education, mentoring and performance <br />{' '}
                        management with engaging instruction content.
                    </p>
                </div>
            </div>
            <div className='flex justify-center items-center p-20 xs:px-12 xs:py-12 bg-ter xs:flex xs:flex-col'>
                <div className='mr-16 w-2/4 xs:w-full xs:mr-0'>
                    <h2 className='text-primary text-2xl '>Create engaging material</h2>
                    <h1 className='text-4xl xs:text-3xl xs:w-full'>Rich-Media course</h1>
                    <p className=' mt-4 text-xl  '>
                        Host effective courses and deliver high-qualitytraining using engaging and meaningfulcontent,
                        including videos, quizzes, audio andrich-content material. Make learning easier and increase
                        your learner’s engagement and training impact with powerful learning material.
                    </p>
                </div>
                <div className='w-2/4 xs:w-full xs:mt-4'>
                    <img src='/images/learning 1.png' width='500' height='500' />
                </div>
            </div>
            <div>
                <div className='text-center text-2xl  text-primary mt-20 xs:mt-10'>Recent Articles</div>
                <div className='flex justify-center items-center mt-20 px-40 py-8 xs:px-10 xs:py-2'>
                    <SingleArticle />
                </div>
                <div className='bg-light flex justify-center items-center p-20 xs:flex xs:flex-col xs:w-full xs:p-8'>
                    <div className='w-2/4 xs:w-full'>
                        <img src='/images/img.png' width='500' height='500' />
                    </div>
                    <div className='pl-4 pr-4 w-2/4 xs:pl-0 xs:pr-0 xs:w-full'>
                        <h1 className='text-4xl font-bold xs:text-2xl'>Are you an Expect</h1>
                        <p className='text-xl max-w-2xl'>
                            Scelerisque blandit magna nam fermentum, platea enim. Ac lacinia non nullam blandit massa.
                            Odio integer nullam tellus aliquet nisi tincidunt. In lacus, feugiat eleifend risus, eu
                            sodales consectetur viverra. A convallis leo id ipsum, ultricies aenean.
                        </p>
                        <button className='rounded-lg uppercase  mt-12 px-14 py-1 border-2 border-solid border-btn  text-primary text-lg'>
                            Contact Us
                        </button>
                    </div>
                </div>
            </div>
            <div className='flex justify-center items-center p-20  bg-pink  xs:flex xs:flex-col xs:p-8 '>
                <div className='mr-16 w-2/4 xs:w-full xs:mr-0'>
                    <h2 className='text-primary text-2xl'>Data-driven development</h2>
                    <h1 className='text-4xl'>Powerful analytics and reporting</h1>
                    <p className=' mt-4 text-xl max-w-2xl'>
                        Host effective courses and deliver high-qualitytraining using engaging and meaningfulcontent,
                        including videos, quizzes, audio andrich-content material. Make learning easier and increase
                        your learner’s engagement and training impact with powerful learning material.
                    </p>
                </div>
                <div className='w-2/4 xs:w-full'>
                    <img src='/images/learning2.png' width='500' height='500' />
                </div>
            </div>
            <div className=' flex justify-center items-center p-20 bg-shade xs:flex xs:flex-col xs:p-10'>
                <div className='w-2/4 xs:w-full'>
                    <img src='/images/learning3.png' width='500' height='500' />
                </div>
                <div className='ml-16 w-2/4 xs:w-full xs:ml-0'>
                    <h2 className='text-primary text-2xl'>Learning never stop</h2>
                    <h1 className='mt-4 text-primary text-4xl'>Accessibility and reliability</h1>
                    <p className=' mt-4 text-xl max-w-2xl'>
                        Host effective courses and deliver high-qualitytraining using engaging and meaningfulcontent,
                        including videos, quizzes, audio andrich-content material. Make learning easier and increase
                        your learner’s engagement and training impact with powerful learning material.
                    </p>
                </div>
            </div>
            <div className='px-8 py-40 '>
                <div>
                    <h1 className=' text-center text-primary text-4xl mb-16  '>Testimonials</h1>
                    <div className='w-full'>
                        <Slider autoplay {...settings}>
                            {testimonies.map((test, index) => (
                                <div
                                    className='flex justify-center xs:flex xs:flex-column  flex-wrap mb-16'
                                    key={index}>
                                    <div
                                        className={`profile__box py-10 opacity-25   hover:change transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 flex flex-col justify-center items-center`}>
                                        <img src='/images/profile3.png' className='' />
                                        <p className='text-2xl mt-4 text-primary'>Ayodele tunde</p>
                                        <p className='text-xl mt-4 text-primary px-8'>
                                            Scelerisque blandit magna nam fermentum, platea enim. Ac lacinia non nullam
                                            blandit massa.
                                        </p>
                                        <p className='text-2xl mt-4 text-primary font-bold'>CEO Herlabytes</p>
                                    </div>
                                </div>
                            ))}
                            <div></div>
                        </Slider>
                    </div>
                </div>
            </div>

            <div className=' flex justify-center items-center p-20 bg-light xs:flex xs:flex-col xs:p-10'>
                <div className='w-2/4 xs:w-full'>
                    <img src='/images/more.png' width='500' height='500' />
                </div>
                <div className='ml-16 w-2/4 xs:w-full xs:ml-0'>
                    <h2 className='text-primary text-2xl'>More Resource</h2>
                    <h1 className='mt-4 text-primary text-4xl'>Accessibility and reliability</h1>
                    <p className=' mt-4 text-xl max-w-2xl'>
                        Host effective courses and deliver high-qualitytraining using engaging and meaningfulcontent,
                        including videos, quizzes, audio andrich-content material. Make learning easier and increase
                        your learner’s engagement and training impact with powerful learning material.
                    </p>
                    <button className='mt-12 px-14 py-1 border-2 border-solid border-btn rounded-lg text-white bg-btn text-lg'>
                        Read More
                    </button>
                </div>
            </div>

            <Footer />
        </>
    );
}

export default Home;
