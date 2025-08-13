import Image from "next/image"
import CubeFace from "./cube-2d"

export default function Cube(){
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="cube container">
                <div className="front side"><CubeFace cName={"bg-blue-400 w-12 h-12 border-1 w-42 h-42"} value={" "}/></div>
                <div className="back side"><CubeFace cName={"bg-green-400 w-12 h-12 border-1 w-42 h-42 "} value={" "}/></div>
                <div className="left side"><CubeFace cName={"bg-red-400 w-12 h-12 border-1 w-42 h-42 "} value={" "}/></div>
                <div className="right side"><CubeFace cName={"bg-orange-400 w-12 h-12 border-1 w-42 h-42 "} value={" "}/></div>
                <div className="top side"><CubeFace cName={"bg-white w-12 h-12 border-1 w-42 h-42"} value={" "}/></div>
                <div className="bottom side"><CubeFace cName={"bg-yellow-300 w-12 h-12 border-1 w-42 h-42"} value={" "}/></div>
            </div>
        </div>
    )
}