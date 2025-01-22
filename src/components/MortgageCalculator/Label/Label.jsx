export const Label = ({htmlFor, className = "", children})=> {
    return (
        <label htmlFor={htmlFor} className={`${className} block mb-2 text-sm font-medium text-gray-900 `}>
            {children}
            </label>
    )
}