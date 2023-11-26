
import React, { useRef, useState } from "react";
import { firestore } from "../firebase";
import { addDoc, collection } from "@firebase/firestore";
import ScoreCreated from "../components/activities/FinanceCreated";
import NavbarSigned from '../components/NavbarSigned';

export default function CreateFinance() {
    const [showModal, setShowModal] = useState(false)

    const diviRef = useRef();
    const salaRef = useRef();
    const fnbRef = useRef();
    const utiRef = useRef();
    const ref = collection(firestore, "score");

    const handleOnClose = () => setShowModal(false);
    const handleSave = async(e) => {
        setShowModal(true)
        e.preventDefault();

        let scoreData = {
            divi: diviRef.current.value, 
            sala: salaRef.current.value, 
            fnb: utiRef.current.value, 
            uti: utiRef.current.value, 
        }  

        try{
            addDoc(ref, scoreData);
        } catch(e) {
            console.log(e);
        }

        e.target.reset();
    }

    return(
        <div><NavbarSigned />
            <div className='w-full bg-white py-16 lg:px-16 px-5'>
                <div className='lg:mx-0 mx-8 md:px-10 px-4 md:py-10 py-5 bg-slate-200 md:rounded-3xl rounded-2xl'>
                    <form onSubmit={ handleSave }>
                        <div>Integration Hub</div>
                        <label className='block mb-7 mx-4 text-sm'>
                            <span className='block font-medium text-slate-700 my-[0.3rem] mx-1'>ASNB Dividends:</span>
                            <input type="text" name="Opportunity name" ref={diviRef} className='p-3 flex w-full h-10 rounded-lg text-black' required/>
                        </label>
                        <label className='block mb-7 mx-4 text-sm'>
                        <span className='block font-medium text-slate-700 my-[0.3rem] mx-1'>Salary:</span> 
                            <input type="text" name="Opportunity venue"ref={salaRef} className='p-3 flex w-full h-10 rounded-lg text-black' required/>
                        </label>
                        <label className='block mb-7 mx-4 text-sm'>
                        <span className='block font-medium text-slate-700 my-[0.3rem] mx-1'>FnB:</span> 
                            <input type="text" name="Opportunity date" ref={fnbRef} className='p-3 flex w-full h-10 rounded-lg text-black' required/>
                        </label>
                        <label className='block mb-7 mx-4 text-sm'>
                        <span className='block font-medium text-slate-700 my-[0.3rem] mx-1'>Utilities:</span> 
                            <input type="text" name="Opportunity link" ref={utiRef} className='p-3 flex w-full h-10 rounded-lg text-black' required/>
                        </label>

            {/* date url file */}
                        <input type="submit" value="Submit" className='bg-[#F68B1F] w-[110px] h-[45px] font-medium rounded-lg text-black hover:scale-105 duration-300 flex justify-center align-middle'/> 
                    </form>
                </div>
            </div>
            <div>
                <ScoreCreated onClose={ handleOnClose } visible={showModal} />
            </div>
        </div>
    )
}