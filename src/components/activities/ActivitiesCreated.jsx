import React from "react";

export default function ActivitiesCreated({ visible, onClose }) {
    const handleOnClose = () => {
        onClose();
    };
    
    if(!visible) return null;

    return(
        <div onClick={handleOnClose} className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
            <div className="bg-white p-2 rounded-lg w-96 h-24 text-center align-middle">
                <p className="text-2xl font-bold">Activity Created!</p>
                <p className="text-lg">Click Anywhere to Continue</p>
            </div>
        </div>
    )
}