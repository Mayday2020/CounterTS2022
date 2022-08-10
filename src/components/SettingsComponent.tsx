import React, {ChangeEvent, Dispatch, SetStateAction, useState} from "react";
import {StateType} from "../App";
import Button from "./ButtonComponent";

type SettingsComponentType = {
    state: StateType
    dispatch: (state: StateType) => void
    incorrectValue: boolean
    setIncorrectValue: Dispatch<SetStateAction<boolean>>
}

const SettingsComponent: React.FC<SettingsComponentType> = (props) => {

    let [maxV, setMaxV] = useState(props.state.maxValue)
    let [startV, setStartV] = useState(props.state.startValue)

    const maxVFunction = (e: ChangeEvent<HTMLInputElement>) => {
        if (+e.currentTarget.value >= 1 && +e.currentTarget.value >= startV){
            e.currentTarget.style.backgroundColor = '#FFFFFF'
            setMaxV(+e.currentTarget.value)
            props.setIncorrectValue(false)
        } else {
            e.currentTarget.style.backgroundColor = 'red'
            setMaxV(+e.currentTarget.value)
            props.setIncorrectValue(true)
        }
    }

    const startVFunction = (e: ChangeEvent<HTMLInputElement>) => {
        if (+e.currentTarget.value >= 0 && +e.currentTarget.value <= maxV) {
            e.currentTarget.style.backgroundColor = '#FFFFFF'
            setStartV(+e.currentTarget.value)
            props.setIncorrectValue(false)
        } else {
            e.currentTarget.style.backgroundColor = 'red'
            setStartV(+e.currentTarget.value)
            props.setIncorrectValue(true)
        }

    }

    const setOptions = () => {
        let newState = {currentValue: startV, maxValue: maxV, startValue: startV}
        props.dispatch(newState)
    }

    return (
        <div className={'panelBlock'}>
            <div>max v: <input onChange={maxVFunction} className={'input'} type="number" value={maxV}/></div>
            <div>start v: <input onChange={startVFunction} className={'input'} type="number" value={startV}/></div>
            <Button buttonText={'set'} disabled={props.incorrectValue} onclick={setOptions}/>
        </div>
    )
}

export default SettingsComponent