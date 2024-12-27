

const WorkingStep = () => {
  return (
    <div className="bg-workingimg bg-center py-12 bg-cover relative">
      <div className="absolute inset-0 bg-heroBg bg-opacity-90"></div>
      <div className="relative container mx-auto">
        <div className="text-center text-white">
          <h2 className="text-4xl font-bold font-secondary mb-4">How It Works</h2>
          <p className="text-lg md:w-1/2 w-full mx-auto mb-10">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut obcaecati illo dolorum,
             ut ipsam perferendis qui error impedit temporibus? Veritatis!</p>
        </div>

        <div className="flex flex-col md:w-4/5 mx-auto md:flex-row gap-8">
          <div className="relative bg-white text-center rounded-lg p-6 flex-1">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary 
              flex items-center justify-center p-6 rounded-full text-white size-12
              ">1</div>
              <h3 className="text-lg font-semibold mt-8">Fill a Form</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, 
                laborum. Iste sit eius pariatur nobis aperiam quasi eos natus vero</p>
          </div>
          <div className="relative bg-white text-center rounded-lg p-6 flex-1">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary 
              flex items-center justify-center p-6 rounded-full text-white size-12
              ">2</div>
              <h3 className="text-lg font-semibold mt-8">Get Matched</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, 
                laborum. Iste sit eius pariatur nobis aperiam quasi eos natus vero</p>
          </div>
          <div className="relative bg-white text-center rounded-lg p-6 flex-1">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary  
               flex items-center justify-center p-6 rounded-full text-white size-12
               ">3</div>
              <h3 className="text-lg font-semibold mt-8">Schedule</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, 
                laborum. Iste sit eius pariatur nobis aperiam quasi eos natus vero</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WorkingStep