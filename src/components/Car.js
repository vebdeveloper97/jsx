import React, {Component} from 'react';

export default props => (
    <div>
        <h1>Car name: {props.name}</h1>
        <p>Car year: {props.year}</p>
        {props.children}
    </div>
)