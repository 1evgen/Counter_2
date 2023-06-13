
import s from './CounterNumbers.module.css'
import {CounterButton} from "./CounterButton/CounterButtons";
import React, {useState} from "react";
import {isButtonDisabled} from "../helpers/isButtonDisabled";


type typeCounterNumbers = {
    value: number | string
    maxValue: number
    startValue: number
    changeNumberInCounter: ()=> void
    resetNumberInCounter: ()=> void
    error: boolean
    ShowSetting: ()=> void
}



export const CounterNumbers = React.memo( (props: typeCounterNumbers) => {

    return (
        <div className={s.wrapper}>
            <div className={s.bodyCounter}>
                <div className={s.windowCounter}>
                    {
                       typeof props.value === "string"  ?
                            <div className={`${s.string}  ${props.error ? s.isMistakeInEnter : ''}`}>{props.value}</div>
                           :
                            <div className={`${s.number} ${props.value === props.maxValue ? s.maxValue : ''}`}>
                                {props.value}
                            </div>
                    }
                </div>

                <div className={s.spaceForButtons}>
                    <CounterButton  changeValue={props.changeNumberInCounter}
                                    titleButton={'inc'}
                                    value={props.value}
                                    isDisabled={isButtonDisabled('inc', props.value, props.maxValue, props.startValue)}
                    />
                    <CounterButton changeValue={props.resetNumberInCounter}
                                   titleButton={'reset'}
                                   value={props.value}
                                   isDisabled={isButtonDisabled('reset', props.value, props.maxValue, props.startValue)}
                    />
                    <CounterButton titleButton={'Set'}
                                   changeValue={props.ShowSetting}
                    />
                </div>
            </div>
        </div>
    )
})