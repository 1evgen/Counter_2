import s from './SupperInput.module.css'
import React, {ChangeEvent, useState} from "react";


type typeForSupperInput = {
    titleInput: string
    value: number | string
    setValue: (value: any) => void
    maxValue: number
    startValue: number
    callback?: (value: number, inputName: 'max' | 'start') => void
    name: 'max' | 'start'
}


export const SupperInput = React.memo( (props: typeForSupperInput) => {
    const isError = props.value < 0

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.currentTarget.value
        props.setValue(Number(value))
        props.callback?.(+value, props.name)

    }

    return (
        <div className={s.wrapperForInput}>
            <label>{props.titleInput}</label>
            <input className={`${s.styleInput} ${isError ? s.isError : ''}`}
                   type={"number"}
                   onChange={onChangeHandler}
                   value={props.value}
                   name={props.name}
            />
        </div>

    )
})


