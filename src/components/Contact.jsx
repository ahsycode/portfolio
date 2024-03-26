import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send('service_m58zafn', 'template_awch0gm', {
      from_name: form.name,
      to_name: 'Ahsen',
      from_email: form.email,
      to_email: 'ahsenyavuz00@gmail.com',
      message: form.message,
    }, 'Ch3qPQ4oxI_pBKfwb')
      .then(() => {
        setLoading(false);
        alert('Bedankt voor je bericht, ik kom zo snel mogelijk bij je terug!');

        setForm({
          name: '',
          email: '',
          message: '',
        });
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
        alert('Oeps! Iets ging fout.');
      });
  };

  return (
    <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
      <motion.div variants={slideIn('left', 'tween', 0.2, 1)} className='flex-[0.75] bg-black-100 p-8 rounded-2xl'>
        <p className={styles.sectionSubText}>Contact mij</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col gap-8'>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Naam</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder='Hoe heet je?'
              className='bg-tertiary py-4 px-6
              placeholder:text-secondary text-white rounded-lg
              outlined-none border-none font-medium'/>
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder='Wat is je email?'
              className='bg-tertiary py-4 px-6
              placeholder:text-secondary text-white rounded-lg
              outlined-none border-none font-medium'/>
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Bericht</span>
            <textarea
              rows='7'
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='Wat is je bericht?'
              className='bg-tertiary py-4 px-6
              placeholder:text-secondary text-white rounded-lg
              outlined-none border-none font-medium'/>
          </label>
          <button
            type='submit'
            className='bg-tertiary py-3 px-8
            outline-none w-fit text-wgite font-bold shadow-md
            shadow-primary rounded-xl'>
            {loading ? 'Verzenden...' : 'Verzenden'}
          </button>
        </form>
      </motion.div>
      <motion.div variants={slideIn('right', 'tween', 0.2, 1)} className='xl:flex-1 xl:h-auto md:h-[550px] h[350px]'>
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
