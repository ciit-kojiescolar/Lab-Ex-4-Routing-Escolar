import React, { useState } from 'react';
import HomePage from './HomePage';
const users = [
    { username: 'user1', password: 'pass1' },
    { username: 'Koji', password: 'midterm' }
];
function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [currentUser, setCurrentUser] = useState(null);
    const [view, setView] = useState('login');
    const handleSubmit = (event) => {
        event.preventDefault();
        const user = users.find((user) => user.username === username && user.password
            === password);
        if (user) {
            setCurrentUser(user);
            setView('home');
        } else {
            alert('Invalid username or password');
        }
    };
    const handleLogout = () => {
        setCurrentUser(null);
        setView('login');
    };
    return (
        <div>
            {view === 'login' ? (
                <form onSubmit={handleSubmit}>
                    <label>Username:</label>
                    <input type="text" value={username} onChange={(event) =>
                        setUsername(event.target.value)} />
                    <br />
                    <label>Password:</label>
                    <input type="password" value={password} onChange={(event) =>
                        setPassword(event.target.value)} />
                    <br />
                    <button type="submit">Login</button>
                </form>
            ) : (
                <div>
                    <HomePage />
                </div>
            )}
        </div>
    );
}
export default Login;
