import CubeFace from "@/app/ui/cubeFace"
import Cube from "@/app/ui/cube"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Cubo mágico 2D e 3D'
}

export default function Cubes(){
    return (
        <>
            <div className="grid grid-cols-3 max-w-fit">
                <CubeFace cName={"hidden"} value={" "}/>
                <CubeFace cName={"bg-green-400 w-12 h-12 border-1 max-w-p"} value={" "}/>
                <CubeFace cName={"hidden"} value={" "}/>
                <CubeFace cName={"bg-red-500 w-12 h-12 border-1 max-w-p"} value={" "}/>
                <CubeFace cName={"bg-white w-12 h-12 border-1 max-w-p"} value={" "}/>
                <CubeFace cName={"bg-orange-500 w-12 h-12 border-1 max-w-p"} value={" "}/>
                <CubeFace cName={"hidden"} value={" "}/>
                <CubeFace cName={"bg-blue-500 w-12 h-12 border-1 max-w-p"} value={" "}/>
                <CubeFace cName={"hidden"} value={" "}/>
                <CubeFace cName={"hidden"} value={" "}/>
                <CubeFace cName={"bg-yellow-300 w-12 h-12 border-1 max-w-p"} value={" "}/>
            </div>
            <Cube/>
        </>
    )
}