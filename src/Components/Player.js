import React, { Component , Fragment } from 'react';
import { Link } from 'react-router-dom';
export default class Player extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: "",
            filterDaras:[],
          
        }
    }
    render() {

  
          return (
              <Fragment>
Play music
</Fragment>
      );
    }
}