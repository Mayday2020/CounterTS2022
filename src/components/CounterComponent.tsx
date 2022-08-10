import React from "react";
import {StateType} from "../App";
import Button from "./ButtonComponent";

type CounterComponentType = {
    state: StateType
    dispatch: (state: StateType) => void
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
    return (
        <div className={'panelBlock'}>
            <div className={props.state.currentValue === props.state.maxValue ? 'maxValueColor' : ''}>
                {
                    props.incorrectValue ? 'incorrect value' : props.state.currentValue
                }
            </div>
            <div>
                <Button buttonText={'inc'}
                        disabled={props.state.currentValue === props.state.maxValue || props.incorrectValue}
                        onclick={incrementFunction}/>
                <Button buttonText={'reset'} disabled={props.incorrectValue} onclick={resetFunction}/>
            </div>
        </div>
    )
}

export default CounterComponent