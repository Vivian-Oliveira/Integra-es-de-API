import React from 'react'
import { useHistory } from 'react-router-dom';
import { goToRegistrationPage } from '../../Routers/Coordinator';

export default function UserList () {
    const history = useHistory();

    return (
        <div>
            <p>pagina de listar usuarios</p>
            <button onClick={() => goToRegistrationPage(history)}>ir para pagina de cadastro</button>
        </div>
    )
}