export const isButtonDisabled = (titleButton: 'inc' | 'reset' | 'settings', value: number | string, maxValue: number, startValue: number) => {
    if (titleButton === 'inc'){
        return value === maxValue
    }else {
        return value === startValue
    }
}