import React, {useState} from 'react';
import './App.css';
import CounterComponent from "./components/CounterComponent";
import SettingsComponent from "./components/SettingsComponent";

export type StateType = {
    currentValue: number
    maxValue: number
    startValue: number
}

const App = () => {
    const state: StateType = {
        currentValue: 0,
        maxValue: 5,
        startValue: 0
    }
    let [currentState, setCurrentState] = useState<StateType>(state)
    let [disabledSetButton, setDisabledSetButton] = useState(true)

    return (
        <div className={'wrapper'}>
            <div className="App">
                <SettingsComponent state={currentState}
                                   dispatch={setCurrentState}
                                   disabledButton={setDisabledSetButton}
                                    disabledSetButton={disabledSetButton}/>
                <CounterComponent state={currentState} dispatch={setCurrentState} disabledButton={disabledSetButton}/>
            </div>
        </div>
    );
}

export default App;
