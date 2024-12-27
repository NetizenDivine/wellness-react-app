import review1 from '../assets/review1.webp'
import review2 from '../assets/review2.webp'
import { Quote } from 'lucide-react'

const Testimonials = () => {
  return (
    <div id='testimonials' className='bg-[#f7f8fc] py-12'>
      <div className="container mx-auto px-8">
        <div className="text-center mb-12">
        <h3 className="text-4xl font-bold font-secondary mb-3">What Our Clients Say</h3>
        <p className="text-lg text-neutral-700 mx-auto md:w-2/3 mb-12">Hear from some of our satisfied clients about how our services have positively impacted their lives and wellbeing</p>
        </div>

        <div className="flex flex-col md:flex-row mx-auto md:w-5/6 gap-8">
            <div className="relative bg-white rounded-lg p-6 shadow-lg flex-1">
            <div className='absolute top-0 left-0 transform -translate-y-1/2 -translate-x-1/2'>
             <Quote className='size-12 text-primary'/>
            </div>
            <div className='absolute bottom-0 right-0 transform translate-y-1/2 translate-x-1/2'>
             <Quote className='size-12 text-primary'/>
            </div>

              <p className="text-lg mb-4">This Service has been life-changing for me. The mental wellness resources
                and Personalized support have made a huge difference in my daily life. Highly recommended!
              </p>

              <div className="flex">
                <div>
                  <img src={review1} alt="profile pic" className='size-12 rounded-full'/>
                </div>
                <div className='px-2'>
                  <h3 className='font-semibold font-secondary '>Jane Austin</h3>
                  <p className='text-neutral-500 text-md'>New York, NY</p>
                </div>
              </div>
            </div>
           
            <div className="relative bg-white rounded-lg p-6 shadow-lg flex-1">
            <div className='absolute top-0 left-0 transform -translate-y-1/2 -translate-x-1/2'>
             <Quote className='size-12 text-primary'/>
            </div>
            <div className='absolute bottom-0 right-0 transform translate-y-1/2 translate-x-1/2'>
             <Quote className='size-12 text-primary'/>
            </div>
              
              <p className="text-lg mb-4">This Service has been life-changing for me. The mental wellness resources
                and Personalized support have made a huge difference in my daily life. Highly recommended!
              </p>
              <div className="flex">
                <div>
                  <img src={review2} alt="profile pic" className='size-12 rounded-full'/>
                </div>
                <div className='px-2'>
                  <h3 className='font-semibold font-secondary '>John Smith</h3>
                  <p className='text-neutral-500 text-md'>Los Angeles, CA</p>
                </div>
              </div>
            </div>
      </div>
      </div>
    </div>
  )
}

export default Testimonials