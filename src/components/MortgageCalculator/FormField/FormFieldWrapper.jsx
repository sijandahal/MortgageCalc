import {Label} from "../Label/Label"
import {SpanComponent} from "../SpanComponent/SpanComponent"
import {Input} from "../Input/Input";
export const FormField = ({label, inputName, inputType, spanIcon, allowNegative, onChange, thousandSeparator})=> {
    return(
        <div className="form__wrapper my-4">
            <Label htmlfor = "loanAmount" >
            {label}
                <div className="flex">
                    <SpanComponent>{spanIcon}</SpanComponent>
                    <Input name = {inputName} type={inputType} thousandSeparator={thousandSeparator} allowNegative={false} onChange={onChange}/>
                </div>
            </Label>
        </div>

        
    )
}