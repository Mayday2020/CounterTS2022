import React, {useEffect, useState} from 'react';
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
        maxValue: 4,
        startValue: 0
    }








    console.log('rendered - app')
    let [currentState, setCurrentState] = useState<StateType>(state)
    let [incorrectValue, setIncorrectValue] = useState<boolean>(false)

    useEffect(()=> {
        let newState = localStorage.getItem('state')
        if (newState){
            let lSState = JSON.parse(newState)
            setCurrentState(lSState)
        } else {

        }
    }, [])

    useEffect(() => {
        localStorage.setItem('state', JSON.stringify(currentState))
    }, [currentState])
    return (
        <div className={'wrapper'}>
            <div className="App">
                <SettingsComponent state={currentState}
                                   dispatch={setCurrentState}
                                   incorrectValue={incorrectValue}
                                   setIncorrectValue={setIncorrectValue}/>
                <CounterComponent state={currentState}
                                  dispatch={setCurrentState}
                                  incorrectValue={incorrectValue}/>
            </div>
        </div>
    );
}

export default App;
