import { Route, Routes } from "react-router-dom";
import BasicLayouts from "../layouts/BasicLayouts";
export default function AppRoutes(){
    return(
        <Routes>
            <Route path="/" element={<BasicLayouts/>}></Route>
        </Routes>
    )
}