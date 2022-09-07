import React from "react";
import ReactDOM from "react-dom/client";
import SeasonDisplay from "./Components/SeasonDisplay";


// const App = ()=>{
//   window.navigator.geolocation.getCurrentPosition(
//   (position)=>{console.log(position)},
//       (err) => {console.log(err)}
    
//   );
//   return <div>Latitude: {}</div>
// }

class App extends React.Component {
  constructor(props) {
    super(props)

    // This is the only time we do direct assignment to this.state
    // this.state = {lat: null, errorMessage: ""};
    // window.navigator.geolocation.getCurrentPosition(
    //   (position)=>{
    //     // for update the state we called setstate.
    //     console.log(position);
    //     this.setState({lat: position.coords.latitude});

        
    //     // we did not do this
    //     // this.state.lat = position.coords.latitude
    //   },
    //       (err) => {
    //         this.setState({errorMessage: err.message});
    //       }
    // );

  }


  state = { lat: null, errorMessage: ""};
  componentDidMount(){
    console.log("My component was rendered to the screen")
    window.navigator.geolocation.getCurrentPosition(
      (position)=>{
        
        console.log(position);
        this.setState({lat: position.coords.latitude});
      },
          (err) => {
            this.setState({errorMessage: err.message});
          }
    );
  }

  componentDidUpdate(){
    console.log("My component was updated - it rerendered");
  }


  //React says we have to define render
  render() {
    if(this.state.errorMessage && !this.state.lat){

      return <div>Error: {this.state.errorMessage}</div>
    }
    if(!this.state.errorMessage && this.state.lat){
      return <div>Latitude: {this.state.lat}</div>
    }
    else{
      return <div>Loading!!!!!! </div>
    }
    }
}






const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <App/>
    <SeasonDisplay/>
  </>
)



// Use Geo Location API to get the current location of the user.
// https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API