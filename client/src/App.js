import React from 'react';
//import logo from './logo.svg';
import './styles/global.css';
import Courses from './components/Courses'
import Header from './components/Header'
import UserSignUp from './components/UserSignUp'
import UserSignIn from './components/UserSignIn'
import UserSignOut from './components/UserSignOut'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import withContext from './context';
//components added with context
const CourseList = withContext(Courses)
const HeaderWithContext = withContext(Header)
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
        <Route path="/signin" component={UserSignInWithContext} />
        <Route path="/signup" component={UserSignUpWithContext} />
        <Route path="/signout" component={UserSignOutWithContext} />
      </Switch>

    </div>
  </Router>
)   
    
    
    
    
    
    
    
    
    
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     {/* </div>
//   ); */}
// }

//export default App;
