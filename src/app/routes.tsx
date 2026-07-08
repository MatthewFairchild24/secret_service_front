import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/public/home/HomePage";


export const router = createBrowserRouter([
    {path: '/', element:<HomePage/>}
])