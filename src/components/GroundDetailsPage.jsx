import Image from 'next/image'
import React from 'react'
import { CiLocationOn } from 'react-icons/ci'
import { IoPersonOutline } from 'react-icons/io5'
import { Check } from "@gravity-ui/icons";
import {  FieldError, Form, Input, Label, TextField } from "@heroui/react";
import { DateFieldBar } from './DateField';
import { DropdownBar } from './DropdownBar';



function GroundDetailsPage({ groundDetails }) {
    const { name, image_url, booking_count, owner_email, description, available_slots, capacity, price_per_hour, facility_type, location, } = groundDetails
    console.log(groundDetails, "groundDetails")
    return (
       <div className="container mx-auto my-12 px-4 max-w-7xl">
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl">
                
                
                <div className="lg:col-span-2 p-6 md:p-8 space-y-6 flex flex-col justify-between">
                    <div className="space-y-6">
                       
                        <div className="relative w-full h-[250px] md:h-[400px] rounded-2xl overflow-hidden shadow-inner bg-slate-950">
                            <Image 
                                className="object-cover hover:scale-102 transition-transform duration-500" 
                                src={image_url} 
                                fill
                                priority
                                alt={name} 
                            />
                            <span className="absolute top-4 right-4 bg-slate-900/80 backdrop-blur-md text-emerald-400 border border-slate-700/50 text-xs font-semibold px-3 py-1.5 rounded-full uppercase tracking-wider">
                                {facility_type}
                            </span>
                        </div>

                       
                        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 border-b border-slate-800 pb-6">
                            <div className="space-y-2">
                                <h3 className="text-3xl font-extrabold text-white tracking-tight">{name}</h3>
                                <p className="text-slate-400 font-medium flex items-center gap-1.5 text-base">
                                    <CiLocationOn className="text-xl text-emerald-500 stroke-[0.5]" />
                                    <span>{location}</span>
                                </p>
                            </div>
                            <div className="bg-slate-950/40 border border-slate-800 rounded-2xl px-5 py-3 text-left sm:text-right self-start sm:self-auto min-w-[140px]">
                                <span className="block text-xs font-medium text-slate-500 uppercase tracking-wider">Rate</span>
                                <div className="flex items-baseline gap-1 mt-0.5">
                                    <span className="text-3xl font-black text-emerald-400">${price_per_hour}</span>
                                    <span className="text-sm font-medium text-slate-400">/hr</span>
                                </div>
                            </div>
                        </div>

                       
                        <div className="space-y-2">
                            <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">About this space</h4>
                            <p className="text-slate-300 leading-relaxed text-base">{description}</p>
                        </div>
                    </div>

                    
                    <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-slate-800/60 mt-6">
                        
                        <div className="inline-flex items-center gap-3 px-4 py-2.5 bg-slate-800/30 border border-slate-800 rounded-xl">
                            <IoPersonOutline className="text-lg text-emerald-400" />
                            <div className="flex flex-col">
                                <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider leading-none">Max Capacity</span>
                                <span className="text-sm font-bold text-slate-200 mt-0.5">{capacity} guests</span>
                            </div>
                        </div>

                        
                        <div className="flex items-center gap-3 px-4 py-2.5 bg-emerald-500/5 border border-emerald-500/10 rounded-xl">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                            </span>
                            <p className="text-sm font-medium text-slate-400">
                                Already <span className="text-emerald-400 font-bold">{booking_count}</span> {booking_count === 1 ? 'person has' : 'people have'} booked this ground
                            </p>
                        </div>
                    </div>
                </div>

                
                <div className="bg-slate-950/50 lg:border-l border-slate-800 p-6 md:p-8 flex flex-col justify-between">
                    <Form className="flex flex-col gap-5 w-full">
                        <div>
                            <h3 className="text-xl font-bold text-white tracking-tight mb-1">Reserve Space</h3>
                            <p className="text-xs text-slate-500">Fill in your scheduling slots below.</p>
                        </div>

                        
                        <TextField isRequired name="name" isReadOnly className="flex flex-col gap-1.5">
                            <Label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Selected Facility</Label>
                            <Input
                                value={name}
                                type="text"
                                readOnly
                                className="w-full px-4 py-3 bg-slate-900 border border-slate-800 text-slate-300 h-12 text-sm rounded-xl focus:outline-none font-medium opacity-80 cursor-not-allowed"
                            />
                            <FieldError className="text-xs text-red-400 mt-1" />
                        </TextField>

                        
                        <TextField isRequired name="time" type="time" className="flex flex-col gap-1.5">
                            <Label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Start Time</Label>
                            <DropdownBar available_slots={available_slots} />
                            <FieldError className="text-xs text-red-400 mt-1" />
                        </TextField>

                        
                        <TextField isRequired name="date" type="date" className="flex flex-col gap-1.5">
                            <Label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Target Date</Label>
                            <DateFieldBar />
                            <FieldError className="text-xs text-red-400 mt-1" />
                        </TextField>

                       
                        <TextField isRequired name="duration" className="flex flex-col gap-1.5">
                            <Label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Duration (Hours)</Label>
                            <Input
                                type="number"
                                min="1"
                                placeholder="e.g. 2"
                                className="w-full px-4 py-3 bg-slate-900 border border-slate-800 text-white h-12 text-sm rounded-xl focus:outline-none focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/10 transition-all hover:bg-slate-900/80"
                            />
                            <FieldError className="text-xs text-red-400 mt-1" />
                        </TextField>

                       
                        <div className="mt-4 p-4 bg-slate-900/80 border border-slate-800 rounded-2xl space-y-3">
                            <div className="flex justify-between text-xs text-slate-400 font-medium">
                                <span>Base Hourly Rate</span>
                                <span>$80.00</span>
                            </div>
                            <div className="flex justify-between text-xs text-slate-400 font-medium">
                                <span>Subtotal Estimate</span>
                                <span>$890.00</span>
                            </div>
                            <hr className="border-slate-800 my-1" />
                            <div className="flex justify-between items-center">
                                <h4 className="text-sm font-bold text-slate-200">Total Price</h4>
                                <h4 className="text-xl font-black text-emerald-400">$890.00</h4>
                            </div>
                        </div>

                       
                        <button type="submit" className="w-full bg-emerald-500 hover:bg-emerald-400 active:bg-emerald-600 text-slate-950 font-bold tracking-wide h-12 text-sm rounded-xl transition-all duration-200 shadow-lg shadow-emerald-500/10 hover:shadow-emerald-500/20 mt-2">
                            Continue Booking
                        </button>
                    </Form>
                </div>

            </div>
        </div>
    )
}

export default GroundDetailsPage
