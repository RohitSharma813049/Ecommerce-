import { Outlet } from "react-router-dom"

function Accountlayout(){
    
    return(
        <>
        <div>
            <div></div>
            <div> <Outlet/> </div>
        </div>
        
        </>
    )

}

export default Accountlayout