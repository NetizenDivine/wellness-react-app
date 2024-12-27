

const Pricing = () => {

  const handleScrollToContact = () => {
    const targetElement = document.getElementById('contact');

    if(targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth',
      })
    }
  }
  return (
    <div id='pricing' className='bg-[#f7f8fc] pt-32'>
      <div className="container mx-auto px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold font-secondary">Perfect For Small and Large Brands</h2>
          <p className="text-md text-neutral-700 mx-auto md:w-2/3 mb-23">Explore our mental wellness packages designed to support
             individuals and businesses in fostering a healthier mindset.</p>
        </div>
          <div className="flex flex-col md:flex-row mx-auto md:w-5/6 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-lg flex-1">
              <h3 className="font-semibold font-secondary text-xl mb-4">Bronze Package</h3>
                <hr className="w-24 border text-primary border-primary"/>
              <p className="text-3xl font-bold mb-4">$99 
                <span className="text-sm text-neutral-500">/mo</span>
              </p>
              <p className="text-md mb-4">Ideal for individuals or small businesses looking to get started with mental wellness</p>
              <ul className="mb-4 list-disc list-inside space-y-2">
                <li>Access to basic wellness resources</li>
                <li>Weekoly mental wellness tips</li>
                <li>Community support group access</li>
              </ul>
              <button className="bg-primary rounded-lg py-2 px-4">
                <a href="" className="text-white">Get Started</a>
              </button>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg flex-1">
              <h3 className="font-semibold font-secondary text-xl mb-4">Silver Package</h3>
                <hr className="w-24 border text-primary border-primary"/>
              <p className="text-3xl font-bold mb-4">$199 
                <span className="text-sm text-neutral-500">/mo</span>
              </p>
              <p className="text-md mb-4">A great chance for growing businesses with additional features and support for mental wellness</p>
              <ul className="mb-4 list-disc list-inside space-y-2">
                <li>All Bronze Package features</li>
                <li>Monthly guided meditation features</li>
                <li>Personalized wellness plans</li>
                <li>Access to expert webinars</li>
              </ul>
              <button className="bg-primary rounded-lg py-2 px-4">
                <a href="" className="text-white">Get Started</a>
              </button>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg flex-1">
              <h3 className="font-semibold font-secondary text-xl mb-4">Gold Package</h3>
                <hr className="w-24 border text-primary border-primary"/>
              <p className="text-3xl font-bold mb-4">$299 
                <span className="text-sm text-neutral-500">/mo</span>
              </p>
              <p className="text-md mb-4">Perfect for larger businesses needing advanced mental wellness features and premium support</p>
              <ul className="mb-4 list-disc list-inside space-y-2">
                <li>All silver package features</li>
                <li>Weekly one-on-one coaching sessions</li>
                <li>Advanced mental wellness tracking tools</li>
                <li>24/7 access to wellness experts</li>
              </ul>
              <button 
              onClick={handleScrollToContact}
              className="bg-primary rounded-lg py-2 px-4">
                <a href="" className="text-white">Get Started</a>
              </button>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Pricing