import React, {Component} from 'react';

class Product extends Component {
    showProduct(product){
        if(product.status){
            return <div>
                        <h3> { product.name } </h3>
                        <p>
                            { product.gia } VND
                        </p>
                        <p>
                          { product.status ? 'Con hang' : 'Het hang'} <br/>
                             <a href="#" className="btn btn-primary">Mua hang</a>
                        </p>
                    </div>
        }
    }
    render() {
        var product = {
            name : "Samsung s10 plus",
            gia : "19000000",
            status: true
        };
        var users = [
        {
            id :1, 
            name : 'hien',
            tuoi: 24
        },
        {
            id :2, 
            name : 'hien1',
            tuoi: 25
        },
         {
            id :3, 
            name : 'hien2',
            tuoi: 26
        }
        ];
        var showUsers = users.map((user, index)=> {
            return <div key={index}>
                <hr/>
                <h2>STT: {index + 1}</h2>
                <h2>Ten : {user.name}</h2>
                <h4>Tuoi : {user.tuoi}</h4>
                <hr/>
            </div>
        })
    return (
    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <div className="thumbnail">
            <img src="https://cdn.fptshop.com.vn/Uploads/Originals/2019/2/21/636863636051023338_ss-galaxy-s10-plus-den-1.png" alt="" />
            <div className="caption">
                {this.showProduct(product)}
                <br/>
                { showUsers }
            </div>
        </div>
    </div>
  );
  }
}

export default Product;
