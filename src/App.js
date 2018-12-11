import React, { Component } from 'react';
import autoBind from 'react-autobind';
import PenduSchema from './PenduSchema/PenduSchema';


class App extends Component {
    
    constructor(props){
        super(props);
        autoBind(this);
    }

    state = {
        currentWord : '',
        foundLetters: [],
        currentTry: 0
    }

    render() {
        return (
                <PenduSchema />
                );
    }
}

export default App;
