import React, { Component , Fragment } from 'react';

export default class SearchMusic extends Component {
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
<div >
<div 
style={{ textDecoration: 'none',color:"rgba(29, 39, 37, 1)" }}

// to={{ pathname: `/send-report/33` }}
// onClick={() => this.saveAndGo(r)}
>
  <div className="subnet row py-2">
  <div  className="my-auto col-md-8 col-sm-8"> 
  {/* {r.name} */} name
  </div>
  <div  className=" col-md-2 col-sm-2"> 
 ax {/* <img className="circle-img" src= {r.avatar?r.avatar:require("../../../Assets/img/unknown_person.jpg")} alt=""/> */}
  </div>
  {/*this.state.filter*/}



    
  </div>
  </div>
</div>
</Fragment>
      );
    }
}