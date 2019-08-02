import React from 'react';

import './FetchProjects.css';

import DisplayAll from '../DisplayAll/DisplayAll.react';

class FetchProjects extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            // response:[],
            // loaded: false,
            url:"https://api.github.com/search/repositories?q=stars%3A%3E0&sort=stars&per_page=30"
            };
    }
componentDidMount(){
    // // let url="https://api.github.com/search/repositories?q=stars%3A%3E0&sort=stars&per_page=30";
    // fetch(this.state.url).then(resp=>resp.json()).then(response=>{this.setState({response:response.items,loaded:true});
    
    //     }
    // );
}
handleAll =()=>{
    this.setState({url:"https://api.github.com/search/repositories?q=stars%3A%3E0&sort=stars&per_page=30"});
    this.forceUpdate();
    console.log("Fetch All");
}
// handleAll =(num)=>{
//     switch(num){
//         case '1':
//                 {this.setState({url="https://api.github.com/search/repositories?q=stars%3A%3E0&sort=stars&per_page=30";}
//             break;
//         case '2':
//                 {this.setState({url="https://api.github.com/search/repositories?q=language:Ruby&sort=stars&per_page=30";}
//             break;
//         case '3':
//                 {this.setState({url="https://api.github.com/search/repositories?q=language:Java&sort=stars&per_page=30";}
//             break;
//         case '4':
//                 {this.setState({url="https://api.github.com/search/repositories?q=language:JavaScript&sort=stars&per_page=30";}
//             break;
//         case '5':
//                 this.setState({url="https://api.github.com/search/repositories?q=language:Python&sort=stars&per_page=30";}
//             break;
//         case '6':
//                 {this.setState({url="https://api.github.com/search/repositories?q=language:cpp&sort=stars&per_page=30";}
//             break;
//         case '7':
//                 {this.setState(url="https://api.github.com/search/repositories?q=language:c&sort=stars&per_page=30";}
//             break;
//         default:
//                 {this.setState(url="https://api.github.com/search/repositories?q=stars%3A%3E0&sort=stars&per_page=30";}
                
                                
//     }
    
    
//     console.log("Fetch All");
// }

  
// handleRuby =()=>{
//     this.setState({url:"https://api.github.com/search/repositories?q=language:Ruby&sort=stars&per_page=30"});
//     console.log("Fetch Ruby");
//     this.forceUpdate();
// }
// handleJava =()=>{
//     this.setState({url:"https://api.github.com/search/repositories?q=language:Java&sort=stars&per_page=30"});
//     console.log("Fetch Ruby");
//     this.forceUpdate();
// }
// handleJavaScript =()=>{
//     this.setState({url:"https://api.github.com/search/repositories?q=language:JavaScript&sort=stars&per_page=30"});
//     console.log("Fetch Ruby");
//     this.forceUpdate();
// }
// handlePython =()=>{
//     this.setState({url:"https://api.github.com/search/repositories?q=language:Python&sort=stars&per_page=30"});
//     console.log("Fetch Ruby");
//     this.forceUpdate();
// }
// handleC =()=>{
//     this.setState({url:"https://api.github.com/search/repositories?q=language:c&sort=stars&per_page=30"});
//     console.log("Fetch Ruby");
//     this.forceUpdate();
// }
// handleCpp =()=>{
//     this.setState({url:"https://api.github.com/search/repositories?q=language:cpp&sort=stars&per_page=30"});
//     console.log("Fetch Ruby");
//     this.forceUpdate();
// }

componentDidUpdate(){
    
    // fetch(this.state.url).then(resp=>resp.json()).then(response=>{this.setState({response:response.items,loaded:true});
    
    //     }
    // );
    // console.log(JSON.stringify(this.state.response[0].id));
}
shouldComponentUpdate(props,state){
    // fetch(this.state.url).then(resp=>resp.json()).then(response=>{state.response=response.items;
    // // this.forceUpdate();
    //     }
    // );
    // this.forceUpdate();
    return false;
}
handle =(sub)=>{
    this.setState({url:"https://api.github.com/search/repositories?q=language:"+sub+"&sort=stars&per_page=30"});
        console.log("Fetch Ruby");
    //    this.forceUpdate();
  }


    render() {
        // console.log(this.state.url);
        return(
            
            <div className="fetchprojects_wrapper">
                <div className="jumbotron text-center">
                    <h1>Popular on Github</h1>
                    <h6>Most Popular repositories on Github</h6>
                </div>
                <div className="navigation">
                
                    
                    <button onClick={this.handleAll} className="btn btn-primary btn-md">All</button>
                    <button onClick={this.handle("Ruby")} className="btn btn-primary btn-md">Ruby</button>
                    <button onClick={this.handle("Java")} className="btn btn-primary btn-md">Java</button>
                    <button onClick={this.handle("JavaScript")} className="btn btn-primary btn-md">JavaScript</button>
                    <button onClick={this.handle("Python")} className="btn btn-primary btn-md">Python</button>
                    <button onClick={this.handle("cpp")} className="btn btn-primary btn-md">C++</button>
                    <button onClick={this.handle("c")} className="btn btn-primary btn-md">C</button>
                
                </div>
                <p><br></br> </p>
                <DisplayAll addr={this.state.url}></DisplayAll>
            </div>
        );

        // if(!this.state.loaded){
        //     return(
        //         <div className="fetchprojects_wrapper">
        //             <h1>Loading....</h1>
        //             <button onClick={this.handleAll}>All</button>
        //             <button onClick={this.handleRuby}>Ruby</button>
        //         </div>
        //     );
        // }
        // else {
        //     return(
        //         <div className="fetchprojects_wrapper">
        //             <h1>Loaded</h1>
        //             <button onClick={this.handleAll}>All</button>
        //             <button onClick={this.handleRuby}>Ruby</button>
        //             <ShowAll projectList={this.state.response}></ShowAll>
        //             {/* <p>
        //                 {JSON.stringify(this.state.response[0].name)}
        //             </p> */}
        //         </div>
        //     );
        // }
    }
}

export default FetchProjects;