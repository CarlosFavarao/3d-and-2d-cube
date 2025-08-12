import Element from "@/app/ui/grid"

export default function GridScreen(){
    return (
        <div className="grid grid-cols-4 content-center max-w-fit">
            <Element cName={"font-extrabold bg-white text-blue-950 rounded-full max-w-6 text-center hover:bg-blue-500 min-w-6"} value={"1"}/>
            <Element value={"2"}/>
            <Element value={"3"}/>
            <Element value={"4"}/>
            <Element value={"5"}/>
            <Element value={"6"}/>
            <Element value={"7"}/>
            <Element value={"8"}/>
            <Element value={"9"}/>
            <Element value={"10"}/>
            <Element value={"11"}/>
            <Element value={"12"}/>
            <Element value={"13"}/>
            <Element value={"14"}/>
            <Element value={"15"}/>
            <Element value={"16"}/>
        </div>
    )
}