import React,{Component} from "react";
import '../css/Projects.css';

const Projects=() =>{
    return(
        <div className="project">
            <div className="headline">Here are some of the projects that I have worked on:</div>
            <ul className="list">
                
                <li className="list-item">
                    <div>Minesweeper game in java</div>
                    <a href="https://youtu.be/qsp8cfmMam0">youtube link!</a>
                </li>
                <li className="list-item">
                    <div>Favourite links websit in React app</div>
                    <a href="https://github.com/usamaikram143/favLinks">github repository link!</a>
                </li>
                <li className="list-item">
                <div>Data Analysis for the 2018-2019 Daily Attendance dataset</div>
                    <a href="https://sites.google.com/view/usamaikram-mat327-project/home">google site link!</a>
                </li>
            </ul>
        </div>
    );
}
export default Projects;