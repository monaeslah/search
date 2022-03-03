import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import { connect } from "react-redux";
// import { getQaz,savedOrganAction } from "../../../redux/action";

 class ReportFiltering extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: "",
            filterDaras:[],
          
        }
    }

// componentDidMount(){
  
//     this.props
//     .getQaz(this.props.match.params.id)
//     .then(r=>{
//       // console.log("id",this.props.match.params.id)
      
//       this.setState({   
       
//         filterDaras: r.result.data
//       })

//   }).catch(e=>console.log(e))

// }
//     saveAndGo = (r) => {
     
//         this.props.history.push({
//             pathname: "/send-report/"+r.id+"?name="+r?.name,
//           state: {...r}
//         })
 

//     }
   
    
    render() {   
        return (
            <React.Fragment>
                <div className="container" >
                    <div className="row justify-content-md-center mt-5" style={{ direction: "rtl" }} id="search">
                        <div className="col-md-12 " >
                            {/* <FontAwesomeIcon  className="search-icon" icon={faSearch} />search icon */}
                            <input value={this.state.filter} onChange={  e => { this.setState({ filter: e.target.value }); }} type="text" className="col-md-10 search-input col-sm-10 col-xs-10"   />
                        </div>
                        <div id="scroll" className=" my-3 mt-5" style={{margin:"auto"}}>
                 
                        <div className="scroll">
                      {this.state.filterDaras.filter(item => {
                        return  item.name.search(this.state.filter)!==-1
                        }).map((r,index) => (
                          <div key={index}>
                          <Link
                          style={{ textDecoration: 'none',color:"rgba(29, 39, 37, 1)" }}
                          
                          // to={{ pathname: `/send-report/33` }}
                          onClick={() => this.saveAndGo(r)}
                        >
                            <div className="subnet row py-2">
                            <div  className="my-auto col-md-8 col-sm-8"> {r.name}</div>
                            <div  className=" col-md-2 col-sm-2"> <img className="circle-img" src= {r.avatar?r.avatar:require("../../../Assets/img/unknown_person.jpg")} alt=""/></div>
                            {/*this.state.filter*/}
                       
                       
                       
                              
                            </div>
                            </Link>
                          </div>
                        ))
                      }
                      </div>
                      </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => ({
    ...state
  });
  
  const mapDispatchToProps = dispatch => ({
    getQaz: (id) => dispatch(getQaz(id)),
  savedOrganAction:(r)=>dispatch(savedOrganAction(r))

  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(ReportFiltering);