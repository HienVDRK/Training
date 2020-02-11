import React, {Component} from 'react';

class BaiProps1 extends Component {
  // constructor(props){
  //   super(props);
  //   this.clickMuaHang = this.clickMuaHang.bind(this);
  // }

  clickMuaHang = () => {
    alert(`${this.props.name} - ${this.props.gia} VND`)
  }
  render(){
    return (
        <div>
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <div className="thumbnail">
              <img src={this.props.img} alt={this.props.name} />
              <div className="caption">
                <h3>{this.props.name}</h3>
                <p>
                 {this.props.gia} VND
                </p>
                <p>
                  <a className="btn btn-primary" onClick = {this.clickMuaHang}>Mua hang</a>
                </p>
              </div>
            </div>
          </div>
        </div>
  );
  }
}

export default BaiProps1;
