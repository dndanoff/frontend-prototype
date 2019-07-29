import {Search} from '../component/search.js';
import {EmployeeCard} from '../component/employee-card.js';

class EmployeesPage extends React.Component {
	  constructor(props) {
	    super(props);
	    this.handleSearch = this.handleSearch.bind(this);

	    this.state = {
			currentlyDisplayedEmployees: this.props.employees,
		};
	  }
	  
	  handleSearch(input){
		input = input.toUpperCase();
		let filteredEmployees = [];
		
		if(!input){
			filteredEmployees = this.props.employees;
		}else{
			for (let i = 0; i < this.props.employees.length; i++) {
				let employee = this.props.employees[i];
				let fullName = (employee.firstName+" "+employee.lastName).toUpperCase();
				if(fullName.startsWith(input)){
					filteredEmployees.push(employee);
				}
			}
		}
		
		this.setState((prevState, props) => ({
    		currentlyDisplayedEmployees: filteredEmployees
		}));
	  }
	  	
	  render() {
		let cols = [];
		for (var i = 0; i < this.state.currentlyDisplayedEmployees.length; i++) {
			cols.push(<EmployeeCard key={this.state.currentlyDisplayedEmployees[i].id} selectedEmployee={this.state.currentlyDisplayedEmployees[i]}/>);
		}
		  
	    return (
	    	<div id="employees-page">
	    		<Search onSearch={this.handleSearch}/>
		    	<div id="employees" class="container">
	    			<div class="row">
						<div class="card-columns">
							{cols}
						</div>
					</div>
				</div>
			</div>
	    );
	  }
}

const mapStateToProps = state => {
	return {
		employees: state.employees,
	};
};

const EmployeesPageConnected = ReactRedux.connect(mapStateToProps)(EmployeesPage);

export default EmployeesPageConnected;