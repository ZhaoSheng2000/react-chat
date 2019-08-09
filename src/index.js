import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter,Route,Switch} from 'react-router-dom'
import {Provider} from 'react-redux'

import store from './redux/store'
import Login from './containers/login/login'
import Register from './containers/register/register'
import Main from './containers/main/main'
import Chat from './containers/chat/chat'
import List from './containers/list/list'
import Personal from './containers/personal/personal'
import NotFound from "./components/not-found/not-found";


ReactDOM.render((
    <Provider store={store}>
        <HashRouter>
            <Switch>

                <Route exact path='/login' component={Login}/>
                <Route path='/register' component={Register}/>
                <Route path='/chat' component={Chat}/>
                <Route path='personal' component={Personal}/>
                <Route path='/list' component={List}/>
                <Route    component={Main}/>
                <Route  component={NotFound}/>
            </Switch>
        </HashRouter>
    </Provider>
), document.getElementById('root'));

