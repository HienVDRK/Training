import React, {Component} from 'react';
import BaiProps1 from './BaiProps1';

class Bai_Props extends Component {
  clickme(){
    alert('Click Me! Event Handle')
  }
  luusanpham=()=>{
    alert(this.refs.name_sp.value);
  }
  render(){
    var products= [
        {
          id: 1,
          name: "Iphone 11",
          gia: "5000000",
          status: true,
          img:"https://cdn.fptshop.com.vn/Uploads/Originals/2019/2/21/636863636051023338_ss-galaxy-s10-plus-den-1.png"
        },
        {
          id: 2,
          name: "Samsung s10",
          gia: "6000000",
          status: true,
          img:"https://cdn.fptshop.com.vn/Uploads/Originals/2019/2/21/636863636051023338_ss-galaxy-s10-plus-den-1.png"
        },
        {
          id: 3,
          name: "Samsung s11",
          gia: "7000000",
          status: true,
          img:"https://cdn.fptshop.com.vn/Uploads/Originals/2019/2/21/636863636051023338_ss-galaxy-s10-plus-den-1.png"
        },
        {
          id: 4,
          name: "Samsung s12",
          gia: "8000000",
          status: true,
          img:"https://cdn.fptshop.com.vn/Uploads/Originals/2019/2/21/636863636051023338_ss-galaxy-s10-plus-den-1.png"
        },
         {
          id: 5,
          name: "Samsung s13",
          gia: "9000000",
          status: false,
          img:"https://cdn.fptshop.com.vn/Uploads/Originals/2019/2/21/636863636051023338_ss-galaxy-s10-plus-den-1.png"
        },
         {
          id: 6,
          name: "Samsung s14",
          gia: "10000000",
          status: true,
          img:"https://cdn.fptshop.com.vn/Uploads/Originals/2019/2/21/636863636051023338_ss-galaxy-s10-plus-den-1.png"
        }
      ];
      let products_element = products.map((product, index)=>{
        let result = '';
        if(product.status){
          result = <BaiProps1
                  key={index}
                  name={product.name}
                  gia={product.gia}
                  img={product.img}
                /> 
              }
         return result;     

      })
    return (
        <div>
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">Bai Props - Event handle - Refs</a>
          </div>
        </nav>
         <div className="container">
         <div className="row">
           <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
               <div className="form-group">
                 <label>Ten san pham</label>
                 <input type="text" className="form-control" ref="name_sp"/>
               </div>
               <button type="submit" className="btn btn-primary" onClick= { this.luusanpham }>Luu san pham</button>
           </div>
         </div>
         <br/>
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              {products_element}
            </div>
             <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <button type="button" className="btn btn-success" onClick= { this.clickme}>click me!</button>
            </div>
          </div>
        </div>
        </div>
  );
  }
}

export default Bai_Props;
