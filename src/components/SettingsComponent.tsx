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
    console.log('rendered - settingsComponent')

    let [maxV, setMaxV] = useState(props.state.maxValue)
    let [startV, setStartV] = useState(props.state.startValue)
    let [buttonState, setButtonState] = useState(true)

    const maxVFunction = (e: ChangeEvent<HTMLInputElement>) => {

        console.log('rendered - maxVFunction')
        setMaxV(+e.currentTarget.value)
        if (maxV > 0 && maxV > startV) {
            props.setIncorrectValue(false)
            setButtonState(false)
        } else {
            props.setIncorrectValue(true)
            setButtonState(true)
        }
    }

    const startVFunction = (e: ChangeEvent<HTMLInputElement>) => {
        console.log('rendered - startVFunction')
        setStartV(+e.currentTarget.value)
        if (startV >= 0 && startV < maxV) {
            props.setIncorrectValue(false)
            setButtonState(false)
        } else {
            props.setIncorrectValue(true)
            setButtonState(true)
        }
    }

    const setOptions = () => {

        console.log('rendered - setOption')
        let newState = {currentValue: startV, maxValue: maxV, startValue: startV}
        props.dispatch(newState)
        setButtonState(true)
        localStorage.setItem('state', JSON.stringify(newState))
    }

    return (
        <div className={'panelBlock'}>
            <div>max v: <input style={maxV <= 0 || maxV <= startV ? {backgroundColor: 'red'} : {backgroundColor: 'white'}}
                               onChange={maxVFunction}
                               className={'input'}
                               type="number"
                               value={maxV}
                />
            </div>
            <div>start v: <input style={startV < 0 || startV >= maxV ? {backgroundColor: 'red'} : {backgroundColor: 'white'}}
                                 onChange={startVFunction}
                                 className={'input'}
                                 type="number"
                                 value={startV}
                />
            </div>
            <Button buttonText={'set'} disabled={props.incorrectValue || buttonState} onclick={setOptions}/>
        </div>
    )
}

export default SettingsComponent