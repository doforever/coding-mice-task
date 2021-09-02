import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import MainLayout from './components/layout/MainLayout/MainLayout';
import Home from './components/views/Home/Home';
import PostAdd from './components/views/PostAdd/PostAdd';
import Post from './components/views/Post/Post';
import PostEdit from './components/views/PostEdit/PostEdit';

const App = () => {
  return (
    <Router>
      <MainLayout>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/post/add' component={PostAdd} />
          <Route exact path='/post/:id' component={Post} />
          <Route exact path='/post/:id/edit' component={PostEdit} />
        </Switch>
      </MainLayout>
    </Router>
  );
}

export default App;
