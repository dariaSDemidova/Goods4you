import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Error.scss';

const Error: React.FC = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/');
    };

    return (
        <main className='error'>
            <h1 className='error__title'>404</h1>
            <h2 className='error__subtitle'>Page not found</h2>
            <button className='error__button' onClick={handleClick}>
                Back to home
            </button>
        </main>
    );
};

export default Error;

