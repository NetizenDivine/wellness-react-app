import thumbnail from '../assets/video-thumbnail.webp'
import { useState } from "react"
import { Play } from 'lucide-react'
import { CircleArrowRight } from 'lucide-react'


const About = () => {
const [isVideoPlaying, setIsVideoPlaying] = useState(false)

const handleVideoPlay = () => {
  setIsVideoPlaying(false)
}

const handleCloseVideo = () => {
  setIsVideoPlaying(false)
}


  return (
    <div id="about" className="bg-[#f7f8fc] pb-16 pt-20">
      <div className="container mx-auto">
        <div className='py-12 px-4 md:w-4/5 mx-auto flex flex-col md:flex-row items-center gap-8'>
        {/* left hand side */}
          <div className="md:w-1/2 w-full mb-8 md:mb-0">
            {
              !isVideoPlaying ? (
                <div className='relative'>
                  <img src={thumbnail} alt="" className='w-full md:h-[446px] h-auto
                  rounded-lg object cover' />
                  <button
                  onClick={handleVideoPlay}
                  className='absolute top-1/2 left-1/2 bg-primary rounded-full p-2 shadow-lg transform'><Play className='size-8 text-white'/></button>
                </div>
              ) : (null)
            }
          </div>
        {/* right hand side */}
        <div className="md:w-1/2">
          <h1 className='text-3xl font-secondary font-bold mb-4 md:w-3/5 leading-snug'>Individual Consult And Therapy</h1>
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
        </div>

        {
          isVideoPlaying && 
            <div className='relative w-full h-full items-center justify-center z-50'>
              <iframe 
              width="560"
              height="315" 
              src="https://www.youtube.com/embed/IniDebSdFUw?si=3WpGTrS9A-riG_fl" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowfullscreen
              className='rounded-lg'>
              </iframe>
              <button onClick={handleCloseVideo} className='absolute top-4 right-4 text-white text-2xl cursor-pointer'>
                &times
              </button>
            </div>
          
        }

      </div>
    </div>
  )
}

export default About