export const required = value =>{
    if (value) return undefined
    return 'no value'
}
export const maxleight = (maxvalue)=>(value)=>{
    if (value.length> maxvalue) return "max value"
    return undefined
}