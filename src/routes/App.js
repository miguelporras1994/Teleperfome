/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../containers/Home';
import EditUser from '../containers/EditUser';
import NotFound from '../containers/NotFound';
// import Layout from '../components/Layout';

const App = () => (

  <BrowserRouter>
    {/* <Layout> */}
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/edituser/:id' component={EditUser} />
      <Route component={NotFound} />
    </Switch>
    {/* </Layout> */}
  </BrowserRouter>

);

export default App;
