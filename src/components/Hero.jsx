import heroImg from '../assets/hero.webp'
import { CircleArrowRight } from 'lucide-react'

const Hero = () => {
  return (
    <section id='home' className="bg-heroBg text-white flex items-center pt-24 md:h-screen">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between p-8 overflow-y-hidden
      gap-12 h-full">
        {/* left side */}
        <div className="md:w-1/2">
          <h1 className='text-3xl font-secondary font-bold mb-4 md:w-3/5 leading-snug'>Start Your Journey to Mental 
          {' '}<span className='text-primary tracking-wide'>Wellness</span></h1>
          <p className='text-lg mb-10 md:pr-8'>We lower our stress levels, we got to know our pain, we connect better, we improve our focus
            , and we are kinder to ourselves. Let us walk you through the basics in our new mindful guide on how to meditate
          </p>
          <button className='bg-primary text-white py-4 px-8 font-medium rounded-md hover:bg-primary/90'>
            <a href="" className='flex gap-1 items-center'>
              <span>Get Started</span>
              <CircleArrowRight/>
            </a>
          </button>
        </div>
        {/* right side */}
        <div className="md:w-1/2 h-full">
          <img src={heroImg} alt="hero image" className='' />
        </div>
      </div>
    </section>
  )
}

export default Hero