import React from 'react';

// get rid of characters after '=' if using 'key' constant
const url = 'user_api/v1/fields?api_token=RGGynVWPBg-Frz-7E48tAA';

const key = 'RGGynVWPBg-Frz-7E48tAA';


class Field extends React.Component{
    render(){
        <ul>
            <li>
                {this.props.something}
            </li>
        </ul>
    }
}

export default Field;

