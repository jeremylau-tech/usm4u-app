import React, { useEffect, useState } from "react";
import CreateOpportunity from "./CreateOpportunity";
import EditOpportunity from "./EditOpportunity";
import { firestore } from "../firebase";
import { addDoc, collection, getDocs } from "@firebase/firestore";
import { getDatabase, ref, onValue } from "firebase/database";

export default function Opportunities_BhepaView(){
    const [action, setAction] = useState("Default")
    const [createVisible, setCreateVisible] = useState(false)
    const [editVisible, setEditVisible] = useState(false) 

    const [opportunities, setOpportunities] = useState([]);

    useEffect(() => {
        getOpportunites()
    }, [])

    const getOpportunites = async() => {
        await getDocs(collection(firestore, 'opportunity'))
            .then(response => {
                console.log(response)
                const opps = response.docs.map(opp => ({
                    data: opp.data(), 
                    id: opp.id, 
                }))
                setOpportunities(opps)
            }).catch(error => console.log(error.message))
    }

    const handleOnChange = (e) => {
        e.preventDefault();
        setAction(e.target.value);

    }

    useEffect(() => {
        action === "Create" ? setCreateVisible(true) : setCreateVisible(false);
        action === "Edit" ? setEditVisible(true) : setEditVisible(false);
      }, [action]);  
    
    return(
        <div className="w-full bg-white py-16 lg:px-16 px-5">
            <div className="flex justify-center">
                <select
                value={action} onChange = {handleOnChange}
                className="w-96 h-16 mb-20 text-xl border-orange-500 border-4 rounded-lg text-black focus:ring-4 focus:outline-none font-medium px-4 py-2.5 text-center inline-flex items-center" name="action" id="action"
                >
                    <option value="Default" disabled selected>Choose your action</option>
                    <option value="Create">Create Opportunity</option>
                    <option value="Edit">Edit Opportunity</option>
                </select>
            </div>

            {/* testing
            <div>
                <button onClick={() => getOpportunites()}>Refresh</button>
                <ul>
                    {opportunities.map(opp => (<li key={opp.data.opportunityName}></li>))}
                </ul>
            </div> */}
            
            <div>
                {createVisible && <CreateOpportunity />}
                {editVisible && <EditOpportunity oppData = {opportunities}/>}
            </div>
        </div>
    )
}
