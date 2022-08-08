import React from "react";
import {StateType} from "../App";
import Button from "./ButtonComponent";

type CounterComponentType = {
    state: StateType
    dispatch: (state: StateType) => void
    disabledButton: boolean
    incorrectValue: boolean
}

const CounterComponent: React.FC<CounterComponentType> = (props) => {

    const incrementFunction = () => {
        let newState = {...props.state, currentValue: props.state.currentValue + 1}
        newState.currentValue <= props.state.maxValue && props.dispatch(newState)
    }

    const resetFunction = () => {
        let newState = {...props.state, currentValue: props.state.startValue}
        props.dispatch(newState)
    }

    let func = () => {
        if (props.state.currentValue === props.state.maxValue || !props.disabledButton || props.incorrectValue) {
            return true;
        } else return false;
    }
    let dis = func()
    return (
        <div className={'panelBlock'}>
            <div className={props.state.currentValue === props.state.maxValue && props.disabledButton ? 'maxValueColor' : ''}>
                {
                    props.incorrectValue ? 'incorrect value' : (!props.disabledButton ? 'press -set-' : props.state.currentValue)
                }
            </div>
            <div>
                <Button buttonText={'inc'}
                        disabled={dis}
                        onclick={incrementFunction}/>
                <Button buttonText={'reset'} disabled={!props.disabledButton || dis} onclick={resetFunction}/>
            </div>
        </div>
    )
}

export default CounterComponent