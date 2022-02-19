import React, {useState} from 'react'
import './App.css'
import { UserContext } from './userContext'
import Header from './Header'

const App = () => {
    const [message, setMessage] = useState("Lukorito");
    
    return (
        <UserContext.Provider value={{message, setMessage}}>
            <div>
                <Header />
                <p>We are the jasons!!</p>
            </div>
        </UserContext.Provider>
    )
}

export default App;