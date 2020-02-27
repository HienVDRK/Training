import React, {Component} from 'react';

  var title ="Bai hoc State";

class BaiState extends Component {
      constructor(props){
          super(props)
          this.state = {show_technologies: false}
          // this.see_our_technologies = this.see_our_technologies.bind(this);
      }
      see_our_technologies =()=>{
          this.setState({show_technologies: !this.state.show_technologies})
      }
      render(){
          console.log(this.state)
          const style = {
              padding: '10px',
              border: '1px solid green',
              display: 'block',
              marginLeft: 'auto',
              marginRight: 'auto',
              width: '100%',
              color: '#4db1e8',
              textAlign: 'center',
              fontFamily: 'sans-serif'
          }
          const tech = {
              background: '#4db1e8',
              color: '#fff',
              padding: '5px',
              marginRight: '5px'
          }
          return (
              <div style={style}>
                  <h1>{title}</h1>
                  {this.state.show_technologies ?
                      <p>
                          <span style={tech}>Python</span>
                          <span style={tech}>Django</span>
                          <span style={tech}>Django REST</span>
                          <span style={tech}>ReactJS</span>
                          <span style={tech}>Angular</span>
                          <span style={tech}> and More</span>
                          <br/><br/>
                          <button className="btn btn-success" onClick={this.see_our_technologies}>Click chuyen State</button>
                      </p>
                      :
                      <button className="btn btn-success" onClick={this.see_our_technologies}>Click chuyen State</button>
                  }
              </div>
          );
      }
}

export default BaiState;