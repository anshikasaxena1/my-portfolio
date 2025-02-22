import {useState, useRef} from 'react'
import { motion } from 'framer-motion'

import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';

//g6ICm1FwpK8UVIIcc
//template_k2mt2co
//service_4ysmg6n
const  Contact = () => {
  const formRef=useRef();
  const [form,setForm]=useState({
    name:'',
    email:'',
    message:'',
  });
  const [loading,setLoading]=useState(false);

  const handleChange=(e)=>{
    const {name, value}=e.target;
    setForm({...form, [name]: value})

  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch('https://portfolio-backend-g9n8.onrender.com/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email, 
          message: form.message
        })
      });

      const data = await response.json();

      if (response.ok) {
        setLoading(false);
        setForm({
          name: '',
          email: '',
          message: ''
        });
        alert('Thank you. I will get back to you as soon as possible.');
      } else {
        setLoading(false);
        alert('Something went wrong. Please try again.');
      }

    } catch (error) {
      setLoading(false);
      console.log(error);
      alert('Something went wrong. Please try again.');
    }

    
  }

  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
       <motion.div 
        variants={slideIn('left',"tween",0.2,1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
       >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col' >
            <span className='text-white font-medium mb-4' >Your name</span>
            <input 
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-none font-medium'
            />
            
          </label>
          <label className='flex flex-col' >
            <span className='text-white font-medium mb-4' >Your Email</span>
            <input 
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-none font-medium'
            />
            
          </label>
          <label className='flex flex-col' >
            <span className='text-white font-medium mb-4' >Your Message</span>
            <textarea
            rows="7"
              
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-none font-medium'
            />
            
          </label>
          <button 
            type='submit'
            className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'
          >
            Submit
          </button>

        </form>

       </motion.div>
       <motion.div
        variants={slideIn("right","tween",0.2,1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
       >
        <EarthCanvas/>
       </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact,"contact");