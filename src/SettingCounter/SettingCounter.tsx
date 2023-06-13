import s from './SettingCounter.module.css'
import {CounterButton} from "../CounterNubres/CounterButton/CounterButtons";
import React, {useState} from "react";
import {SupperInput} from "./SupperInput/SupperInput";


type typeSetting = {
    setStartValue: (value: number) => void
    setMaxValue: (value: number) => void;
    startValue: number
    maxValue: number
    settingValue: () => void
    callback: (value: number, inputName: 'max' | 'start') => void
}


export const SettingCounter = React.memo( (props: typeSetting) => {
    const error = props.maxValue <= props.startValue


    return (
        <div className={s.wrapper}>
            <div className={s.bodySettingCounter}>

                <div className={`${s.windowForValue}  ${error ? s.error : ''}`}>
                    <SupperInput titleInput={"Max value:"}
                                         value={props.maxValue}
                                         setValue={props.setMaxValue}
                                         maxValue={props.maxValue}// refactor
                                         startValue={props.startValue}//refactor
                                         callback={props.callback}
                                         name='max'
                    />

                    <SupperInput titleInput={"Start value:"}
                                         value={props.startValue}
                                         setValue={props.setStartValue}
                                         maxValue={props.maxValue}   //refactor
                                         startValue={props.startValue} //refactor
                                         callback={props.callback}
                                         name='start'
                    />
                </div>

                <div className={s.windowForButton}>
                    <CounterButton
                                        titleButton={'set'}
                                        changeValue={props.settingValue}
                                        isDisabled={props.maxValue <= props.startValue
                                            || props.startValue < 0
                                            || props.maxValue < 0}
                    />

                </div>
            </div>
        </div>
    )
})

