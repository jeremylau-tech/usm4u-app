
import React, { useRef, useState } from "react";
import { firestore } from "../firebase";
import { addDoc, collection } from "@firebase/firestore";
import FinanceCreated from "../components/activities/FinanceCreated";
import NavbarSigned from '../components/NavbarSigned';

export default function CreateFinance() {
    const [showModal, setShowModal] = useState(false)

    const asnbRef = useRef();
    const ethereumRef = useRef();
    const grabRef = useRef();
    const hongleongRef = useRef();
    const maeRef = useRef();
    const tngRef = useRef();
    const hariRef = useRef();
    const ref = collection(firestore, "finance");

    const handleOnClose = () => setShowModal(false);
    const handleSave = async(e) => {
        setShowModal(true)
        e.preventDefault();

        let financeData = {
            asnb: asnbRef.current.value, 
            ethereum: ethereumRef.current.value, 
            grab: grabRef.current.value, 
            hongleong: hongleongRef.current.value, 
            mae: maeRef.current.value,
            tng: tngRef.current.value,
            hari: hariRef.current.value,
        }

        try{
            addDoc(ref, financeData);
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
                            <span className='block font-medium text-slate-700 my-[0.3rem] mx-1'>ASNB:</span>
                            <input type="text" name="Opportunity name" ref={asnbRef} className='p-3 flex w-full h-10 rounded-lg text-black' required/>
                        </label>
                        <label className='block mb-7 mx-4 text-sm'>
                        <span className='block font-medium text-slate-700 my-[0.3rem] mx-1'>Ethereum:</span> 
                            <input type="text" name="Opportunity venue"ref={ethereumRef} className='p-3 flex w-full h-10 rounded-lg text-black' required/>
                        </label>
                        <label className='block mb-7 mx-4 text-sm'>
                        <span className='block font-medium text-slate-700 my-[0.3rem] mx-1'>Grab:</span> 
                            <input type="text" name="Opportunity date" ref={grabRef} className='p-3 flex w-full h-10 rounded-lg text-black' required/>
                        </label>
                        <label className='block mb-7 mx-4 text-sm'>
                        <span className='block font-medium text-slate-700 my-[0.3rem] mx-1'>Hong Leong:</span> 
                            <input type="text" name="Opportunity link" ref={hongleongRef} className='p-3 flex w-full h-10 rounded-lg text-black' required/>
                        </label>
                        <label className='block mb-7 mx-4 text-sm'>
                        <span className='block font-medium text-slate-700 my-[0.3rem] mx-1'>Mae:</span> 
                            <input type="text" name="Opportunity poster" ref={maeRef} className='p-3 flex w-full h-10 rounded-lg text-black' required/>
                        </label>

            {/* date url file */}
                        <label className='block mb-7 mx-4 text-sm'>
                        <span className='block font-medium text-slate-700 my-[0.3rem] mx-1'>TnG:</span> 
                            <input type="text" name="Opportunity poster" ref={tngRef} className='p-3 flex w-full h-10 rounded-lg text-black' required/>
                        </label>
                        <input type="submit" value="Submit" className='bg-[#F68B1F] w-[110px] h-[45px] font-medium rounded-lg text-black hover:scale-105 duration-300 flex justify-center align-middle'/> 
                    </form>
                </div>
            </div>
            <div>
                <FinanceCreated onClose={ handleOnClose } visible={showModal} />
            </div>
        </div>
    )
}