"use client"

import { FieldError, Input, Label, TextField, Select, ListBox, TextArea, Button, Card } from "@heroui/react";
import TimeCreator from "./TimeCreator";
import { postFacility } from "@/lib/action/action";
import { useState } from "react";



function AddFacility() {
    const [timeSlots, setTimeSlots] = useState([
        { id: 1, startTime: '06:00', endTime: '08:00', status: 'Regular' }
    ]);
    console.log(timeSlots)
    const onSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const ground = Object.fromEntries(formData.entries())
        const fullFunctionData = {
            ...ground,
            timeSlots:timeSlots
        }

        console.log(fullFunctionData)
        const addFacility = await postFacility(fullFunctionData)

       

    }
     
    return (
       <div className="max-w-4xl mx-auto my-12 px-4">
            
            <div className="mb-8">
                <h2 className="text-3xl font-extrabold  tracking-tight">Add New Facility</h2>
                <p className="text-sm mt-1">Fill in the details below to configure and launch a new sports or event facility.</p>
            </div>

            <Card className="bg-white border border-slate-100 shadow-xl rounded-3xl overflow-hidden">
                <form   onSubmit={onSubmit} className="p-8 sm:p-10 space-y-10">

                    {/* Section 1: Basic Information */}
                    <div className="space-y-6">
                        <h3 className="text-lg font-bold text-green-500 border-b border-slate-100 pb-2">1. Ground & Facility Info</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="md:col-span-2">
                                <TextField name="groundName" isRequired>
                                    <Label className="text-sm font-semibold text-green-500 mb-1 block">Ground Name</Label>
                                    <Input placeholder="Shuttle Pro Indoor Arena" className="w-full h-11 rounded-xl border-slate-200 focus:border-cyan-500 transition-all" />
                                    <FieldError />
                                </TextField>
                            </div>
                            <div>
                                <TextField name="facilityType" isRequired>
                                    <Label className="text-sm font-semibold text-green-500 mb-1 block">Facility Type</Label>
                                    <Input placeholder="Badminton" className="w-full h-11 rounded-xl border-slate-200 focus:border-cyan-500 transition-all" />
                                    <FieldError />
                                </TextField>
                            </div>
                            <div className="md:col-span-2">
                                <TextField name="location" isRequired>
                                    <Label className="text-sm font-semibold text-green-500 mb-1 block">Location</Label>
                                    <Input placeholder="e.g., Sector 4, Uttara, Dhaka" className="w-full h-11 rounded-xl border-slate-200 focus:border-cyan-500 transition-all" />
                                    <FieldError />
                                </TextField>
                            </div>
                            <div>
                                <TextField name="ownerEmail" type="email" isRequired>
                                    <Label className="text-sm font-semibold text-green-500 mb-1 block">Owner Email</Label>
                                    <Input type="email" placeholder="owner@example.com" className="w-full h-11 rounded-xl border-slate-200 focus:border-cyan-500 transition-all" />
                                    <FieldError />
                                </TextField>
                            </div>
                        </div>
                    </div>

                    {/* Section 2: Pricing, Capacity & Dates */}
                    <div className="space-y-6">
                        <h3 className="text-lg font-bold text-green-600 border-b border-slate-100 pb-2">2. Pricing & Availability</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <TextField name="price" type="number" isRequired>
                                <Label className="text-sm font-semibold text-green-500 mb-1 block">Price (USD)</Label>
                                <Input type="number" placeholder="1299" className="w-full h-11 rounded-xl border-slate-200 focus:border-cyan-500 transition-all" />
                                <FieldError />
                            </TextField>

                            <TextField name="capacity" isRequired>
                                <Label className="text-sm font-semibold text-green-500 mb-1 block">Capacity</Label>
                                <Input placeholder="e.g., 20 Players max" className="w-full h-11 rounded-xl border-slate-200 focus:border-cyan-500 transition-all" />
                                <FieldError />
                            </TextField>

                            <TextField name="departureDate" type="date" isRequired>
                                <Label className="text-sm font-semibold text-green-500 mb-1 block">Effective Date</Label>
                                <Input type="date" className="w-full h-11 rounded-xl border-slate-200 focus:border-cyan-500 transition-all" />
                                <FieldError />
                            </TextField>

                            <div className="md:col-span-3">
                                <TextField name="bookingSector" isRequired>
                                    <Label className="text-sm font-semibold text-green-500 mb-1 block">Booking Sector</Label>
                                    <Input placeholder="e.g., Sports, Corporate Events, Tournaments" className="w-full h-11 rounded-xl border-slate-200 focus:border-cyan-500 transition-all" />
                                    <FieldError />
                                </TextField>
                            </div>
                        </div>
                    </div>

                    {/* Section 3: Dynamic Time Slots */}
                    <TimeCreator timeSlots={timeSlots} setTimeSlots={setTimeSlots}></TimeCreator>

                    {/* Section 4: Media & Description */}
                    <div className="space-y-6">
                        <h3 className="text-lg font-bold text-green-600 border-b border-slate-100 pb-2">4. Media & Details</h3>
                        <div className="grid grid-cols-1 gap-6">
                            <TextField name="image_url" isRequired>
                                <Label className="text-sm font-semibold text-green-500 mb-1 block">Image URL</Label>
                                <Input
                                    type="url"
                                    placeholder="https://example.com/facility-image.jpg"
                                    className="w-full h-11 rounded-xl border-slate-200 focus:border-cyan-500 transition-all"
                                />
                                <FieldError />
                            </TextField>

                            <TextField name="description" isRequired>
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
                            Create Facility
                        </Button>
                    </div>
                </form>
            </Card>
        </div>
    )
}

export default AddFacility
