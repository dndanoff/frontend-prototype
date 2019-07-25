export class EmployeesPage extends React.Component {
	  constructor(props) {
	    super(props);
	    this.handleSearch = this.handleSearch.bind(this);

	    this.state = {
			employees: [],
			originalEmployees: [],
			error: ""
		};
	  }

	  componentDidMount() {

	  }

	  componentWillUnmount() {
	    
	  }
	  
	  handleSearch(input){
		input = input.toUpperCase();
		let filteredEmployees = [];
		
		if(isEmpty(input)){
			filteredEmployees = this.state.originalEmployees;
		}else{
			for (let i = 0; i < this.state.originalEmployees.length; i++) {
				let employee = this.state.originalEmployees[i];
				let fullName = (employee.firstName+" "+employee.lastName).toUpperCase();
				if(fullName.startsWith(input)){
					filteredEmployees.push(employee);
				}
			}
		}
		
		this.setState((prevState, props) => ({
    		employees: filteredEmployees
		}));
	  }
	  	
	  render() {
		  if(!isEmpty(this.state.error)){
			  return (
				<div id="error" class="alert alert-warning" role="alert">
	  				{this.state.error}
	    		</div>
    		);
		  }

		let cols = [];
		for (var i = 0; i < this.state.employees.length; i++) {
			cols.push(<EmployeeCard key={this.state.employees[i].id} info={this.state.employees[i]}/>);
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