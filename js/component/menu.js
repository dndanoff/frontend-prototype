export class Menu extends React.Component {
	  constructor(props) {
	    super(props);
	    this.state = {};
	  }

	  render() {
	    return (
	    	<nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
				<ReactRouterDOM.NavLink className="navbar-brand" to="/">Dreamix</ReactRouterDOM.NavLink>
				<button class="navbar-toggler" type="button" data-toggle="collapse"
					data-target="#menu" aria-controls="menu" aria-expanded="false"
					aria-label="Toggle menu">
					<span class="navbar-toggler-icon"></span>
				</button>
				
				<div class="collapse navbar-collapse" id="menu">
					<ul class="navbar-nav mr-auto">
						<li class="nav-item"><ReactRouterDOM.NavLink className="nav-link" to="/employees">Team</ReactRouterDOM.NavLink></li>
					</ul>
				</div>
			</nav>
	    );
	  }
}