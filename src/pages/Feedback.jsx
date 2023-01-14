import React, { useRef }  from 'react';
import { firestore } from "../firebase";
import { addDoc, collection, query, orderBy, serverTimestamp, onSnapshot } from "@firebase/firestore";

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
  }

  return (
    <div className='Feedback'>
      <div className='w-full bg-white py-16 lg:px-16 px-5'>
        <div className='mac-w-[1240px] mx-auto grid lg:grid-cols-2 gap-8 bg-white'>
          <div className='flex flex-col justify-center text-center'>
            <h1 className='text-[#F68B1F] md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Your Feedback Matters!</h1>
            <div className='md:text-base text-sm my-1 md:my-2 lg:mx-14 mx-6 text-justify'>
              <p className='text-center italic font-medium text-gray-400'>We want to hear your thoughts and suggestions about USM4U :D</p>
              <p className='md:pt-14 pt-8'>
                Our objective is to make the USM4U usability experience intuitive and efficient. 
                We'd like to know how we're doing on this objective, and if the information that we've presented on USM4U is valuable and easy to find.
              </p>
              <p className='pt-6'>
                We'd appreciate it if you could complete a brief survey about your experience. 
                We'll be relying on this feedback to add new content and functionality to the site. 
                We look forward to hearing from you!
              </p>
            </div>
          </div>
          <div className='lg:mx-0 mx-8 md:px-10 px-4 md:py-10 py-5 bg-slate-200 md:rounded-3xl rounded-2xl'>
            <form onSubmit={ handleSave }>
              <div className='text-center mb-8 md:mt-9 mt-6 lg:text-2xl text-xl font-bold'>
                <h1>Feedback Form</h1>
              </div>
              <label className='block mb-7 mx-4 text-sm'>
                <span className='block font-medium text-slate-700 my-[0.3rem] mx-1'>Name</span>
                <input className='p-3 flex w-full h-10 rounded-lg text-black' type='text' id='name' name='name' placeholder='Name' ref={ nameRef } required />
              </label>
              <label className='block mb-7 mx-4 text-sm'>
                <span className='block font-medium text-slate-700 my-[0.3rem] mx-1'>Student Email</span>
                <input className='p-3 flex w-full h-10 rounded-lg text-black' type='email' id='studEmail' name='studentEmail' placeholder='@student.usm.my' ref={ emailRef } required />
              </label>
              <label className='block mb-7 mx-4 text-sm'>
                <span className='block font-medium text-slate-700 my-[0.3rem] mx-1'>Phone Number</span>
                <input className='p-3 flex w-full h-10 rounded-lg text-black' type='text' id='phoneNum' name='phoneNumber' placeholder='60123456789' ref={ phoneRef } required />
              </label>
              <label className='block mb-7 mx-4 text-sm'>
                <span className='block font-medium text-slate-700 my-[0.3rem] mx-1'>Message</span>
                <textarea className='p-3 flex w-full h-10 rounded-lg text-black max-h-[250px]' type='text' id='message' name='message' placeholder='Leave your message here' ref={ messageRef } required />
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
