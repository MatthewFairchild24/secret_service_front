import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/public/home/HomePage";
import ProjectPage from "../pages/public/project/ProjectPage";
import ProjectsPage from "../pages/public/project/ProjectsPage";
import ServicesPage from "../pages/public/service/ServicesPage";
import ServicePage from "../pages/public/service/ServicePage"
import ContactPage from "../pages/public/contact/ContactPage";
import LoginPage from "../pages/admin/login/LoginPage";


export const router = createBrowserRouter([
    {path: '/', element:<HomePage/>},
    {path: '/project/:id', element: <ProjectPage/>},
    {path: '/projects', element: <ProjectsPage/>},
    {path: '/services', element: <ServicesPage/>},
    {path: '/service/:id', element: <ServicePage/>},
    {path: '/contacts', element: <ContactPage/>},
    {path: '/admin', element: <LoginPage/>}
])  