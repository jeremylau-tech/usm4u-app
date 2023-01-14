import React, { useEffect, useState } from "react";
import CreateActivity from "./CreateActivity";
import EditActivity from "./EditActivity"

export default function Activities_StuOrgView(){
    const [action, setAction] = useState("Default")
    const [createVisible, setCreateVisible] = useState(false)
    const [editVisible, setEditVisible] = useState(false) 

    const handleOnChange = (e) => {
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
                    <option value="Create">Create Activity</option>
                    <option value="Edit">Edit Activity</option>
                </select>
            </div>
            
            <div>
                {createVisible && <CreateActivity />}
                {editVisible && <EditActivity />}
            </div>
        </div>
    )
}
