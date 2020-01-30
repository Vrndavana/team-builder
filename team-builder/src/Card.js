// Imports
import React from 'react';

// Form Function
const Squad = props => {
    return (
        <div className='mate-list'>
            {props.alien.map(personalInfo => (
                <div className='personal-info' >
                    <h4>{personalInfo.name}</h4>
                    <p>Email: {personalInfo.email}</p>
                    <p>Role: {personalInfo.role}</p>
                </div>    
            ))}
        </div>
    )
}
export default Squad;


