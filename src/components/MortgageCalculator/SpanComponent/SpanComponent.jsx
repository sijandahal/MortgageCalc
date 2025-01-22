export const SpanComponent = ({children, className = ""})=>{
    return (
        <span className= {`${className}flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md `}>
            {children}
        </span>
    )
}