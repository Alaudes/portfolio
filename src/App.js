import './styles/App.scss';
import Navigation from './components/Navigation';
import Intro from './components/Intro';


function App() {
    return (
        <div className="App">
			<Navigation/>
            <div className="content">
                <Intro/>
            </div>
        </div>
    );
}

export default App;
