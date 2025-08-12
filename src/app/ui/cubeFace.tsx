import Element from "./grid"

export default function CubeFace(props: {value?: any, cName?: any}){
    return (
        <div className="grid grid-cols-3 max-w-fit">
            <Element cName={props.cName} value={props.value}/>
            <Element cName={props.cName} value={props.value}/>
            <Element cName={props.cName} value={props.value}/>
            <Element cName={props.cName} value={props.value}/>
            <Element cName={props.cName} value={props.value}/>
            <Element cName={props.cName} value={props.value}/>
            <Element cName={props.cName} value={props.value}/>
            <Element cName={props.cName} value={props.value}/>
            <Element cName={props.cName} value={props.value}/>
        </div>
    )
}