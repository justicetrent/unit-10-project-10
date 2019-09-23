import React from 'react';
//import './App.css';
// import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
// import config from './config'; 
class App extends React.Component {
    state = {
        courses: [],
        isLoading: true,
    }
    componentDidMount() {
        fetch(`http://localhost:5000/api/courses`)
            .then(response => response.json())
            .then(courses => this.setState({
                courses: courses,
                isLoading: false
            }))
            .then(() => console.log(this.state.courses))
            .catch(err => console.log("There was an error loading the page: " + err))
    }
    render() {
        return this.state.isLoading ? (<h2>Loading...</h2>) : (
            <div className="container">
                {
                    this.state.courses.map(course => {
                        return (
                            <div class="grid-33"><a class="course--module course--link" href="course-detail.html">
                                <h4 class="course--label">Course</h4>
                                <h3 class="course--title">Build a Basic Bookcase</h3>
                                </a>
                            </div>
                            
                            // <ul key={course.id}>
                            //         <div>{course.id}</div>
                            //         <div>{course.title}</div>
                            //         <div>{course.description}</div>
                            //         <div>{course.estimatedTime}</div>
                            //     <div>{course.materialsNeeded}</div>
                            // </ul>
                            
                        
                        );
                    })
                }
            </div>
        );
    }
}

export default App;