import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { X } from "lucide-react";
import { motion } from "motion/react";


const Navbar = () => {

const [isOpen , setIsOpen] = useState(false);

const [activeSection , setActiveSection] = useState('home');

const handleToogle = () => {
    setIsOpen(!isOpen)
}

const  handleCloseMenu = () => {
    setIsOpen(false)
}

const handleScroll =() => {
    const sections = ['home' , 'services' , 'about' , 'pricing' , 'testimonials'];
    const scrollPositions = window.scrollY + 100;

    sections.forEach(section => {
        const element = document.getElementById(section);
        if(element){
            const offsetTop = element.offsetTop;
            const height = element.offsetHeight;
            if(scrollPositions >= offsetTop && scrollPositions < offsetTop + height) {
                setActiveSection(section)
            }
        }
    })
}

useEffect(() => {
    window.addEventListener('scroll' , handleScroll);
    return() => window.removeEventListener('scroll' , handleScroll);
})

const handleScrollTo = (targetId) => {
    const targetElement = document.getElementById(targetId);
    if(targetElement) {
        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        })
    }
}

    const navLinks = (
        <ul className="font-medium flex flex-col md:flex-row lg:space-x-8 sm:space-y-4 space-y-2 md:space-y-0 p-4 md:p-0">
            <li>
                <motion.a
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}
                 href="#home"
                onClick={(e) => {
                    e.preventDefault();
                    handleCloseMenu();
                    handleScrollTo('home')
                }

                }
                className={`text-white ${activeSection==='home' ? 'isActive' : ''}`}>Home</motion.a>
            </li>
            <li>
                <a href="#services"
                 onClick={(e) => {
                    e.preventDefault();
                    handleCloseMenu();
                    handleScrollTo('services');
                }

                }
                className={`text-white ${activeSection==='services' ? 'isActive' : ''}`}>Services</a>
            </li>
            <li>
                <a href="#about"
                 onClick={(e) => {
                    e.preventDefault();
                    handleCloseMenu();
                    handleScrollTo('about');
                }

                }
                className={`text-white ${activeSection==='about' ? 'isActive' : ''}`}>About Us</a>
            </li>
            <li>
                <a href="#pricing"
                 onClick={(e) => {
                    e.preventDefault();
                    handleCloseMenu();
                    handleScrollTo('pricing');
                }

                }
                className={`text-white ${activeSection==='pricing' ? 'isActive' : ''}`}>Pricing</a>
            </li>
            <li>
                <a href="#testimonials"
                 onClick={(e) => {
                    e.preventDefault();
                    handleCloseMenu();
                    handleScrollTo('testimonials')
                }

                }
                className={`text-white ${activeSection==='testimonials' ? 'isActive' : ''}`}>Testimonials</a>
            </li>
        </ul>
    )

  return (
    <nav className="bg-heroBg text-white py-6 px-4 fixed top-0 left-0 right-0 z-10">
        <div className="container mx-auto flex justify-between items-center w-full">
            {/* logo */}
            <div className="flex">
               <img className="h-12 w-12 " src="src/assets/fav-icon.png" alt="logo" />
               <h1 className="text-4xl tracking-wide font-semibold px-2">Well
                <span className="text-primary">Ness</span></h1>
            </div>

            {/* navLinks */}
            <div className="hidden lg:flex flex-grow justify-center">
            <nav className="">
                {navLinks}
            </nav>
            </div>
           <div className="hidden lg:block">
                <a 
                onClick={e => {
                    e.preventDefault();
                    handleScrollTo('contact')
                }}
                href="contact" className="text-white bg-primary hover:bg-primary/90 px-4 py-2 rounded-md">Contact Us</a>
           </div>

           {/* hamburger Menu */}
           <div className="block lg:hidden">
            <button 
            onClick={handleToogle}
            className={`text-white focus:outline-none ${isOpen ? <X/> : ""}`}>
            <Menu className="size-6 "/>
            </button> 
           </div>
        </div>

        {/* mobile view */}
            {
                isOpen && (
                    <nav className="absolute top-full left-0 w-full bg-heroBg">
                        <ul className="flex flex-col p-4 space-y-3">
                            {navLinks.props.children}
                            <li className="py-4">
                            <a href="contact"
                            className="text-white bg-primary hover:bg-primary/90 px-4 py-2 rounded-md"
                            onClick={(e) => {
                                e.preventDefault();
                                handleCloseMenu();
                                handleScrollTo('contact');

                            }
                            }>Contact Us</a>
                        </li>
                        </ul>
                       
                    </nav>
                )
            }
        
    </nav>
  )
}

export default Navbar