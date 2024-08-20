import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { setToken, selectCurrentUser, fetchCurrentUser } from '../../authSlice';
import { AppDispatch } from '../../store';
import '../../components/Header/Header.scss';
import './Login.scss';

const Login: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();
    const user = useSelector(selectCurrentUser);

    useEffect(() => {
        if (user) {
        navigate('/');
        }
    }, [user, navigate]);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
        const response = await fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
            username,
            password,
            expiresInMins: 30,
            }),
        });
        const data = await response.json();
        if (data.token) {
            dispatch(setToken({ token: data.token, refreshToken: data.refreshToken }));
            dispatch(fetchCurrentUser());
        } else {
            setError('Invalid credentials');
        }
        } catch (err) {
        setError('Failed to login');
        }
    };

    return (
        <>
            <Helmet>
                <title>Sign in | Goods4you</title>
                <meta name="description" content="Any products from famous brands with worldwide delivery" />
            </Helmet>
            
            <header className="header">
                <div className="header__container">
                <div className="header__logo">Goods4you</div>
                </div>
            </header>
            <main>
                <section className="authorization">
                <h1 className="authorization__title">Sign in</h1>
                <form className="authorization__form" onSubmit={handleLogin}>
                    <input
                    type="text"
                    className="authorization__input"
                    placeholder="Login"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    />
                    <input
                    type="password"
                    className="authorization__input"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    />
                    <button type="submit" className="authorization__button">Sign in</button>
                </form>
                {error && <div className="authorization__error">{error}</div>}
                </section>
            </main>
        </>
    );
};

export default Login;
