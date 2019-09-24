import React from 'react';
//import './App.css';
// import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
// import config from './config'; 
class App extends React.Component {
    state = {
        courses: [],
        isLoading: true,
    }
    async componentDidMount() {
        console.log("Mounted")
        fetch(`http://localhost:5000/api/courses`)
            .then(response => response.json()
            )
            .then(courses => this.setState({
                courses: courses,
                isLoading: false
            }))
            .catch(err => console.log("There was an error loading the page: " + err))
    }
    render() {
        console.log("Rendering")
        console.log(this.state)
        if (this.state.isLoading) {
            return (<h2>Loading...</h2>)
        } else {
            return (
                <div className="container">
                    {this.state.courses.map(course => 
                        <div class="grid-33" key={course.id}>
                            <a class="course--module course--link" href="course-detail.html">
                                <h4 class="course--label" >{course.title}</h4>
                                <h3 class="course--title" >{course.description}</h3>
                            </a>
                        </div>


                    )
                    }
                </div>
            );
        }
    }
}

export default App;