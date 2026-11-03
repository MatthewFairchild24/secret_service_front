import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/public/home/HomePage";
import ProjectPage from "../pages/public/project/ProjectPage";
import ProjectsPage from "../pages/public/project/ProjectsPage";
import ServicesPage from "../pages/public/service/ServicesPage";
import ContactPage from "../pages/public/contact/ContactPage";


export const router = createBrowserRouter([
    {path: '/', element:<HomePage/>},
    {path: '/project/:id', element: <ProjectPage/>},
    {path: '/projects', element: <ProjectsPage/>},
    {path: '/services', element: <ServicesPage/>},
    {path: '/contacts', element: <ContactPage/>}

])