import reactLogo from '../assets/react.svg';
import './App.css';
import { useobservable } from '../observables/useObservable';
import { GameModule } from '../game/GameModule';

const game = new GameModule({
    buildings: [
        {
            name: 'FirstBuilding',
        },
    ],
    currencies: [
        {
            name: 'FirstCurrency',
        },
    ],
});
function App() {
    const building = game.getBuilding('FirstBuilding');
    const value = useobservable(building.count);
    console.log('Value: ', value);

    return (
        <>
            <div>
                <a href="https://react.dev" target="_blank">
                    <img
                        src={reactLogo}
                        className="logo react"
                        alt="React logo"
                    />
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button
                    onClick={() => {
                        console.log('Setting value from ', value);
                        building.count.value += 1;
                        console.log('To ', building.count.value);
                        // setCount((count) => count + 1);
                    }}
                >
                    count is {value}
                </button>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>
    );
}

export default App;
