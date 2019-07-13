import { isBlank } from './utils/stringUtils.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  render() {
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