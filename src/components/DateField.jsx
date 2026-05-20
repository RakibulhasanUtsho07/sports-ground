"use client";

import { DateField, Label } from "@heroui/react";

export function DateFieldBar() {
    return (
        <DateField
            className="w-full flex flex-col gap-1.5 "
            name="date"
            isRequired
        >
            {/* Modern Label */}
            <Label className="text-sm font-medium text-green-600 block">
                Select Date
            </Label>

            {/* Custom Styled Date Field Group wrapper */}
            <DateField.Group className="hover:bg-green-100 border flex items-center gap-1 w-full px-4 py-3 h-12 text-base rounded-xl bg-white text-slate-900 border border-slate-300 focus-within:border-emerald-500 focus-within:ring-1 focus-within:ring-emerald-500 transition-all shadow-sm">
                <DateField.Input className="flex items-center gap-0.5 w-full bg-transparent outline-none select-none">
                    {(segment) => (
                        <DateField.Segment
                            segment={segment}
                            className="px-0.5 rounded outline-none text-slate-800 placeholder-slate-400 data-[placeholder]:text-slate-400 focus:bg-emerald-500 focus:text-white transition-colors"
                        />
                    )}
                </DateField.Input>
            </DateField.Group>
        </DateField>
    );
}