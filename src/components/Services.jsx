import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import serviceimg1 from '../assets/service1.webp'
import serviceimg2 from '../assets/service2.webp'
import serviceimg3 from '../assets/service3.webp'
import serviceimg4 from '../assets/service4.webp'

const Services = () => {
  return (
    <div id='services' className='bg-[#f7f8fc]'>
      <div className="container mx-auto pt-28 px-4">
        <div className="text-center space-y-5">
          <h2 className="text-3xl font-bold font-secondary text-heroBg">What Can We Do Together?</h2>
          <p className="md:w-1/2 mx-auto">Lorem Ipsum is simply dummy text of the printing and typewriting industry. 
            Lorem Ipsum has been the industry standard dummy text since the 1500s.
          </p>
        </div>

        {/* service categories */}
        <div className="py-12 md-4/5 mx-auto">
        <Tabs>
    <TabList className="flex flex-wrap justify-between items-center md:gap-6 gap-3">
      <Tab>Couple Counselling</Tab>
      <Tab>Parenting Skills</Tab>
      <Tab>Feeling Stuck</Tab>
      <Tab>Self-Confidence</Tab>
    </TabList>

    <TabPanel>
      <div className='flex flex-col md:flex-row gap-8 mt-8'>
      <div className='md:w-1/2 bg-white rounded-lg p-12 font-secondary'>
        <h3 className='text-3xl font-semibold text-primary mb-4'>Couple Counselling</h3>
        <p className='mb-8'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo eligendi fugiat beatae 
          voluptas! Dolorum, ducimus numquam accusamus similique, accusantium, dolorem praesentium
           laboriosam molestiae blanditiis eum ut inventore deserunt officia ullam!</p>
           <h4>Benefits</h4>
           <ul className='list-disc list-inside space-y-3'>
            <li>Understanding Relationship Dynamics</li>
            <li>Understanding Family Planning</li>
            <li>Understanding Relationship Dynamics</li>
           </ul>
      </div>
      <div className='md:w-1/2'>
        <img src={serviceimg1} alt="" className='w-full h-auto rounded-2xl object-cover' />
      </div>
      </div>
    </TabPanel>

    <TabPanel>
    <div className='flex flex-col md:flex-row gap-8 mt-8'>
      <div className='md:w-1/2 bg-white rounded-lg p-12 font-secondary'>
        <h3 className='text-3xl font-semibold text-primary mb-4'>Parenting Skills</h3>
        <p className='mb-8'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo eligendi fugiat beatae 
          voluptas! Dolorum, ducimus numquam accusamus similique, accusantium, dolorem praesentium
           laboriosam molestiae blanditiis eum ut inventore deserunt officia ullam!</p>
           <h4>Benefits</h4>
           <ul className='list-disc list-inside space-y-3'>
            <li>Understanding Relationship Dynamics</li>
            <li>Understanding Family Planning</li>
            <li>Understanding Relationship Dynamics</li>
           </ul>
      </div>
      <div className='md:w-1/2'>
        <img src={serviceimg2} alt="" className='w-full h-auto rounded-2xl object-cover' />
      </div>
      </div>
    </TabPanel>

    <TabPanel>
    <div className='flex flex-col md:flex-row gap-8 mt-8'>
      <div className='md:w-1/2 bg-white rounded-lg p-12 font-secondary'>
        <h3 className='text-3xl font-semibold text-primary mb-4'>Feeling Stuck</h3>
        <p className='mb-8'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo eligendi fugiat beatae 
          voluptas! Dolorum, ducimus numquam accusamus similique, accusantium, dolorem praesentium
           laboriosam molestiae blanditiis eum ut inventore deserunt officia ullam!</p>
           <h4>Benefits</h4>
           <ul className='list-disc list-inside space-y-3'>
            <li>Understanding Relationship Dynamics</li>
            <li>Understanding Family Planning</li>
            <li>Understanding Relationship Dynamics</li>
           </ul>
      </div>
      <div className='md:w-1/2'>
        <img src={serviceimg3} alt="" className='w-full h-auto rounded-2xl object-cover' />
      </div>
      </div>
    </TabPanel>

    <TabPanel>
    <div className='flex flex-col md:flex-row gap-8 mt-8'>
      <div className='md:w-1/2 bg-white rounded-lg p-12 font-secondary'>
        <h3 className='text-3xl font-semibold text-primary mb-4'>Self-Confidence</h3>
        <p className='mb-8'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo eligendi fugiat beatae 
          voluptas! Dolorum, ducimus numquam accusamus similique, accusantium, dolorem praesentium
           laboriosam molestiae blanditiis eum ut inventore deserunt officia ullam!</p>
           <h4>Benefits</h4>
           <ul className='list-disc list-inside space-y-3'>
            <li>Understanding Relationship Dynamics</li>
            <li>Understanding Family Planning</li>
            <li>Understanding Relationship Dynamics</li>
           </ul>
      </div>
      <div className='md:w-1/2'>
        <img src={serviceimg4} alt="" className='w-full h-auto rounded-2xl object-cover' />
      </div>
      </div>
    </TabPanel>
    
  </Tabs>
        </div>
      </div>
    </div>
  )
}

export default Services