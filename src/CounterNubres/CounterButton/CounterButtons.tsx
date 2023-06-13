
import s from './CounterButtons.module.css'
import React from "react";


type typeForButton = {
    titleButton: string
    changeValue: ()=> void
    value?: number | string
    // maxValue?: number
    // startValue?: number
    isDisabled?: boolean
}


 export const  CounterButton = React.memo( (props: typeForButton)=> {
    return (
        <button onClick={props.changeValue}
                className={s.styleButtons}
                disabled={props.isDisabled}

        >{props.titleButton}</button>

    )
})