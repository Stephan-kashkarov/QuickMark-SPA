import React from 'react';
import LoginForm from './components/Auth/Login'
import './App.css';

class User {
    id: number
    username: string
    loggedIn: boolean

    constructor (public num:number, public uname:string) {
        this.id = num
        this.username = uname
        this.loggedIn = false
    }
}

const App: React.FC = () => {
    return (
        <div className="App">
        <header className="App-header">
            Welcome!
        </header>
        <LoginForm></LoginForm>
        </div>
    );
}

export default App;
