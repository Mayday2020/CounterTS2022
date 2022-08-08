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
    let [disabledSetButton, setDisabledSetButton] = useState<boolean>(true)
    let [incorrectValue, setIncorrectValue] = useState<boolean>(false)

    return (
        <div className={'wrapper'}>
            <div className="App">
                <SettingsComponent state={currentState}
                                   dispatch={setCurrentState}
                                   disabledButton={setDisabledSetButton}
                                   disabledSetButton={disabledSetButton}
                                   incorrectValue={setIncorrectValue}/>
                <CounterComponent state={currentState} dispatch={setCurrentState} disabledButton={disabledSetButton} incorrectValue={incorrectValue}/>
            </div>
        </div>
    );
}

export default App;
