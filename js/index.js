import { setup } from '../js/redux-setup.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  render() {
    console.log(window.store.getState());

    return (
		<div class="container">
			IT WORKS FROM REACTJS
		</div>
    );
  }
}
  
ReactDOM.render(
	<App />,
	document.getElementById('root')
);