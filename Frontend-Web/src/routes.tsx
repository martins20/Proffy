import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'

// import { Container } from './styles';

import Landing from './pages/Landing';
import TeacherList from './pages/TeacherList';
import TeacherForm from './pages/TeacherForm';

const Routes = () => {
  return ( 
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Landing}/>
        <Route  path="/study" component={TeacherList}/>
        <Route  path="/give-classes" component={TeacherForm}/>
      </Switch>
    </BrowserRouter>

  );
}

export default Routes;