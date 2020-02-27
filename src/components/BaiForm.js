import React, {Component} from 'react'

class BaiForm extends Component{
	constructor(props){
		super(props);
		this.state = {
			txtName: "22",
			txtPass: "33",
			txtMota: "44",
			sltGioitinh: 0,
			rdTrinhdo: "dh",
			ckbCongViec: true
		}
		// this.onChangeHandle = this.onChangeHandle.bind(this);
		// this.onSumbitHandle = this.onSumbitHandle.bind(this);
	}
	onChangeHandle = (event) => {
		var target = event.target;
		var name= target.name;
		var value= target.type === 'checkbox' ? target.checked : target.value;
		this.setState({
			[name] : value
		});
		
	}
	onSumbitHandle = (event) => {
		event.preventDefault();
		console.log(this.state);
	}
	render(){
		return (
			<div className="container mt-30">
				<div className="row">
					<div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
						<div className="panel panel-primary">
							<div className="panel-heading">
								<h3 className="panel-title">Bai hoc Form</h3>
							</div>
							<div className="panel-body">
								<form onSubmit = {this.onSumbitHandle}>
									<div className="form-group">
										<label>Username</label>
										<input type="text"
											className="form-control"
										 	name="txtName"
										 	onChange={this.onChangeHandle}
										 	value={this.state.txtName}
										 />
									</div>

									<div className="form-group">
										<label>Password</label>
										<input type="password"
											className="form-control"
										 	name="txtPass"
										 	onChange={this.onChangeHandle}
										 	value={this.state.txtPass}
										 />
									</div>

									<div className="form-group">
										<label>Mo ta</label>
										<textarea id="input" 
										name="txtMota" 
										className="form-control" 
										rows="3" 
										onChange={this.onChangeHandle}
										value={this.state.txtMota}
										></textarea>
									</div>

									<label>Gioi tinh</label>
									<select 
									name="sltGioitinh" 
									className="form-control" 
									value={this.state.sltGioitinh}
									onChange={this.onChangeHandle}>
										<option value={0}>Nu</option>
										<option value={1}>Nam</option>
									</select>

									<lable>Trinh do</lable>
									<div className="radio">
										<label>
											<input
											 type="radio"
											 name="rdTrinhdo"
											 value="dh"
											 onChange={this.onChangeHandle}
											 checked={this.state.rdTrinhdo === "dh"}
											 />
											Dai hoc
										</label>
										<label>
											<input 
											type="radio" 
											name="rdTrinhdo" 
											value="cd"
											onChange={this.onChangeHandle}
											checked={this.state.rdTrinhdo === "cd"}
											/>
											Cao dang
										</label>
									</div>

									<lable>Trinh do</lable>
									<div className="checkbox">
										<label>
											<input
											name="ckbCongViec" 
											type="checkbox" 
											value={true}
											onChange={this.onChangeHandle}
											checked={this.state.ckbCongViec === true}
											/>
											Dang that nghiep
										</label>
									</div>

									<button type="submit" className="btn btn-primary">Luu lai</button>&nbsp;
									<button type="reset" className="btn btn-default">Xoa</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default BaiForm;

