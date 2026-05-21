"use client"

import { FieldError, Input, Label, TextField, Select, ListBox, TextArea, Button, Card } from "@heroui/react";



function AddFacility() {
    const onSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const destination = Object.fromEntries(formData.entries())

        console.log(destination)

        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/destination`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(destination)
        })

        const data = await res.json()


    }
    return (
        <div className="max-w-4xl mx-auto my-12 px-4">
            {/* Page Title */}
            <div className="mb-8">
                <h2 className="text-3xl font-extrabold  tracking-tight">Add New Facility</h2>
                <p className="text-sm mt-1">Fill in the details below to configure and launch a new sports or event facility.</p>
            </div>

            <Card className="bg-white border border-slate-100 shadow-xl rounded-3xl overflow-hidden">
                <form onSubmit={onSubmit} className="p-8 sm:p-10 space-y-10">

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
                        </div>
                    </div>

                    {/* Section 3: Dynamic Time Slots */}
                    <div className="space-y-4 bg-green-50 p-5 rounded-2xl border border-slate-100">
                        {/* Label & Add Button Row */}
                        <div className="flex items-center justify-between px-1">
                            <label className="text-sm font-bold text-green-600 tracking-wide flex items-center gap-2">
                                Configure Open Time Slots <span className="text-red-500">*</span>
                            </label>

                            <button
                                type="button"
                                className="text-xs font-bold text-emerald-600 hover:text-emerald-700 bg-emerald-50 hover:bg-emerald-100 px-4 py-2 rounded-xl transition-all border border-emerald-200/50 shadow-sm"
                            >
                                + Add Slot
                            </button>
                        </div>

                        {/* Slots Wrapper */}
                        <div className="space-y-3">
                            {/* Single Dynamic Row Template */}
                            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 bg-white p-4 border border-green-200 rounded-2xl shadow-sm transition-all hover:border-slate-300">

                                {/* Slot Number Indicator */}
                                <div className="flex items-center justify-center bg-slate-50 border border-slate-100 rounded-xl px-3 py-1.5 sm:py-2 text-xs font-bold text-slate-400 min-w-[40px]">
                                    #1
                                </div>

                                {/* Start Time Container */}
                                <div className="flex-1 flex flex-col gap-1">
                                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider pl-1 sm:hidden">Start Time</span>
                                    <input
                                        type="time"
                                        defaultValue="06:00"
                                        className="w-full h-11 px-3 bg-slate-50/50 border border-slate-200 text-slate-700 text-sm rounded-xl focus:outline-none focus:border-emerald-500 focus:bg-white transition-all font-medium"
                                    />
                                </div>

                                {/* To Separator */}
                                <div className="hidden sm:flex items-center justify-center text-xs font-semibold text-slate-400 px-1">
                                    to
                                </div>

                                {/* End Time Container */}
                                <div className="flex-1 flex flex-col gap-1">
                                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider pl-1 sm:hidden">End Time</span>
                                    <input
                                        type="time"
                                        defaultValue="08:00"
                                        className="w-full h-11 px-3 bg-slate-50/50 border border-slate-200 text-slate-700 text-sm rounded-xl focus:outline-none focus:border-emerald-500 focus:bg-white transition-all font-medium"
                                    />
                                </div>

                                {/* Type Dropdown Container */}
                                <div className="w-full sm:w-36 flex flex-col gap-1">
                                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider pl-1 sm:hidden">Type</span>
                                    <select className="w-full h-11 px-3 bg-slate-50/50 border border-slate-200 text-slate-600 text-sm rounded-xl focus:outline-none focus:border-emerald-500 focus:bg-white transition-all font-medium cursor-pointer appearance-none bg-no-repeat bg-[right_12px_center]">
                                        <option>Regular</option>
                                        <option>Peak Hour</option>
                                    </select>
                                </div>

                                {/* Remove Slot Action */}
                                <button
                                    type="button"
                                    className="h-11 sm:h-11 px-4 sm:px-3 bg-red-50 hover:bg-red-100 sm:bg-transparent text-red-500 sm:text-slate-400 sm:hover:text-red-500 font-medium text-sm rounded-xl transition-all flex items-center justify-center border border-red-100 sm:border-none shadow-sm sm:shadow-none"
                                    title="Remove Slot"
                                >
                                    <span className="sm:hidden text-xs font-bold mr-2">Remove Slot</span>
                                    <span className="text-base leading-none">✕</span>
                                </button>

                            </div>
                        </div>
                    </div>

                    {/* Section 4: Media & Description */}
                    <div className="space-y-6">
                        <h3 className="text-lg font-bold text-green-600 border-b border-slate-100 pb-2">4. Media & Details</h3>
                        <div className="grid grid-cols-1 gap-6">
                            <TextField name="imageUrl" isRequired>
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
