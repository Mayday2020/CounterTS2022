import React, {ChangeEvent, useState} from 'react';
import './App.css';

type SettingsComponentType = {
    state: StateType
    dispatch: (state: StateType) => void
}
type CounterComponentType = {
    state: StateType
    dispatch: (state: StateType) => void
}
type StateType = {
    currentValue: number
    maxValue: number
    startValue: number
}

const SettingsComponent: React.FC<SettingsComponentType> = () => {

    //let [maxV, setMaxV] = useState(state.maxValue)
    //let [startV, setStartV] = useState(state.startValue)

    const maxVFunction = (e: ChangeEvent<HTMLInputElement>) => {
    }

    const startVFunction = (e: ChangeEvent<HTMLInputElement>) => {
    }

    const setOptions = () => {
    }

    return (
        <div className={'panelBlock'}>
            <div>max v: <input onChange={maxVFunction} className={'input'} type="number"/></div>
            <div>start v: <input onChange={startVFunction} className={'input'} type="number"/></div>
            <button onClick={setOptions} className={'button'}>set</button>
        </div>
    )
}
const CounterComponent: React.FC<CounterComponentType> = (props) => {

    const incrementFunction = () => {
        let newState = {...props.state, currentValue: props.state.currentValue + 1}
        props.dispatch(newState)
    }

    const resetFunction = () => {
        let newState = {...props.state, currentValue: 0}
        props.dispatch(newState)
    }

    return (
        <div className={'panelBlock'}>
            <div className={''}>{props.state.currentValue}</div>
            <div>
                <button onClick={incrementFunction} className={'button'}>inc</button>
                <button onClick={resetFunction} className={'button'}>reset</button>
            </div>
        </div>
    )
}
const App = () => {
    const state: StateType = {
        currentValue: 0,
        maxValue: 5,
        startValue: 0
    }
    let [currentState, setCurrentState] = useState<StateType>(state)

    return (
        <div className={'wrapper'}>
            <div className="App">
                <SettingsComponent state={currentState} dispatch={setCurrentState}/>
                <CounterComponent state={currentState} dispatch={setCurrentState}/>
            </div>
        </div>
    );
}

export default App;
