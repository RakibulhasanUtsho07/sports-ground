"use client";

import { Button, Dropdown, Label } from "@heroui/react";
import { useState } from "react";


export function DropdownBar({ available_slots = [] }) {
    const [selectedKeys, setSelectedKeys] = useState("Select Time");
    console.log(available_slots, "slot");

    
    const formatSlotDisplay = (slot) => {
        if (!slot) return "";
        
        
        if (typeof slot === "object" && slot.startTime && slot.endTime) {
            return `${slot.startTime} - ${slot.endTime} (${slot.status || "Regular"})`;
        }
        
       
        return String(slot);
    };

    const onSelectionChange = (slot) => {
        const displayText = formatSlotDisplay(slot);
        setSelectedKeys(displayText);
    };

    return (
        <Dropdown>
            <Button
                className="w-full text-left justify-between bg-white hover:bg-green-100 border border-green-500 text-slate-100 px-4 py-3 h-12 rounded-xl transition-all shadow-md focus:ring-1 focus:ring-emerald-500/50"
                aria-label="Menu"
                variant="secondary"
            >
                <span className="truncate text-black font-medium">
                    {selectedKeys || "Select Time Slot"}
                </span>
                <span className="text-xs text-slate-400">▼</span>
            </Button>

            <Dropdown.Popover className="bg-slate-900 border border-slate-800 rounded-xl shadow-2xl p-1 min-w-[240px] z-50">
                <Dropdown.Menu
                    selectedKeys={selectedKeys}
                    onSelectionChange={setSelectedKeys}
                    onAction={(key) => console.log(`Selected: ${key}`)}
                    className="gap-1 p-1"
                >
                    {available_slots.map((slot, ind) => {
                        
                        const displayValue = formatSlotDisplay(slot);
                        const itemKey = typeof slot === "object" ? (slot.id || ind) : ind;

                        return (
                            <Dropdown.Item
                                onClick={() => onSelectionChange(slot)}
                                key={itemKey}
                                textValue={displayValue}
                                className="flex items-center px-4 py-3 rounded-lg text-slate-100 bg-transparent transition-all cursor-pointer
                               hover:text-emerald-400 hover:bg-emerald-500/10 
                               focus:text-emerald-400 focus:bg-emerald-500/10
                               data-[selected=true]:bg-emerald-500 data-[selected=true]:text-slate-950 data-[selected=true]:font-bold"
                            >
                                <Label className="w-full block bg-transparent cursor-pointer text-sm font-medium text-slate-100 hover:text-inherit">
                                    {displayValue}
                                </Label>
                            </Dropdown.Item>
                        );
                    })}
                </Dropdown.Menu>
            </Dropdown.Popover>
        </Dropdown>
    );
}