import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Filmora",
    "Photoshop"
];

const labelsSecond = [
    "Unity",
    "Unreal",
    "Nintendo Switch Gamelab",
	"Spore"
];

const labelsThird = [
    "Kirby Air Ride",
    "Pitfall",
    "Mario 64"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Video</h3>
                    <p>I have created lots of videos, for my own channel, or local businesses</p>
                    <div className="flex-chips">
                        <span className="chip-title">Software:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>Level Design</h3>
                    <p>I used various tools to create new levels for existing games.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tools:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>Game Testing</h3>
                    <p>expert at finding bugs and <b>speedrunning</b></p>
                    <div className="flex-chips">
                        <span className="chip-title">Games:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;