import React from 'react'

type ButtonPropsType = {
    buttonText: string
    disabled: boolean
    onclick: ()=> void
}

const Button: React.FC<ButtonPropsType> = (props) => {
    return <button disabled={props.disabled} onClick={props.onclick} className={'button'}>
        {props.buttonText}
    </button>
}

export default Button