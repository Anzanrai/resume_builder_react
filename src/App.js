import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/common/Header";
import IndexContainer from "./containers/IndexContainer";

class App extends React.Component{
  render() {
    return(
        <div>
            <Header/>
            <IndexContainer/>
        </div>
    )
  }
}

export default App;
