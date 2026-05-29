import React, { useState } from 'react';
import { IoTimeOutline, IoTrashOutline, IoAddCircleOutline } from 'react-icons/io5';

function TimeCreator({available_slots, setAvailable_slots}) {
    
    

    const handleAddSlot = () => {
        const newId = available_slots.length > 0 ? Math.max(...available_slots.map(s => s.id)) + 1 : 1;
        setAvailable_slots([...available_slots, { id: newId, startTime: '08:00', endTime: '10:00', status: 'Regular' }]);
    };

    const handleRemoveSlot = (id) => {
        setAvailable_slots(available_slots.filter(slot => slot.id !== id));
    };

    const handleInputChange = (id, field, value) => {
        setAvailable_slots(available_slots.map(slot => 
            slot.id === id ? { ...slot, [field]: value } : slot
        ));
    };
    console.log(available_slots)

    return (
       
        <div className="w-full space-y-4 bg-slate-50 p-5 rounded-2xl border border-slate-200">
           
            <div className="flex items-center gap-2 text-emerald-600 font-semibold text-lg mb-2">
                <IoTimeOutline className="text-xl" />
                <h3>Manage Turf Time Slots</h3>
            </div>

            
            {available_slots.map((slot) => (
                <div 
                    key={slot.id} 
                    className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-end bg-white p-4 rounded-xl border border-slate-200 shadow-sm"
                >
                    
                    <div>
                        <label className="text-xs font-semibold text-slate-500 block mb-1.5">Start Time</label>
                        <input 
                            type="time" 
                            value={slot.startTime} 
                            onChange={(e) => handleInputChange(slot.id, 'startTime', e.target.value)}
                           
                            className="w-full h-11 px-3 bg-white text-slate-800 border border-slate-200 rounded-xl focus:outline-none focus:border-emerald-500 transition-colors"
                        />
                    </div>

                   
                    <div>
                        <label className="text-xs font-semibold text-slate-500 block mb-1.5">End Time</label>
                        <input 
                            type="time" 
                            value={slot.endTime} 
                            onChange={(e) => handleInputChange(slot.id, 'endTime', e.target.value)}
                            className="w-full h-11 px-3 bg-white text-slate-800 border border-slate-200 rounded-xl focus:outline-none focus:border-emerald-500 transition-colors"
                        />
                    </div>

                    
                    <div className="flex items-center gap-3">
                        <div className="w-full">
                            <label className="text-xs font-semibold text-slate-500 block mb-1.5">Status</label>
                            <select 
                                value={slot.status} 
                                onChange={(e) => handleInputChange(slot.id, 'status', e.target.value)}
                                className="w-full h-11 px-3 bg-white text-slate-800 border border-slate-200 rounded-xl focus:outline-none focus:border-emerald-500 transition-colors"
                            >
                                <option value="Regular">Regular</option>
                                <option value="Peak">Peak</option>
                            </select>
                        </div>

                       
                        {available_slots.length > 1 && (
                            <button 
                                type="button" 
                                onClick={() => handleRemoveSlot(slot.id)}
                                className="h-11 px-3 mt-6 bg-red-50 hover:bg-red-600 text-red-600 hover:text-white rounded-xl border border-red-200 hover:border-red-600 transition-all flex items-center justify-center bg-opacity-10"
                                title="Remove Slot"
                            >
                                <IoTrashOutline className="text-lg" />
                            </button>
                        )}
                    </div>
                </div>
            ))}

           
            <button 
                type="button" 
                onClick={handleAddSlot} 
                className="w-full py-3 border border-dashed border-emerald-300 hover:border-emerald-500 text-emerald-600 hover:bg-emerald-50/50 rounded-xl transition-all flex items-center justify-center gap-2 text-sm font-medium bg-white"
            >
                <IoAddCircleOutline className="text-lg" />
                Add New Time Slot
            </button>
        </div>
    );
}

export default TimeCreator;