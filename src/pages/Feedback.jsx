import React, { useRef }  from 'react';
import { firestore } from "../firebase";
import { addDoc, collection, query, orderBy, serverTimestamp, onSnapshot } from "@firebase/firestore";
import Navbar from '../components/Navbar';

function Feedback() {
  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const messageRef = useRef();

  // collection ref
  const ref = collection(firestore, "feedback");

  // query
  const q = query(ref, orderBy("createdAt", "asc"));

  const handleSave = async(e) => {
    alert('We appreciate your feedback!');
    e.preventDefault();
    console.log(messageRef.current.value);

    let data = {
      name:nameRef.current.value,
      email:emailRef.current.value,
      phone:phoneRef.current.value,
      message:messageRef.current.value,
      createdAt:serverTimestamp(),
    }

    // testing filtration
    onSnapshot(q, (snapshot) => {
      let feedback = []
      snapshot.docs.forEach((doc) => {
        feedback.push({ ...doc.data(), id:doc.id })
      })
      console.log(feedback)
    })
    // testing

    try {
      addDoc(ref, data);
    } catch(e) {
      console.log(e);
    }

    e.target.reset();
  }

  return (
    <div className='Feedback'>
      <Navbar />
      <div className='w-full bg-white py-16 lg:px-16 px-5'>
        <div className='mac-w-[1240px] mx-auto grid lg:grid-cols-2 gap-8 bg-white'>
          <div className='flex flex-col justify-center text-center'>
            <h1 className='text-[#1ff679] md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Your Input Matters for Ask CoCo</h1>
            <div className='md:text-base text-sm my-1 md:my-2 lg:mx-14 mx-6 text-justify'>
              <p className='text-center italic font-medium text-gray-400'>We want to hear your thoughts and suggestions for CoCo.</p>
              <p className='pt-6'>
              </p>
            </div>
          </div>
          <div className='lg:mx-0 mx-8 md:px-10 px-4 md:py-10 py-5 bg-slate-200 md:rounded-3xl rounded-2xl'>
            <form onSubmit={ handleSave }>
              <div className='text-center mb-8 md:mt-9 mt-6 lg:text-2xl text-xl font-bold text-[#004D4C] '>
                <h1>Enhance Your Financial Journey</h1>
              </div>
              <label className='block mb-7 mx-4 text-sm'>
                <span className='block font-medium text-slate-700 my-[0.3rem] mx-1'>Name</span>
                <input className='p-3 flex w-full h-10 rounded-lg text-black' type='text' id='name' name='name' placeholder='Name' ref={ nameRef } required />
              </label>
              <label className='block mb-7 mx-4 text-sm'>
                <span className='block font-medium text-slate-700 my-[0.3rem] mx-1'>Email</span>
                <input className='p-3 flex w-full h-10 rounded-lg text-black' type='email' id='studEmail' name='studentEmail' placeholder='.com' ref={ emailRef } required />
              </label>
              <label className='block mb-7 mx-4 text-sm'>
                <span className='block font-medium text-slate-700 my-[0.3rem] mx-1'>For Personal Insights</span>
                <input className='p-3 flex w-full h-10 rounded-lg text-black' type='text' id='phoneNum' name='phoneNumber' placeholder='Further personalisations.' ref={ phoneRef } required />
              </label>
              <label className='block mb-7 mx-4 text-sm'>
                <span className='block font-medium text-slate-700 my-[0.3rem] mx-1'>For Ask CoCo</span>
                <textarea className='p-3 flex w-full h-10 rounded-lg text-black max-h-[250px]' type='text' id='message' name='message' placeholder='Future enhancements and improvements.' ref={ messageRef } required />
              </label>
              <div className='flex text-xs italic mt-8 mb-4 mx-6 text-justify'>
                <p>
                  By submitting this form you agree to our terms and conditions and our privacy policy which explains how we may collect, 
                  use and disclose your personal information including to third parties.
                </p>
              </div>
              <div className='flex justify-center pt-8 md:pb-0 pb-6'>
                <input type='submit' value='Submit' className='bg-[#F68B1F] w-[110px] h-[45px] font-medium rounded-lg text-black hover:scale-105 duration-300'/>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Feedback
