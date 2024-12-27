import { Facebook, Instagram, Mail, MapPin, Phone, Twitch, Twitter } from 'lucide-react'
import favicon from '../assets/fav-icon.png'

const Footer = () => {
  return (
    <>
    <div className="py-12 bg-gray-200 px-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-8">
            
                <div className='space-y-6 mr-14'>
                    <div className='flex items-center space-x-2'>
                    <img src={favicon} alt="" className=''/>
                    <h1 className='text-4xl font-semibold mx-2 tracking-wide'>Well
                        <span className='text-primary'>Ness</span></h1>
                    </div>
                   <p className='text-para'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                     Error nam pariatur quas possimus modi fugit excepturi. Eveniet laudantium illo dicta?
                   </p>
                     <div className='flex space-x-4'>
                         <a href="" className='text-primary rounded-full bg-gray-300 size-10 flex items-center justify-center hover:bg-primary hover:text-white'>
                    <Facebook/>
                        </a>
                        <a href="" className='text-primary rounded-full bg-gray-300 size-10 flex items-center justify-center hover:bg-primary hover:text-white'>
                    <Twitch/>
                        </a>
                       <a href="" className='text-primary  rounded-full bg-gray-300 size-10 flex items-center justify-center hover:bg-primary hover:text-white'>
                    <Twitter/>
                        </a>
                        <a href="" className='text-primary rounded-full bg-gray-300 size-10 flex items-center justify-center hover:bg-primary hover:text-white'>
                    <Instagram/>
                        </a>
                   </div>
                </div>

                <div className='space-y-6 '>
                    <h3 className='text-xl font-semibold mb-4'>Quick Links</h3>
                    <ul className='space-y-4'>
                       
                           <li><a href="#home" className='hover:underline text-gray-700'>Home</a></li>
                            <li><a href="#about" className='hover:underline text-gray-700'>About Us</a></li>
                           <li><a href="#services" className='hover:underline text-gray-700'>Services</a></li>
                            <li><a href="#contact" className='hover:underline text-gray-700'>Contact Us</a></li>
                        
                    </ul>
                </div>

                <div className='space-y-6 '>
                    <h3 className='text-xl font-semibold mb-4'>Support</h3>
                    <ul className='space-y-4'>
                       
                           <li><a href="#" className='hover:underline text-gray-700'>FAQ</a></li>
                            <li><a href="#" className='hover:underline text-gray-700'>Terms of service</a></li>
                           <li><a href="#" className='hover:underline text-gray-700'>Privacy Policy</a></li>
                            <li><a href="#" className='hover:underline text-gray-700'>Support Center</a></li>
                        
                    </ul>
                </div>

                <div className='space-y-6 '>
                    <h3 className='text-xl font-semibold mb-4'>Contact Info</h3>
                    <ul className='space-y-4'>
                       <div className='flex items-center'>
                            <MapPin className='size-4 bg-gray-200 rounded-full text-primary mr-1'/>
                           <li><a href="#" className='hover:underline text-gray-700'>123 Street City, Country</a></li>
                        </div>
                        <div className='flex items-center'>
                            <Phone className='size-4 bg-gray-200 rounded-full text-primary mr-1'/>
                            <li><a href="#" className='hover:underline text-gray-700'>+234 5678 908</a></li>
                        </div>
                        <div className='flex items-center'>
                            <Mail className='size-4 bg-gray-100 rounded-full text-primary mr-1'/>
                            <li><a href="#" className='hover:underline text-gray-700'>info@gmail.com</a></li>
                        </div>
                    </ul>
                </div>
            
        </div>    
    </div>
        
    <div className='bg-gray-400 py-2 w-full items-center justify-center'>
        <h3 className='text-black text-center'>WellNess &copy; All rights reserved</h3>
    </div>
    </>
  )
}

export default Footer