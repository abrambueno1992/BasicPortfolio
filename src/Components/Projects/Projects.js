import React, { Component } from 'react';
import Navigation from '../Navigation/Navigation';
import NoteIMG from '../../Screenshot from 2018-09-21 20-16-43.png';
import NoteIMG2 from '../../Screenshot from 2018-09-21 12-12-29.png';
import './Projects.css'
class Project extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <Navigation current={this.props.match.path} />
                <div style={{textAlign:'center'}}>
                    <h1>Three main Projects</h1>
                    <h2>Front End Project: <a href="https://lambda-notes-backend.netlify.com/" className="ProjectName">Lambda Notes</a></h2>
                    <img style={{height: '50%', width:'50%'}} src={NoteIMG2} />
                    <h2>Back End Project: <a href="https://abrambueno-lamdanotes.netlify.com/" className="ProjectName">Built A database with authentication for Lambda Notes</a></h2>
                    <img style={{height: '50%', width:'50%'}} src={NoteIMG} />
                    <h2>Capstone Project: <a href="https://labs-next-leaderboard.herokuapp.com/" className="ProjectName">Next Steps: full stack application</a></h2>
                    <img style={{height: '50%', width:'50%'}} src="https://labs-next-leaderboard.herokuapp.com/static/media/LeadboardExample.ff00310b.PNG" />
                </div>

            </div>
        )
    }
}

export default Project;