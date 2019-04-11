import React from 'react';


const url = 'user_api/v1/collection_jobs/';

// this variable is dynamic and will change via request 
let id = 0; 


class Job extends React.Component{
    render(){
        <ul>
            <li>
                {this.props.something}
            </li>
        </ul>
    }
}

export default Job;

