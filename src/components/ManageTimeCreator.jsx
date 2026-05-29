import React, { useState } from 'react';

function ManageTimeCreator({available_slots, setAvailable_slots}) {
  

    
   

   
    const handleInputChange = (id, field, value) => {
        setAvailable_slots(available_slots.map(slot => 
            slot.id === id ? { ...slot, [field]: value } : slot
        ));
    };

    
    const handleRemoveSlot = (id) => {
        setAvailable_slots(available_slots.filter(slot => slot.id !== id));
    };

    
    const handleAddSlot = () => {
        const newId = available_slots.length > 0 ? Math.max(...available_slots.map(s => s.id)) + 1 : 1;
        setAvailable_slots([...available_slots, { id: newId, startTime: '08:00', endTime: '10:00', status: 'Regular' }]);
    };

    return (
        <div className="w-full space-y-3">
            
          
            {available_slots.map((slot, index) => (
                <div 
                    key={slot.id} 
                    className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 bg-white p-4 border border-green-200 rounded-2xl shadow-sm transition-all hover:border-slate-300"
                >
                    
                    <div className="flex items-center justify-center bg-slate-50 border border-slate-100 rounded-xl px-3 py-1.5 sm:py-2 text-xs font-bold text-slate-400 min-w-[40px]">
                        #{index + 1}
                    </div>

                    
                    <div className="flex-1 flex flex-col gap-1">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider pl-1 sm:hidden">Start Time</span>
                        <input
                            type="time"
                            value={slot.startTime}
                            onChange={(e) => handleInputChange(slot.id, 'startTime', e.target.value)}
                            className="w-full h-11 px-3 bg-slate-50/50 border border-slate-200 text-slate-700 text-sm rounded-xl focus:outline-none focus:border-emerald-500 focus:bg-white transition-all font-medium"
                        />
                    </div>

                    
                    <div className="hidden sm:flex items-center justify-center text-xs font-semibold text-slate-400 px-1">
                        to
                    </div>

                    
                    <div className="flex-1 flex flex-col gap-1">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider pl-1 sm:hidden">End Time</span>
                        <input
                            type="time"
                            value={slot.endTime}
                            onChange={(e) => handleInputChange(slot.id, 'endTime', e.target.value)}
                            className="w-full h-11 px-3 bg-slate-50/50 border border-slate-200 text-slate-700 text-sm rounded-xl focus:outline-none focus:border-emerald-500 focus:bg-white transition-all font-medium"
                        />
                    </div>

                    
                    <div className="w-full sm:w-36 flex flex-col gap-1">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider pl-1 sm:hidden">Type</span>
                        <select 
                            value={slot.status}
                            onChange={(e) => handleInputChange(slot.id, 'status', e.target.value)}
                            className="w-full h-11 px-3 bg-slate-50/50 border border-slate-200 text-slate-600 text-sm rounded-xl focus:outline-none focus:border-emerald-500 focus:bg-white transition-all font-medium cursor-pointer"
                        >
                            <option value="Regular">Regular</option>
                            <option value="Peak Hour">Peak Hour</option>
                        </select>
                    </div>

                  
                    <button
                        type="button"
                        onClick={() => handleRemoveSlot(slot.id)}
                        className="h-11 sm:h-11 px-4 sm:px-3 bg-red-50 hover:bg-red-100 sm:bg-transparent text-red-500 sm:text-slate-400 sm:hover:text-red-500 font-medium text-sm rounded-xl transition-all flex items-center justify-center border border-red-100 sm:border-none shadow-sm sm:shadow-none"
                        title="Remove Slot"
                    >
                        <span className="sm:hidden text-xs font-bold mr-2">Remove Slot</span>
                        <span className="text-base leading-none">✕</span>
                    </button>
                </div>
            ))}

            
            <button
                type="button"
                onClick={handleAddSlot}
                className="w-full py-3 mt-2 border border-dashed border-emerald-300 hover:border-emerald-500 text-emerald-600 hover:bg-emerald-50/30 rounded-xl transition-all text-sm font-medium"
            >
                + Add Custom Slot
            </button>
        </div>
    );
}

export default ManageTimeCreator;