import React, { useState, useEffect, useRef, Fragment } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { object, string, mixed, array } from 'yup';
import DatePicker from 'react-datepicker';
import Select from 'react-select';
// import { Editor } from 'react-draft-wysiwyg';

import AdminLayout from 'layouts/AdminLayout';
import { setTitle } from 'utils/setTitle';
import { ArticleCard } from 'components';
import { CriteriaModal, SectorModal } from 'modals';

const list = ['', '', '', '', '', '', ''];

// const { isLoading, isError, error, data: experts, refetch } = useQuery('experts', () => {
//     axios
//         .get('/expers')
//         .then(({ data }) => {
//             return data.data;
//         })
//         .catch((error) => throw error);
// });

const options = [
    { label: 'Emmanuel', value: 'emmanuel' },
    { label: 'Oluwafemi', value: 'oluwafemi' },
    { label: 'Ridwan', value: 'ridwan' },
];

let Editor = () => <Fragment></Fragment>;

function CreateArticle() {
    const publishRef = useRef();
    const [text, setText] = useState(true);
    const [deadline, setDeadline] = useState(new Date());
    const [deadlineError, setDeadlineError] = useState('');
    const [experts, setExperts] = useState(null);
    const [expertsError, setExpertsError] = useState('');
    const [description, setDescription] = useState('');
    const [descriptionError, setDescriptionError] = useState('');
    const [editorState, setEditorState] = useState(false);
    const [criterias, setCriterias] = useState([]);
    const [showCriteria, setShowCriteria] = useState(false);
    const [sectors, setSectors] = useState([]);
    const [showSector, setShowSector] = useState(false);
    const [publishing, setPublishing] = useState(false);

    useEffect(() => {
        Editor = require('react-draft-wysiwyg').Editor;
        setEditorState(true);
    }, []);

    const initialValues = () => {
        if (text) {
            return {
                title: '',
                excerpt: '',
                criteria: [],
                difficultyLevel: [],
                instruction: '',
                program: '',
            };
        }

        return {
            title: '',
            link: '',
            excerpt: '',
            criteria: [],
            difficultyLevel: [],
            instruction: '',
            program: '',
        };
    };

    const validationSchema = () => {
        if (text) {
            return object().shape({
                title: string().label('Post title').required(),
                excerpt: string().label('Excerpt').required(),
                criteria: array(string()).label('Criteria').required().min(1),
                difficultyLevel: array(string()).label('Difficulty Level').required().min(1),
                instruction: string().label('Instruction').required(),
                program: string().label('Program').required(),
            });
        }

        return object().shape({
            title: string().label('Post title').required(),
            link: string().label('Link').required(),
            excerpt: string().label('Excerpt').required(),
            criteria: array(string()).label('Criteria').required().min(1),
            difficultyLevel: array(string()).label('Difficulty Level').required().min(1),
            instruction: string().label('Instruction').required(),
            program: string().label('Program').required(),
        });
    };

    const validate = () => {
        let message = true;

        if (!description) {
            setDescriptionError('Description is required');
            message = false;
        } else if (!deadline) {
            setDeadlineError('Deadline is required');
            message = false;
        } else if (!experts) {
            setExpertsError('Expert is required');
            message = false;
        }

        return message;
    };

    const handleExperts = (selectedExperts) => {
        setExperts(selectedExperts);
    };

    const handleSubmit = (values, { setSubmitting, resetForm }) => {
        setDeadlineError('');
        setExpertsError('');
        setDescriptionError('');
        setSubmitting(false);

        if (!validate()) return;

        setSubmitting(true);
        setPublishing(true);

        setTimeout(() => {
            setSubmitting(false);
            setPublishing(false);
            console.log({ ...values, experts, deadline, description });
            resetForm();
            setDeadline(new Date());
            setExperts(null);
            setDescription('');
        }, 2000);
    };

    return (
        <Fragment>
            {setTitle('Create Articles')}
            <AdminLayout>
                <div className='w-5/6 h-full flex flex-col xs:w-full 2xs:w-full sm:w-full md:w-full lg:w-3/4'>
                    <div className='flex items-center ml-auto pr-10 pt-4 xs:pl-4 2xs:pl-4 sm:pl-4 xs:pr-16 2xs:pr-16 sm:pr-16 md:pr-16'>
                        <img src='/img/user.png' alt='User Logo' className='w-10 h-10 rounded-full mr-2' />
                        <div>
                            <p className='text-base font-semibold'>Ayodele Tunde</p>
                            <p className='text-xs'>ayodele@gmail.com</p>
                        </div>
                    </div>
                    <div className='w-full h-16 px-10 flex items-center justify-between xs:px-2 2xs:px-3 sm:px-4 md:px-5 lg:px-5'>
                        <h2 className='text-xl text-primary-blue font-semibold'>Create Article</h2>
                        <button
                            className={`${
                                publishing ? 'bg-highlight text-dark-gray' : 'text-white bg-primary-blue'
                            } px-10 mr-2 py-2 rounded-md focus:outline-none xs:px-4 2xs:px-4 sm:px-5 md:px-6 lg:px-6 xs:mr-16 2xs:mr-16 sm:mr-16 md:mr-16`}
                            onClick={() => publishRef.current.click()}
                            disabled={publishing}>
                            {publishing ? 'PUBLISHING...' : 'PUBLISH'}
                        </button>
                    </div>

                    <Formik
                        initialValues={initialValues()}
                        validationSchema={validationSchema()}
                        onSubmit={handleSubmit}>
                        {({ errors, isSubmitting }) => (
                            <Form className='flex-1 h-full px-10 py-2 overflow-y-auto xs:px-2 2xs:px-3 sm:px-4 md:px-5 lg:px-5'>
                                <div className='w-full bg-white px-4 py-2 rounded-sm mb-5 xs:px-2 2xs:px-2'>
                                    <h2 className='text-primary-blue text-xl my-4 w-full border-solid border-dashboard-main border-b-2'>
                                        Post Title
                                    </h2>
                                    <Field
                                        type='text'
                                        name='title'
                                        className='w-full h-12 rounded-md border-solid border-highlight border-2 mt-4 px-4 mb-10 focus:outline-none bg-transparent xs:px-2 2xs:px-2'
                                    />
                                    <ErrorMessage name='title' component='p' className='text-error-red text-sm' />
                                </div>
                                <div className='w-full bg-white flex flex-col rounded-sm mb-5'>
                                    <div className='w-1/2 h-12 flex cursor-pointer text-lg xs:w-full 2xs:w-full'>
                                        <p
                                            className={`w-1/2 h-full ${
                                                text ? 'text-white bg-primary-blue' : 'text-primary-blue bg-highlight'
                                            }  flex justify-center items-center`}
                                            onClick={() => setText(true)}>
                                            Textual
                                        </p>
                                        <p
                                            className={`w-1/2 h-full ${
                                                !text ? 'text-white bg-primary-blue' : 'text-primary-blue bg-highlight'
                                            }  flex justify-center items-center`}
                                            onClick={() => setText(false)}>
                                            Video
                                        </p>
                                    </div>
                                    <div
                                        className={`flex-1 px-8 ${
                                            text ? 'pt-2 pb-8' : 'py-8'
                                        } xs:px-2 2xs:px-2 sm:px-4 md:px-6 lg:px-6`}>
                                        {!text && (
                                            <Fragment>
                                                <Field
                                                    type='text'
                                                    name='link'
                                                    placeholder='Enter your youtube link here...'
                                                    className='w-full h-10 border-solid border-highlight border-2 rounded-sm outline-none p-4'
                                                />
                                                <ErrorMessage
                                                    name='link'
                                                    component='p'
                                                    className='text-error-red text-sm'
                                                />
                                            </Fragment>
                                        )}
                                        {!!editorState && (
                                            <Editor
                                                editorState={description}
                                                wrapperClassName='wrapper__class'
                                                editorClassName='editor__class'
                                                onEditorStateChange={(editor) => setDescription(editor)}
                                            />
                                        )}
                                        {!!descriptionError && (
                                            <p className='text-error-red text-sm'>{descriptionError}</p>
                                        )}
                                    </div>
                                    <div className='flex-1 px-8 pb-8 xs:px-2 2xs:px-2 sm:px-4 md:px-6 lg:px-6'>
                                        <Field
                                            as='textarea'
                                            name='excerpt'
                                            placeholder='Enter your excerpt here'
                                            className='w-full h-40 border-solid border-highlight border-2 rounded-sm outline-none p-4'
                                        />
                                        <ErrorMessage name='excerpt' component='p' className='text-error-red text-sm' />
                                    </div>
                                </div>
                                <div className='w-full bg-white px-4 pt-2 pb-6 rounded-sm mb-5'>
                                    <div className='flex justify-between items-center border-solid border-highlight border-b-2'>
                                        <h2 className='text-xl text-primary-blue my-4'>Criteria</h2>
                                        <button
                                            className='bg-primary-blue text-white text-sm px-4 py-2 rounded-md focus:outline-none'
                                            type='button'
                                            onClick={() => setShowCriteria(true)}>
                                            Add Criteria
                                        </button>
                                    </div>

                                    <div className='w-full mt-4'>
                                        <div className='w-full flex flex-wrap xs:flex-col 2xs:flex-col'>
                                            {criterias.map((criteria, index) => (
                                                <p
                                                    className='flex items-center mb-3 three-card criteria-card xs:w-full 2xs:w-full'
                                                    key={index}>
                                                    <Field
                                                        name='criteria'
                                                        type='checkbox'
                                                        value={criteria.criteria}
                                                        className='w-4 h-4 mr-2'
                                                    />
                                                    <span className='text-primary-blue capitalize'>
                                                        {criteria.criteria}
                                                    </span>
                                                </p>
                                            ))}
                                        </div>

                                        <ErrorMessage
                                            name='criteria'
                                            component='p'
                                            className='text-error-red w-full text-sm'
                                        />
                                    </div>
                                </div>
                                <div className='w-full bg-white px-4 pt-2 pb-6 rounded-sm mb-5'>
                                    <div className='flex justify-between items-center border-solid border-highlight border-b-2'>
                                        <h2 className='text-xl text-primary-blue my-4'>Difficulty Level</h2>
                                    </div>

                                    <div className='w-full mt-4'>
                                        <div className='w-full flex flex-wrap xs:flex-col 2xs:flex-col'>
                                            <p className='flex items-center mb-3 three-card criteria-card xs:w-full 2xs:w-full'>
                                                <Field
                                                    name='difficultyLevel'
                                                    type='checkbox'
                                                    value='high'
                                                    className='w-4 h-4 mr-2'
                                                />
                                                <span className='text-primary-blue capitalize'>High</span>
                                            </p>
                                            <p className='flex items-center mb-3 three-card criteria-card xs:w-full 2xs:w-full'>
                                                <Field
                                                    name='difficultyLevel'
                                                    type='checkbox'
                                                    value='medium'
                                                    className='w-4 h-4 mr-2'
                                                />
                                                <span className='text-primary-blue capitalize'>Medium</span>
                                            </p>
                                            <p className='flex items-center mb-3 three-card criteria-card xs:w-full 2xs:w-full'>
                                                <Field
                                                    name='difficultyLevel'
                                                    type='checkbox'
                                                    value='low'
                                                    className='w-4 h-4 mr-2'
                                                />
                                                <span className='text-primary-blue capitalize'>Low</span>
                                            </p>
                                        </div>

                                        <ErrorMessage
                                            name='difficultyLevel'
                                            component='p'
                                            className='text-error-red w-full text-sm'
                                        />
                                    </div>
                                </div>
                                <div className='w-full bg-white px-4 py-2 rounded-sm mb-5 xs:px-2 2xs:px-2'>
                                    <h2 className='text-xl text-primary-blue mb-4'>Instruction</h2>
                                    <Field
                                        type='text'
                                        as='textarea'
                                        name='instruction'
                                        placeholder='Type instructions here....'
                                        className='w-full h-72 p-4 mb-4 outline-none rounded-md border-solid border-highlight border-2 xs:h-48 2xs:h-48 sm:px-56'
                                    />
                                    <ErrorMessage name='instruction' component='p' className='text-error-red text-sm' />
                                </div>
                                <div className='w-full bg-white px-4 pt-4 pb-6 rounded-sm mb-5 flex justify-between flex-wrap xs:px-2 2xs:px-2'>
                                    <div className='two-card xs:w-full 2xs:w-full'>
                                        <div className='flex justify-between items-center mb-2'>
                                            <p className='text-xl text-primary-blue'>Program</p>
                                            <button
                                                type='button'
                                                className='bg-primary-blue text-white text-sm px-4 py-2 rounded-md focus:outline-none'
                                                onClick={() => setShowSector(true)}>
                                                Add Sector
                                            </button>
                                        </div>

                                        <Field
                                            type='text'
                                            as='select'
                                            name='program'
                                            className='w-full h-10 px-2 rounded-md outline-none border-solid border-highlight border-2 mt-2'>
                                            <option value=''>-- Select Program --</option>
                                            {sectors.map((sector, index) => (
                                                <option value={sector.sector} className='capitalize' key={index}>
                                                    {sector.sector}
                                                </option>
                                            ))}
                                        </Field>
                                        <ErrorMessage name='program' component='p' className='text-error-red text-sm' />
                                    </div>
                                    <div className='two-card xs:w-full 2xs:w-full xs:mt-4 2xs:mt-4'>
                                        <p className='text-xl text-primary-blue py-2'>Deadline</p>
                                        <DatePicker
                                            selected={deadline}
                                            onChange={(date) => setDeadline(date)}
                                            className='w-full h-10 px-2 rounded-md outline-none border-solid border-highlight border-2 mt-2'
                                        />
                                        {deadlineError && <p className='text-error-red text-sm'>{deadlineError}</p>}
                                    </div>
                                </div>

                                <div className='w-full bg-white px-4 py-2 rounded-sm mb-5 xs:px-2 2xs:px-2'>
                                    <h2 className='text-xl text-primary-blue mb-4'>Experts</h2>
                                    <Select
                                        isMulti
                                        className='w-full rounded-sm border-solid border-gray-50 border-2 py-4 px-4 bg-gray-50 outline-none'
                                        value={experts}
                                        onChange={handleExperts}
                                        options={options}
                                    />
                                    {expertsError && <p className='text-error-red text-sm'>{expertsError}</p>}
                                </div>
                                <button
                                    className={`block ${
                                        isSubmitting ? 'text-dark-gray bg-highlight' : 'text-white bg-primary-blue'
                                    } px-10 ml-auto mb-16 mr-2 py-2 rounded-md focus:outline-none`}
                                    ref={publishRef}
                                    disabled={isSubmitting}>
                                    {isSubmitting ? 'PUBLISHING...' : 'PUBLISH'}
                                </button>
                            </Form>
                        )}
                    </Formik>
                </div>
            </AdminLayout>
            <CriteriaModal
                showModal={showCriteria}
                setShowModal={setShowCriteria}
                criterias={criterias}
                setCriterias={setCriterias}
            />
            <SectorModal
                showModal={showSector}
                setShowModal={setShowSector}
                sectors={sectors}
                setSectors={setSectors}
            />
        </Fragment>
    );
}

export default CreateArticle;
