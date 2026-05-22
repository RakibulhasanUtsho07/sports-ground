"use client"

import { FieldError, Input, Label, TextField, Select, ListBox, TextArea, Button, Card } from "@heroui/react";
import ManageTimeCreator from "./ManageTimeCreator";
import { patchFacility } from "@/lib/action/action";
import { useState } from "react";
 

function ManageGroundCard({ manageGround }) {
    const { name, image_url, booking_count, owner_email, description,  capacity, price_per_hour, facility_type, location, _id, } = manageGround
    const slots = manageGround.available_slots
   const [available_slots, setAvailable_slots] = useState(slots)
    const convertTo24Hour = (timeStr) => {
        if (!timeStr) return "00:00";
        const [time, modifier] = timeStr.trim().split(' ');
        let [hours, minutes] = time.split(':');
        
        if (hours === '12') {
            hours = '00';
        }
        if (modifier === 'PM') {
            hours = parseInt(hours, 10) + 12;
        }
        
      
        return `${String(hours).padStart(2, '0')}:${minutes}`;
    };
   const initialSlots = available_slots.map((slotString, index) => {
        const [start, end] = slotString.split(' - ');
        return {
            id: index + 1,
            startTime: convertTo24Hour(start),
            endTime: convertTo24Hour(end),
            status: 'Regular'
        };
        
    });
    
    const [timeSlots, setTimeSlots] = useState(initialSlots);

    const onSubmit =async (e) =>{
         e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const manageGround = Object.fromEntries(formData.entries())
        
        const updatedData = {
            ...manageGround,
            timeSlots: timeSlots

        }
        console.log(updatedData)
        const managedGround = await patchFacility(updatedData, _id)

    }

    return (
        <div className="max-w-4xl mx-auto my-12 px-4">

            <div className="mb-8">
                <h2 className="text-3xl font-extrabold  tracking-tight">Manage Facility</h2>
                <p className="text-sm mt-1">Edit in the details below to configure and launch a edited sports or event facility.</p>
            </div>

            <Card className="bg-white border border-slate-100 shadow-xl rounded-3xl overflow-hidden">
                <form onSubmit={onSubmit} className="p-8 sm:p-10 space-y-10">


                    <div className="space-y-6">
                        <h3 className="text-lg font-bold text-green-500 border-b border-slate-100 pb-2">1. Ground & Facility Info</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="md:col-span-2">
                                <TextField name="groundName" isRequired>
                                    <Label className="text-sm font-semibold text-green-500 mb-1 block">Ground Name</Label>
                                    <Input value={name} placeholder="Shuttle Pro Indoor Arena" className="w-full h-11 rounded-xl border-slate-200 focus:border-cyan-500 transition-all" />
                                    <FieldError />
                                </TextField>
                            </div>
                            <div>
                                <TextField name="facilityType" isRequired>
                                    <Label className="text-sm font-semibold text-green-500 mb-1 block">Facility Type</Label>
                                    <Input value={facility_type} placeholder="Badminton" className="w-full h-11 rounded-xl border-slate-200 focus:border-cyan-500 transition-all" />
                                    <FieldError />
                                </TextField>
                            </div>
                            <div className="md:col-span-2">
                                <TextField value={location} name="location" isRequired>
                                    <Label className="text-sm font-semibold text-green-500 mb-1 block">Location</Label>
                                    <Input placeholder="e.g., Sector 4, Uttara, Dhaka" className="w-full h-11 rounded-xl border-slate-200 focus:border-cyan-500 transition-all" />
                                    <FieldError />
                                </TextField>
                            </div>
                            <div>
                                <TextField value={owner_email} name="ownerEmail" type="email" isRequired>
                                    <Label className="text-sm font-semibold text-green-500 mb-1 block">Owner Email</Label>
                                    <Input type="email" placeholder="owner@example.com" className="w-full h-11 rounded-xl border-slate-200 focus:border-cyan-500 transition-all" />
                                    <FieldError />
                                </TextField>
                            </div>
                        </div>
                    </div>


                    <div className="space-y-6">
                        <h3 className="text-lg font-bold text-green-600 border-b border-slate-100 pb-2">2. Pricing & Availability</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <TextField name="price" type="number" isRequired>
                                <Label className="text-sm font-semibold text-green-500 mb-1 block">Price (USD)</Label>
                                <Input value={price_per_hour} type="number" placeholder="1299" className="w-full h-11 rounded-xl border-slate-200 focus:border-cyan-500 transition-all" />
                                <FieldError />
                            </TextField>

                            <TextField name="capacity" isRequired>
                                <Label className="text-sm font-semibold text-green-500 mb-1 block">Capacity</Label>
                                <Input value={capacity} placeholder="e.g., 20 Players max" className="w-full h-11 rounded-xl border-slate-200 focus:border-cyan-500 transition-all" />
                                <FieldError />
                            </TextField>

                            <TextField name="departureDate" type="date" isRequired>
                                <Label className="text-sm font-semibold text-green-500 mb-1 block">Effective Date</Label>
                                <Input type="date" className="w-full h-11 rounded-xl border-slate-200 focus:border-cyan-500 transition-all" />
                                <FieldError />
                            </TextField>
                            <div className="md:col-span-3">
                                <TextField value={booking_count} name="bookingSector" isRequired>
                                    <Label className="text-sm font-semibold text-green-500 mb-1 block">Booking Sector</Label>
                                    <Input placeholder="e.g., Sports, Corporate Events, Tournaments" className="w-full h-11 rounded-xl border-slate-200 focus:border-cyan-500 transition-all" />
                                    <FieldError />
                                </TextField>
                            </div>
                        </div>
                    </div>


                    <div className="space-y-4 bg-green-50 p-5 rounded-2xl border border-slate-100">

                        <div className="flex items-center justify-between px-1">
                            <label className="text-sm font-bold text-green-600 tracking-wide flex items-center gap-2">
                                Configure Open Time Slots <span className="text-red-500">*</span>
                            </label>

                           
                        </div>

                        
                        <ManageTimeCreator setTimeSlots={setTimeSlots} timeSlots={timeSlots} available_slots={available_slots}></ManageTimeCreator>
                    </div>

                    {/* Section 4: Media & Description */}
                    <div className="space-y-6">
                        <h3 className="text-lg font-bold text-green-600 border-b border-slate-100 pb-2">4. Media & Details</h3>
                        <div className="grid grid-cols-1 gap-6">
                            <TextField name="imageUrl" isRequired>
                                <Label className="text-sm font-semibold text-green-500 mb-1 block">Image URL</Label>
                                <Input
                                    value={image_url}
                                    type="url"
                                    placeholder="https://example.com/facility-image.jpg"
                                    className="w-full h-11 rounded-xl border-slate-200 focus:border-cyan-500 transition-all"
                                />
                                <FieldError />
                            </TextField>

                            <TextField value={description} name="description" isRequired>
                                <Label className="text-sm font-semibold text-green-500 mb-1 block">Description</Label>
                                <TextArea
                                    placeholder="Describe the facility features, rules, and unique selling points..."
                                    className="w-full min-h-[120px] rounded-xl border-slate-200 focus:border-cyan-500 transition-all p-3"
                                />
                                <FieldError />
                            </TextField>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-4">
                        <Button
                            type="submit"
                            className="w-full h-12 rounded-xl bg-green-500 hover:bg-green-700 text-white font-semibold shadow-lg shadow-cyan-600/20 transition-all duration-200 flex items-center justify-center gap-2 text-base"
                        >
                            Edit Facility
                        </Button>
                    </div>
                </form>
            </Card>
        </div>
    )
}

export default ManageGroundCard
