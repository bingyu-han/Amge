import { HomeIcon, Info, Award, Briefcase, Phone, Building, Star } from "lucide-react";
import Index from "./pages/Index.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import Contact from "./pages/Contact.jsx";
import Mission from "./pages/Mission.jsx";
import Advantages from "./pages/Advantages.jsx";

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <HomeIcon className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "About Us",
    to: "/about",
    icon: <Info className="h-4 w-4" />,
    page: <About />,
  },
  {
    title: "Advantages",
    to: "/why-choose",
    icon: <Award className="h-4 w-4" />,
    page: <Advantages />,
  },
  {
    title: "Services",
    to: "/services",
    icon: <Briefcase className="h-4 w-4" />,
    page: <Services />,
  },
  {
    title: "Contact",
    to: "/contact",
    icon: <Phone className="h-4 w-4" />,
    page: <Contact />,
  }
];
