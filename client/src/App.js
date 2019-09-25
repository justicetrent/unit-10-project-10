import React from 'react';
//import logo from './logo.svg';
import './styles/global.css';
import Courses from './components/Courses'
import Header from './components/Header'
import CourseDetail from './components/CourseDetail'
import CreateCourse from './components/CreateCourse'
import UserSignUp from './components/UserSignUp'
import UserSignIn from './components/UserSignIn'
import UserSignOut from './components/UserSignOut'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import withContext from './context'
import PrivateRoute from './PrivateRoute'
//components added with context
const CourseList = withContext(Courses)
const HeaderWithContext = withContext(Header)
const CourseDetailWithContext = withContext(CourseDetail)
const CreateCourseWithContext = withContext(CreateCourse)
const UserSignUpWithContext = withContext(UserSignUp)
const UserSignInWithContext = withContext(UserSignIn)
const UserSignOutWithContext = withContext(UserSignOut)


export default () => (
  <Router>
    <div>
      {/* <Route render={({ location }) => <HeaderContext location={location.pathname} />} /> */}
      <HeaderWithContext />
      
      <Switch>
        <Route exact path="/" component={CourseList} />
        <PrivateRoute path="/courses/create" component={CreateCourseWithContext} />
        <PrivateRoute path="/courses/:id" component={CourseDetailWithContext} />
        <Route path="/signin" component={UserSignInWithContext} />
        <Route path="/signup" component={UserSignUpWithContext} />
        <Route path="/signout" component={UserSignOutWithContext} />
      </Switch>

    </div>
  </Router>
)   
    
    
    
    
    
    
    
    
    