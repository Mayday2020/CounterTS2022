import React from "react";
import {StateType} from "../App";
import Button from "./ButtonComponent";

type CounterComponentType = {
    state: StateType
    dispatch: (state: StateType) => void
    disabledButton: boolean
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

    return (
        <div className={'panelBlock'}>
            <div className={props.state.currentValue === props.state.maxValue ? 'maxValueColor' : ''}>
                {!props.disabledButton ? 'press -set-' : props.state.currentValue}
            </div>
            <div>
                <Button buttonText={'inc'}
                        disabled={props.state.currentValue === props.state.maxValue || !props.disabledButton}
                        onclick={incrementFunction}/>
                <Button buttonText={'reset'} disabled={!props.disabledButton} onclick={resetFunction}/>
            </div>
        </div>
    )
}

export default CounterComponent