import { UserRound , Mail , Phone , Globe} from "lucide-react"
import { useState } from "react";

const Contact = () => {

    const [name , setName] = useState('')
    const [email , setEmail] = useState('')
    const [phone , setPhone] = useState('')
    const [country , setCountry] = useState('')
    const [message , setMessage] = useState('')
    const [showModal , setShowModal] = useState(false)

const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
        name,
        email,
        phone,
        country,
        message
    }
    console.log(data)
    if(!data){
        alert("Please fill all required fields")
        return;
    }
    setShowModal(true)
}

const closeModal = () => {
    setShowModal(false)
    setName('')
    setEmail('')
    setPhone('')
    setCountry('')
    setMessage('')
}

  return (
    <div className="bg-heroBg flex items-center justify-center py-28 px-8" id="contact">
        <div className="container mx-auto">
            <div className="md:w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2 items-center md:gap-12 gap-8">

                {/* LHS */}
                <div className="space-y-8">
                    <h2 className="text-4xl font-bold font-secondary mb-4 text-white">Make an Appointment</h2>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="flex items-start gap-4">
                            <div className="flex items-center justify-center rounded-full bg-[#ffffff1a]">
                                <UserRound className="text-primary"/>
                            </div>
                            <div className="text-white space-y-1">
                                <h3 className="text-md font-semibold">24 Hours Services</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.

                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="flex items-center justify-center rounded-full bg-[#ffffff1a]">
                                <Mail className="text-primary"/>
                            </div>
                            <div className="text-white space-y-1">
                                <h3 className="text-md font-semibold">Expert Therapist</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.

                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="flex items-center justify-center rounded-full bg-[#ffffff1a]">
                                <Phone className="text-primary"/>
                            </div>
                            <div className="text-white space-y-1">
                                <h3 className="text-md font-semibold">High Quality Care</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.

                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="flex items-center justify-center rounded-full bg-[#ffffff1a]">
                                <Globe className="text-primary"/>
                            </div>
                            <div className="text-white space-y-1">
                                <h3 className="text-md font-semibold">Trusted Clinic</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.

                                </p>
                            </div>
                        </div>
                     </div>
                </div>

                {/* RHS */}
                <div className="space-y-8 p-8 bg-white shadow-xl rounded-md">
                    <h3 className="text-2xl font-bold mb-4">Book Appointment</h3>
                    <form 
                    onSubmit={handleSubmit}
                    className="space-y-8">
                        <div className="flex flex-col md:flex-row gap-4">
                            <input 
                            onChange={e => setName(e.target.value)}
                            type="text" placeholder="Name" className="w-full p-4 rounded-md
                             focus:outline-none focus:ring-1 focus:ring-primary shadow" />
                              <input
                              onChange={e => setEmail(e.target.value)}
                              type="email" placeholder="Email Address" className="w-full p-4 rounded-md
                             focus:outline-none focus:ring-1 focus:ring-primary shadow" />
                        </div>
                        <div className="flex flex-col md:flex-row gap-4">
                            <input 
                            onChange={e => setPhone(e.target.value)} 
                            type="tel" placeholder="Contact Number" className="w-full p-4 rounded-md
                             focus:outline-none focus:ring-1 focus:ring-primary shadow" />
                              <input
                              onChange={e => setCountry(e.target.value)}
                              type="text" placeholder="Country" className="w-full p-4 rounded-md
                             focus:outline-none focus:ring-1 focus:ring-primary shadow" />
                        </div>
                        <textarea 
                        onChange={e => setMessage(e.target.value)}
                        name="" id="" placeholder="Write Your Message"
                        rows='5'
                        className="w-full p-4 rounded-md focus:outline-none focus:ring-1 focus:ring-primary shadow">
                        </textarea>
                        <button 
                        type="submit"
                        className="w-full bg-primary text-white rounded-md hover:bg-primary/80 py-2">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
        {
            showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-90">
                    <div className="bg-white p-8 rounded-md shadow-lg">
                        <h2 className="text-2xl font-bold mb-4">Thank You</h2>
                        <p>Thank You, {name}, for submitting your info.</p>
                        <button 
                        onClick={closeModal}
                        className="mt-4 px-4 py-2 bg-primary rounded-md text-white">Close</button>
                    </div>
                </div>
            )
        }
    </div>
  )
}

export default Contact