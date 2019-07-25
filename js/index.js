//import { setup } from '../js/redux-setup.js';
import store from "../js/store.js";
import {Menu} from '../js/component/menu.js';
import {LandingPage} from '../js/page/landing.js';
import {EmployeesPage} from '../js/page/employees-list.js';
import {EmployeeDetailsPage} from '../js/page/employees-list.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  render() {
    console.log(store.getState());

    return (
      <ReactRouterDOM.BrowserRouter>
      <div class="container">
        <Menu />
        <div className="content">
          <ReactRouterDOM.Route exact path="/" component={LandingPage}/>
          <ReactRouterDOM.Route exact path="/employees" render={(props) => <EmployeesPage {...props} limit={100}/>}/>
          <ReactRouterDOM.Route path="/employees/:id" component={EmployeeDetailsPage}/>
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