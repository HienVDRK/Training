import React, {Component} from 'react';
import './App.css';
import Header from './components/Header';
import Product from './components/Product';
import BaiProps from './components/BaiProps';
import BaiState from './components/BaiState';

class App extends Component {
  render() {
    return (
      <div>
       <Header/>
       <div className="row">
         <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
           <Product/>
         </div>
         <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <BaiProps/>
         </div>
       </div>
       <div className="row">
         <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
           <BaiState/>
         </div>
         
       </div>
      </div>
    );
  }
}

export default App;
