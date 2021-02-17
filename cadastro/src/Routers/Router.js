import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import  Registration  from "../pages/Registration/Registration";
import  UserList  from "../pages/UserList/UserList";

export default function Router () {
    return(
        <BrowserRouter>
        <Switch>
            <Route exact path='/'>
                <Registration />
            </Route>
            <Route exact path='/usuarioscadastrados' >
                <UserList />
            </Route>
        </Switch>
    </BrowserRouter>
    )
    
}

