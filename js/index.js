//import { setup } from '../js/redux-setup.js';
import store from "../js/store.js";
import {Menu} from '../js/component/menu.js';
import {LandingPage} from '../js/page/landing.js';
import EmployeeDetailsPageConnected from '../js/page/employee-details.js';
import EmployeesPageConnected from '../js/page/employees-list.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  render() {
    return (
      <ReactRouterDOM.BrowserRouter>
      <div class="container">
        <Menu />
        <div className="content">
          <ReactRouterDOM.Route exact path="/" component={LandingPage}/>
          <ReactRouterDOM.Route exact path="/employees" component={EmployeesPageConnected}/>
          <ReactRouterDOM.Route path="/employees/:id" component={EmployeeDetailsPageConnected}/>
        </div>
      </div>
      </ReactRouterDOM.BrowserRouter>
    );
  }
}
  
ReactDOM.render(
  <ReactRedux.Provider store={store}>
	  <App />
  </ReactRedux.Provider>,
	document.getElementById('root')
);