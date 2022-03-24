import React, { useState } from 'react';
import { Header, Footer } from 'components';
import { setTitle } from 'utils/setTitle';

function voting(props) {
    const [check, setCheck] = useState('false');
    return (
        <div>
            <Header />
            {setTitle('Voting')}
            <div className='mx-8 xs:my-16'>
                <div className='text-primary text-2xl font-bold xs:text-4xl  '>
                    Perform Graphql Mutation And Query On The Same Screen/Page
                </div>
                <div className='mt-16'>
                    <p>
                        GraqhQL has been an amazing technology provided by Facebook. It simplifies the client
                        consumption of information provided by the server in an incredible way. GraphQL gives clients
                        the power to ask for exactly what they need and nothing more, makes it easier to evolve APIs
                        over time, and enables powerful developer tools. We at Herlabytes has adopted the cutting-edge
                        technology and implementing it into all of our mobile application, web application, personal
                        website and also our server deployment. This has really enable us to deliver our services on
                        time and also satisfy our customers’ demand. Recently, we were working on an enterprise mobile
                        application for a client and there is need to perform a query (fetch data from the server) on
                        screen (mobile application screen) and also to perform another mutation (modify information on
                        the server) operation on the same screen. For example, fetch all users form the server and
                        update their registration/administration status. I was confused on how to accomplish the feature
                        with what I’ve known about GraphQL and the information on their documentation. I’ve not seen
                        anywhere in the documentation where they combine mutation and query operation together. The only
                        example I can find is about multiple query operation which is not the operation I want to
                        implement. I checked everywhere on the internet for resource but can’t find much information
                        about it. Finally, I take up the challenge to combine the Apollo GraphQL Higher Order Component
                        (HOC) and the new Query Component provided by the Apollo GraphQL Version 2.1 release to
                        implement that feature. To my ultimate surprise. It works! :D Here are the steps I followed to
                        make it work perfectly as I wanted. Implement The Query Operation With The New Query Component
                        From Apollo Use the Query Component from Apollo GraphQL to create a query operation and display
                        the information on the page. This is similar to using the Higher Order Component. Just that the
                        Query Component make it easier to reason about. The code below shows how to go about it.
                    </p>
                </div>
                <div className='text-primary text-2xl font-bold my-8 '>Criteria</div>
                <form>
                    <p className='my-4'>Relevance of Summary</p>
                    <div className='w-full h-20  bg-shallow pt-4'>
                        <div className='w-3/6 xs:w-full xs:flex-wrap flex justify-around items-center rounded-4xl'>
                            <div>
                                <p for='1'>1</p>
                                <input type='radio' id='1' name='vote' value='1' checked />
                            </div>
                            <div>
                                <p for='2'>2</p>
                                <input type='radio' id='2' name='vote' value='2' />
                            </div>
                            <div>
                                <p for='3'>3</p>
                                <input type='radio' id='3' name='vote' value='3' />
                            </div>
                            <div>
                                <p for='4'>4</p>
                                <input type='radio' id='4' name='vote' value='4' />
                            </div>
                            <div>
                                <p for='5'>5</p>
                                <input type='radio' id='5' name='vote' value='5' />
                            </div>
                        </div>
                    </div>
                    <p className='my-4'>Summarize Summary</p>
                    <div className='w-full h-20  bg-shallow pt-4'>
                        <div className='w-3/6 flex xs:w-full xs:flex-wrap justify-around items-center rounded-4xl'>
                            <div>
                                <p for='1'>1</p>
                                <input type='radio' id='1' name='vote' value='1' />
                            </div>
                            <div>
                                <p for='2'>2</p>
                                <input type='radio' id='2' name='vote' value='2' />
                            </div>
                            <div>
                                <p for='3'>3</p>
                                <input type='radio' id='3' name='vote' value='3' />
                            </div>
                            <div>
                                <p for='4'>4</p>
                                <input type='radio' id='4' name='vote' value='4' />
                            </div>
                            <div>
                                <p for='5'>5</p>
                                <input type='radio' id='5' name='vote' value='5' />
                            </div>
                        </div>
                    </div>
                    <p className='my-4'>Relevance of Summary</p>
                    <div className='w-full h-20  bg-shallow pt-4'>
                        <div className='w-3/6 flex   xs:w-full xs:flex-wrap justify-around items-center rounded-4xl'>
                            <div>
                                <p for='1'>1</p>
                                <input type='radio' id='1' name='vote' value='1' />
                            </div>
                            <div>
                                <p for='2'>2</p>
                                <input type='radio' id='2' name='vote' value='2' />
                            </div>
                            <div>
                                <p for='3'>3</p>
                                <input type='radio' id='3' name='vote' value='3' />
                            </div>
                            <div>
                                <p for='4'>4</p>
                                <input type='radio' id='4' name='vote' value='4' />
                            </div>
                            <div>
                                <p for='5'>5</p>
                                <input type='radio' id='5' name='vote' value='5' />
                            </div>
                        </div>
                    </div>
                    <p className='my-4'>Summarize Summary</p>
                    <div className='w-full h-20  bg-shallow pt-4'>
                        <div className='w-3/6 xs:w-full xs:flex-wrap flex justify-around items-center rounded-4xl'>
                            <div>
                                <p for='1'>1</p>
                                <input type='radio' id='1' name='vote' value='1' />
                            </div>
                            <div>
                                <p for='2'>2</p>
                                <input type='radio' id='2' name='vote' value='2' />
                            </div>
                            <div>
                                <p for='3'>3</p>
                                <input type='radio' id='3' name='vote' value='3' />
                            </div>
                            <div>
                                <p for='4'>4</p>
                                <input type='radio' id='4' name='vote' value='4' />
                            </div>
                            <div>
                                <p for='5'>5</p>
                                <input type='radio' id='5' name='vote' value='5' />
                            </div>
                        </div>
                    </div>
                    <button className='bg-primary text-white mt-10 py-2 px-20 mb-14 rounded-md '>Submit</button>
                </form>
            </div>

            <Footer />
        </div>
    );
}

export default voting;
