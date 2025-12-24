'use client'
import React, { useState } from "react"
import { BiEnvelope, BiMap, BiPhone } from "react-icons/bi";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { SOCIAL_LINKS } from '../../../app/data'

const iconForLabel = (label: string) => {
    switch (label.toLowerCase()) {
        case 'github':
            return <FaGithub className='text-white w-6 h-6' />
        case 'linkedin':
            return <FaLinkedin className='text-white w-6 h-6' />
        case 'twitter':
            return <FaTwitter className='text-white w-6 h-6' />
        case 'instagram':
            return <FaInstagram className='text-white w-6 h-6' />
        default:
            return <FaGithub className='text-white w-6 h-6' />
    }
}

const Contact = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)
    const [status, setStatus] = useState<string | null>(null)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setStatus(null)
        setLoading(true)
        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, phone, message }),
            })
            const data = await res.json()
            if (res.ok) {
                setStatus('Message sent — thank you!')
                setName('')
                setEmail('')
                setPhone('')
                setMessage('')
            } else {
                setStatus(data?.error || 'Failed to send message')
            }
        } catch (err) {
            setStatus('Failed to send message')
        } finally {
            setLoading(false)
        }
    }

    return (
        <div id='contact' className='pt-16 pb-16'>
            <div className='w-[90%] md:w-[80%] lg:w-[70%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10'>
                {/* text content */}
                <div>
                    <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-200'>
                        Get in <span className='text-cyan-200'>Touch</span>
                    </h1>
                    <p className='text-gray-400 mt-6 text-base sm:text-lg'>
                        Reach out to me today for collaborations, inquiries, or just to say hello!
                    </p>
                    <div className='mt-7'>
                        <div className='flex items-center space-x-3 mb-4'>
                            <BiPhone className='w-9 h-9 text-cyan-300' />
                            <p className='text-xl font-bold text-gray-400'>
                                +1 (872) 218-2302
                            </p>
                        </div>
                        <div className='flex items-center space-x-3 mb-4'>
                            <BiEnvelope className='w-9 h-9 text-cyan-300' />
                            <p className='text-xl font-bold text-gray-400'>
                                mathurmehul3@gmail.com
                            </p>
                        </div>
                        <div className='flex items-center space-x-3 mb-4'>
                            <BiMap className='w-9 h-9 text-cyan-300' />
                            <p className='text-xl font-bold text-gray-400'>
                                Chicago, Illinois, USA
                            </p>
                        </div>
                    </div>
                    {/* social icons */}
                    <div className='flex items-center mt-8 space-x-3'>
                        {SOCIAL_LINKS.map((s) => {
                            const label = s.label.toLowerCase()
                            const base = 'w-14 h-14 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300'
                            let colorClasses = 'bg-blue-950/60 hover:opacity-90'
                            if (label.includes('github')) colorClasses = 'bg-blue-950/60 hover:bg-gray-200/40'
                            else if (label.includes('linkedin')) colorClasses = 'bg-blue-950/60 hover:bg-blue-500'
                            else if (label.includes('twitter')) colorClasses = 'bg-blue-950/60 hover:bg-sky-400'
                            else if (label.includes('instagram') || label.includes('insta')) colorClasses = 'bg-blue-950/60 hover:bg-red-600'

                            return (
                                <a key={s.label} href={s.link} target='_blank' rel='noopener noreferrer'
                                    className={`${base} ${colorClasses}`}>
                                    {iconForLabel(s.label)}
                                </a>
                            )
                        })}
                    </div>
                </div>
                {/* form */}
                <form onSubmit={handleSubmit} className='m:p-10 p-5 bg-[#131332] rounded-lg'>
                    <input value={name} onChange={(e) => setName(e.target.value)} type='text' placeholder='Name' className='px-4 py-3.5 bg-[#363659] text-white 
                    outline-none rounded-md w-full placeholder:text-white/70'/>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type='email' placeholder='Email' className='px-4 py-3.5 mt-6 bg-[#363659] text-white 
                    outline-none rounded-md w-full placeholder:text-white/70'/>
                    <input value={phone} onChange={(e) => setPhone(e.target.value)} type='text' placeholder='Mobile Number' className='px-4 py-3.5 mt-6 bg-[#363659] text-white 
                    outline-none rounded-md w-full placeholder:text-white/70'/>
                    <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder='Your Message' className='px-4 py-3.5 mt-6 bg-[#363659] text-white 
                    outline-none rounded-md w-full placeholder:text-white/70 h-[10rem] resize-none'></textarea>

                    <button type='submit' disabled={loading} className='mt-8 px-12 py-4 bg-blue-950 hover:bg-blue-900 transition-all duration-300
                    cursor-pointer text-white rounded-full disabled:opacity-60'>
                        {loading ? 'Sending...' : 'Send Message'}
                    </button>

                    {status && (
                        <p className='mt-4 text-sm text-green-400'>{status}</p>
                    )}
                </form>
            </div>
        </div>
    );
};

export default Contact;