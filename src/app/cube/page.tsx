import CubeFace from "@/app/ui/cube-2d"
import Cube from "@/app/ui/cube"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Cubo mágico 2D e 3D'
}

export default function Cubes(){
    return (
        <>
            <div className="grid grid-cols-3 max-w-fit m-auto mt-10 mb-10">
                <CubeFace cName={"hidden"} value={" "}/>
                <CubeFace cName={"bg-green-300 w-12 h-12 border-1 max-w-p"} value={" "}/>
                <CubeFace cName={"hidden"} value={" "}/>
                <CubeFace cName={"bg-red-400 w-12 h-12 border-1 max-w-p"} value={" "}/>
                <CubeFace cName={"bg-white w-12 h-12 border-1 max-w-p"} value={" "}/>
                <CubeFace cName={"bg-orange-300 w-12 h-12 border-1 max-w-p"} value={" "}/>
                <CubeFace cName={"hidden"} value={" "}/>
                <CubeFace cName={"bg-blue-400 w-12 h-12 border-1 max-w-p"} value={" "}/>
                <CubeFace cName={"hidden"} value={" "}/>
                <CubeFace cName={"hidden"} value={" "}/>
                <CubeFace cName={"bg-yellow-300 w-12 h-12 border-1 max-w-p"} value={" "}/>
            </div>
            <Cube/>
        </>
    )
}