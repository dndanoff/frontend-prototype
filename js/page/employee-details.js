import {Contact} from '../component/contact.js';

class EmployeeDetailsPage extends React.Component {
	  constructor(props) {
	    super(props);

	    this.state = {
		};
	  }
	  	
	  render() {  
		let contacts = [];
		for (var i = 0; i < this.props.employee.contacts.length; i++) {
			contacts.push(
				<Contact key={this.props.employee.contacts[i].type.id} contact={this.props.employee.contacts[i]}/>
			);
		}

	    return (
	    	<div id="employee-page">
		    	<div id="employee" class="list-group list-group-flush text-left">
			    	<div class="list-group-item flex-column align-items-start">
			    		<img class="img-thumbnail" src={this.props.employee.photoUrl} alt={this.props.employee.firstName+" "+this.props.employee.lastName+" photo"}/>
			    		<h2>{this.props.employee.firstName+" "+this.props.employee.lastName}</h2>
						<div class="row">
							<div class="col">
								Birthday:
							</div>
							<div class="col-10">
								{this.props.employee.birthDate}
							</div>
						</div>
						<h5>{this.props.employee.title.name}</h5>
			    		<p>{this.props.employee.title.description}</p>
			    	</div>
			    	<div class="list-group-item flex-column align-items-start">
			    		{contacts}
			    	</div>
			    </div>
			</div>
	    );
	  }
}

const mapStateToProps = (state, ownProps) => {
	const employeeId = ownProps.match.params.id;
	let selectedEmployee = null;
	for (let i = 0; i < state.employees.length; i++) {
		const employee = state.employees[i];
		if(employee.id == employeeId){
			selectedEmployee = employee;
		}
	}

	return {
		employee: selectedEmployee,
	};
};

const EmployeeDetailsPageConnected = ReactRedux.connect(mapStateToProps)(EmployeeDetailsPage);

export default EmployeeDetailsPageConnected;

