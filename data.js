import React from 'react';
// import './data';

function Biodata(props) {
    // console.log(props)
    return(
        <div className='card ml-5 mr-5'>
            <p>I am a good {props.fname} {props.lname}</p>
            <p>I am a cool {props.fname} {props.lname}</p>
            <p>I am a cute {props.fname} {props.lname}</p>
        </div>
    )
}

export default  Biodata;