import { Header, Footer } from 'components';
import { setTitle } from 'utils/setTitle';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { object, string } from 'yup';

const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    message: '',
};

const validationSchema = object().shape({
    firstName: string().required('First name is required'),
    lastName: string().required('Last name is required'),
    email: string().email().required('Email is required'),
    message: string().required('Message is required'),
});

function ContactPage(props) {
    const handleSubmit = (values, { setSubmitting, resetForm }) => {
        setTimeout(() => {
            setSubmitting(false);
            console.log(values);
            resetForm();
        }, 2000);
    };

    return (
        <div>
            <Header />
            {setTitle('Contact Page')}
            <div className='pt-10 mb-10'>
                <div className='flex justify-between'>
                    <div className='w-two-card flex flex-col xs:hidden 2xs:hidden'>
                        <img className='w-full flex-1 xs:hidden' src='/images/call.png' />
                        <div className='flex justify-around p-6 '>
                            <div>
                                <div className='flex'>
                                    <img src='/icons/map-pin.svg' />
                                    <p>Address</p>
                                </div>
                                <p>48,adekunle aro street,ajuwon-akute ogun state.</p>
                            </div>
                            <div>
                                <div className='flex'>
                                    <img src='/icons/call1.svg' />
                                    <p>Phone Number</p>
                                </div>
                                <p>08123459856 ,09012385686</p>
                            </div>
                        </div>
                    </div>

                    <div className='w-two-card pr-10 xs:w-full 2xs:w-full  '>
                        <h1 className='text-4xl text-primary font-bold'>Contact</h1>
                        <div className='mt-4 '>
                            <p className='text-xl'>Have an inquiry or some feedback for us?</p>
                            <p className='text-xl'>Fill out the form below to contact our team.</p>
                        </div>
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={handleSubmit}>
                            {({ isSubmitting }) => (
                                <Form className='mt-10 '>
                                    <div className='flex justify-between mt-4 xs:flex xs:flex-col w-full '>
                                        <div className='w-two-card xs:mr-0'>
                                            <label className='text-sm'>First Name</label>
                                            <Field
                                                className='text-sm bg-gray-100 w-full h-12 px-2 py-1  rounded-md focus:outline-none'
                                                name='firstName'
                                                type='text'
                                                placeholder='Enter your first name '
                                            />
                                            <ErrorMessage name='firstName' component='p' className='error' />
                                        </div>
                                        <div className='w-two-card'>
                                            <label className='text-sm'>Last Name</label>
                                            <Field
                                                className='text-sm bg-gray-100 w-full h-12 px-2 py-1 rounded-md focus:outline-none'
                                                name='lastName'
                                                type='text'
                                                placeholder='Enter your last  name '
                                            />
                                            <ErrorMessage name='lastName' component='p' className='error' />
                                        </div>
                                    </div>

                                    <div className='mt-10'>
                                        <label className='text-sm'>Email:</label>
                                        <Field
                                            className='text-sm bg-gray-100 w-full h-12 px-2 py-1 rounded-md xs:w-full 2xs:w-full focus:outline-none'
                                            name='email'
                                            type='email'
                                            placeholder='Email'
                                        />
                                        <ErrorMessage name='email' component='p' className='error' />
                                    </div>
                                    <div className='mt-10'>
                                        <label className='text-sm'>Messages</label>

                                        <Field
                                            id=''
                                            className='text-sm bg-gray-100 w-full focus:ring-2  px-4 py-2 rounded-md h-48 xs:w-full 2xs:w-full focus:outline-none'
                                            name='message'
                                            placeholder='Messages here'
                                            as='textarea'
                                        />
                                        <ErrorMessage name='message' component='p' className='error' />
                                    </div>
                                    <button
                                        type='submit'
                                        className={`${
                                            isSubmitting ? 'bg-gray-300' : 'bg-primary'
                                        } w-28 py-2 text-white rounded-md mt-3 xs:w-full xs:mb-10 2xs:w-full 2xs:mb-10 focus:outline-none`}
                                        disabled={isSubmitting}>
                                        {isSubmitting ? 'Submitting...' : 'Submit'}
                                    </button>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default ContactPage;
