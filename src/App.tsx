import React, {ChangeEvent, useState} from 'react';
import './App.css';

type SettingsComponentType = {}
type CounterComponentType = {}
type StateType = {
    currentValue: number
    maxValue: number
    startValue: number
}
const state: StateType = {
    currentValue: 0,
    maxValue: 5,
    startValue: 0
}
const SettingsComponent: React.FC<SettingsComponentType> = () => {
    let [maxV, setMaxV] = useState(state.maxValue)
    let [startV, setStartV] = useState(state.startValue)
    const maxVFunction = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxV(+e.target.value)
        state.maxValue = maxV
    }
    const startVFunction = (e: ChangeEvent<HTMLInputElement>) => {
        setStartV(+e.target.value)
        state.startValue = startV
    }
    return (
        <div className={'panelBlock'}>
            <div>max v: <input onChange={maxVFunction} value={maxV} className={'input'} type="number"/></div>
            <div>start v: <input onChange={startVFunction} value={startV} className={'input'} type="number"/></div>
            <button className={'button'}>set</button>
        </div>
    )
}
const CounterComponent: React.FC<CounterComponentType> = () => {
    let [num, setNum] = useState(state.startValue)
    const incrementFunction = () => {
        num !== state.maxValue && setNum(num + 1)
        state.currentValue = num
    }
    const resetFunction = () => {
        setNum(state.startValue)
        state.currentValue = state.startValue
    }
    return (
        <div className={'panelBlock'}>
            <div className={num !== state.maxValue ? '' : 'maxValueColor'}>{num}</div>
            <div>
                <button onClick={incrementFunction} className={'button'}>inc</button>
                <button onClick={resetFunction} className={'button'}>reset</button>
            </div>
        </div>
    )
}
const App = () => {
    return (
        <div className={'wrapper'}>
            <div className="App">
                <SettingsComponent/>
                <CounterComponent/>
            </div>
        </div>
    );
}

export default App;
