import React, {ChangeEvent, Dispatch, SetStateAction, useState} from "react";
import {StateType} from "../App";
import Button from "./ButtonComponent";

type SettingsComponentType = {
    state: StateType
    dispatch: (state: StateType) => void
    disabledButton: (disabled: boolean) => void
    disabledSetButton: boolean
    incorrectValue: Dispatch<SetStateAction<boolean>>
}

const SettingsComponent: React.FC<SettingsComponentType> = (props) => {

    let [maxV, setMaxV] = useState(props.state.maxValue)
    let [startV, setStartV] = useState(props.state.startValue)

    const maxVFunction = (e: ChangeEvent<HTMLInputElement>) => {
        if (+e.currentTarget.value >= 1){
            e.currentTarget.style.backgroundColor = '#FFFFFF'
            props.disabledButton(false)
            setMaxV(+e.currentTarget.value)
            props.incorrectValue(false)
        } else {
            e.currentTarget.style.backgroundColor = 'red'
            props.disabledButton(true)
            setMaxV(+e.currentTarget.value)
            props.incorrectValue(true)
        }
    }

    const startVFunction = (e: ChangeEvent<HTMLInputElement>) => {
        if (+e.currentTarget.value >= 0) {
            e.currentTarget.style.backgroundColor = '#FFFFFF'
            setStartV(+e.currentTarget.value)
            props.disabledButton(false)
            props.incorrectValue(false)
        } else {
            e.currentTarget.style.backgroundColor = 'red'
            setStartV(+e.currentTarget.value)
            props.disabledButton(true)
            props.incorrectValue(true)
        }

    }

    const setOptions = () => {
        let newState = {currentValue: startV, maxValue: maxV, startValue: startV}
        props.dispatch(newState)
        props.disabledButton(true)
    }

    return (
        <div className={'panelBlock'}>
            <div>max v: <input onChange={maxVFunction} className={'input'} type="number" value={maxV}/></div>
            <div>start v: <input onChange={startVFunction} className={'input'} type="number" value={startV}/></div>
            <Button buttonText={'set'} disabled={props.disabledSetButton} onclick={setOptions}/>
        </div>
    )
}

export default SettingsComponent