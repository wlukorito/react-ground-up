import React, {useContext} from 'react'
import { UserContext } from './userContext'

const Header = () => {
    const {message, setMessage} = useContext(UserContext)
    return (
        <div>
            <h1>React app from ground up</h1>
            <p>State value: {message}</p>
            <button onClick={() => setMessage('Le padre')}>Update message</button>
        </div>
    )
}

export default Header;