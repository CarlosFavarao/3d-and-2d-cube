export default function Element(props: {value?: any, cName?: any}){
    return (
        <p className={props.cName}>{props.value}</p>
    )
}