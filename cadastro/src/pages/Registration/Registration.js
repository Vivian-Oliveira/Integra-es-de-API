import axios from 'axios';
import React, {useState, useEffect} from 'react'
import { useHistory } from 'react-router-dom';
import { goToUserListPage } from '../../Routers/Coordinator';

export default function Registration () {
    const history = useHistory();
    const [userName, setUserName] = useState ("")
    const [userEmail, setUserEmail] = useState ("")


    useEffect(() => {
        createUser()
    }, [])

    const createUser = () => {
        const body = {
            name: "",
            email: ""
        }

        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', body, {
            headers: {
               Authorization: 'vivian-costa-epps'
            }  
        })

        .then((res) => {
            setUserName(res.data.name)
            setUserEmail(res.data.email)
            alert('Usuario criado com sucesso!')
            console.log(setUserName)
        })

        .catch((err) => {
            console.log(err)
            alert('Usuario nao pode ser criado!' + "" + err)
        })
    }

 

    return (
        
        <div>
            <button onClick={() => goToUserListPage(history)}>ir para pagina de lista</button>
          <form>

           <label for = "name">Nome:</label>
            <input 
            onChange={userName}
            type='text'
            name='name'
            required
            pattern={"^.{3,}"}
            title={"O nome deve ter no mínimo 3 caracteres"}
            >
            </input>

            <label for = "email">E-mail:</label>
            <input 
            onChange={userEmail}
            type='email'
            name='name'
            required
            >
            </input>

            <button onClick={() => createUser()}>Enviar</button>
            </form>
        </div>
    )
}