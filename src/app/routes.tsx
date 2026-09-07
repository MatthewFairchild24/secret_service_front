import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/public/home/HomePage";
import ProjectPage from "../pages/public/project/ProjectPage";


export const router = createBrowserRouter([
    {path: '/', element:<HomePage/>},
    {path: '/project/:id', element: <ProjectPage/>}
])