"use client"

import { FieldError, Input, Label, TextField, TextArea, Button, Card } from "@heroui/react";
import TimeCreator from "./TimeCreator";
import { postFacility } from "@/lib/action/action";
import { useState } from "react";

function AddFacility() {
    const [available_slots, setAvailable_slots] = useState([
        { id: 1, startTime: '06:00', endTime: '08:00', status: 'Regular' }
    ]);

    const onSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const ground = Object.fromEntries(formData.entries())
        const fullFunctionData = {
            ...ground,
            available_slots: available_slots
        }
        await postFacility(fullFunctionData)
    }

    return (
        <div className="w-full max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl mx-auto my-6 md:my-12 px-4">

            <div className="mb-6 md:mb-8 text-center sm:text-left">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight">Add New Facility</h2>
                <p className="text-xs sm:text-sm mt-1 opacity-80">Fill in the details below to configure and launch a new sports or event facility.</p>
            </div>

            <Card className="bg-white border border-slate-100 shadow-xl rounded-2xl sm:rounded-3xl overflow-hidden">
                <form onSubmit={onSubmit} className="p-5 sm:p-8 md:p-10 space-y-8 md:space-y-10">

                    <div className="space-y-4 md:space-y-6">
                        <h3 className="text-base md:text-lg font-bold text-green-500 border-b border-slate-100 pb-2">1. Ground & Facility Info</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                            <div className="sm:col-span-2 md:col-span-2">
                                <TextField name="name" isRequired>
                                    <Label className="text-xs sm:text-sm font-semibold text-green-500 mb-1 block">Ground Name</Label>
                                    <Input placeholder="Shuttle Pro Indoor Arena" className="w-full h-10 sm:h-11 rounded-xl border-slate-200 focus:border-cyan-500 transition-all" />
                                    <FieldError />
                                </TextField>
                            </div>
                            <div className="sm:col-span-1 md:col-span-1">
                                <TextField name="facility_type" isRequired>
                                    <Label className="text-xs sm:text-sm font-semibold text-green-500 mb-1 block">Facility Type</Label>
                                    <Input placeholder="Badminton" className="w-full h-10 sm:h-11 rounded-xl border-slate-200 focus:border-cyan-500 transition-all" />
                                    <FieldError />
                                </TextField>
                            </div>
                            <div className="sm:col-span-2 md:col-span-2">
                                <TextField name="location" isRequired>
                                    <Label className="text-xs sm:text-sm font-semibold text-green-500 mb-1 block">Location</Label>
                                    <Input placeholder="e.g., Sector 4, Uttara, Dhaka" className="w-full h-10 sm:h-11 rounded-xl border-slate-200 focus:border-cyan-500 transition-all" />
                                    <FieldError />
                                </TextField>
                            </div>
                            <div className="sm:col-span-2 md:col-span-1">
                                <TextField name="owner_email" type="email" isRequired>
                                    <Label className="text-xs sm:text-sm font-semibold text-green-500 mb-1 block">Owner Email</Label>
                                    <Input type="email" placeholder="owner@example.com" className="w-full h-10 sm:h-11 rounded-xl border-slate-200 focus:border-cyan-500 transition-all" />
                                    <FieldError />
                                </TextField>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4 md:space-y-6">
                        <h3 className="text-base md:text-lg font-bold text-green-600 border-b border-slate-100 pb-2">2. Pricing & Availability</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                            <div className="sm:col-span-1">
                                <TextField name="price" type="number" isRequired>
                                    <Label className="text-xs sm:text-sm font-semibold text-green-500 mb-1 block">Price (USD)</Label>
                                    <Input type="number" placeholder="1299" className="w-full h-10 sm:h-11 rounded-xl border-slate-200 focus:border-cyan-500 transition-all" />
                                    <FieldError />
                                </TextField>
                            </div>

                            <div className="sm:col-span-1">
                                <TextField name="capacity" isRequired>
                                    <Label className="text-xs sm:text-sm font-semibold text-green-500 mb-1 block">Capacity</Label>
                                    <Input placeholder="e.g., 20 Players max" className="w-full h-10 sm:h-11 rounded-xl border-slate-200 focus:border-cyan-500 transition-all" />
                                    <FieldError />
                                </TextField>
                            </div>

                            <div className="sm:col-span-2 md:col-span-1">
                                <TextField name="departure_date" type="date" isRequired>
                                    <Label className="text-xs sm:text-sm font-semibold text-green-500 mb-1 block">Effective Date</Label>
                                    <Input type="date" className="w-full h-10 sm:h-11 rounded-xl border-slate-200 focus:border-cyan-500 transition-all" />
                                    <FieldError />
                                </TextField>
                            </div>

                            <div className="col-span-1 sm:col-span-2 md:col-span-3">
                                <TextField name="booking_count" isRequired>
                                    <Label className="text-xs sm:text-sm font-semibold text-green-500 mb-1 block">Booking Sector</Label>
                                    <Input placeholder="e.g., Sports, Corporate Events, Tournaments" className="w-full h-10 sm:h-11 rounded-xl border-slate-200 focus:border-cyan-500 transition-all" />
                                    <FieldError />
                                </TextField>
                            </div>
                        </div>
                    </div>

                    <div className="w-full overflow-x-auto">
                        <TimeCreator available_slots={available_slots} setAvailable_slots={setAvailable_slots} />
                    </div>

                    <div className="space-y-4 md:space-y-6">
                        <h3 className="text-base md:text-lg font-bold text-green-600 border-b border-slate-100 pb-2">4. Media & Details</h3>
                        <div className="grid grid-cols-1 gap-4 md:gap-6">
                            <div>
                                <TextField name="image_url" isRequired>
                                    <Label className="text-xs sm:text-sm font-semibold text-green-500 mb-1 block">Image URL</Label>
                                    <Input
                                        type="url"
                                        placeholder="https://example.com/facility-image.jpg"
                                        className="w-full h-10 sm:h-11 rounded-xl border-slate-200 focus:border-cyan-500 transition-all"
                                    />
                                    <FieldError />
                                </TextField>
                            </div>

                            <div>
                                <TextField name="description" isRequired>
                                    <Label className="text-xs sm:text-sm font-semibold text-green-500 mb-1 block">Description</Label>
                                    <TextArea
                                        placeholder="Describe the facility features, rules, and unique selling points..."
                                        className="w-full min-h-[100px] md:min-h-[120px] rounded-xl border-slate-200 focus:border-cyan-500 transition-all p-3 text-sm"
                                    />
                                    <FieldError />
                                </TextField>
                            </div>
                        </div>
                    </div>

                    <div className="pt-2 md:pt-4">
                        <Button
                            type="submit"
                            className="w-full h-11 md:h-12 rounded-xl bg-green-500 hover:bg-green-700 text-white font-semibold shadow-lg shadow-cyan-600/20 transition-all duration-200 flex items-center justify-center gap-2 text-sm md:text-base cursor-pointer"
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