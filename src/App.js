import React, { Component } from 'react';
import './App.css';
import Car from './components/Car';

class App extends Component{
  render(){
    const divStyle = {
        'text-align': 'center',
        'color': 'blue'
    }

    return (
        <div className={'App'}>
          <h3 style={{backgroundColor: 'orange'}}>Hello React JS</h3>
          <p style={divStyle}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A eum quo quod velit! Assumenda consequuntur cumque dolores ea fuga impedit iusto necessitatibus quisquam sapiente, voluptates. Amet deserunt tenetur totam vitae!</p>

            <Car name={'Audi'} year={2015}/>
            <Car name={'BMW'} year={2018}/>
            <Car name={'NEXIA'} year={2016}>
                <p>UZB avtomobil <strong>7500$</strong></p>
            </Car>
        </div>
    );
  }
}

export default App;
