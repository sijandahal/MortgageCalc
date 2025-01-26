import { NumericFormat } from "react-number-format"

export const Input = ({type, name, className = "", thousandSeparator = "," , allowNegative, onChange})=> {
    return (
        <NumericFormat type={type} name={name} onChange = {onChange} thousandSeparator = {thousandSeparator}  allowNegative = {allowNegative} className= {`${className} rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full  p-2.5  `}/>
    )
}