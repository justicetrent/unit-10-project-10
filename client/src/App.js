import React from 'react';
// import logo from './logo.svg';
//import './App.css';
import Courses from './components/Courses'
import Header from './components/Header'
import UserSignIn from './components/UserSignIn'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import withContext from './context';
//components added with context
const CourseList = withContext(Courses)
const HeaderContext = withContext(Header)
const UserSignInContext = withContext(UserSignIn);


export default () => (
  <Router>
    <div>
      <Route render={({ location }) => <HeaderContext location={location.pathname} />} />
      <CourseList />
      <switch>
        <Route exact path="/" component={CourseList} />
        <Route path="/signin" component={UserSignInContext} />
      </switch>

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
