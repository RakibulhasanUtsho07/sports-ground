"use client";

import { AlertDialog, Button } from "@heroui/react";

export function BookingDialog() {
    return (
        <AlertDialog>
            
            <AlertDialog.Trigger
                type="button"
                className="px-5 flex items-center justify-center h-10 md:w-full bg-red-50 hover:bg-red-100 active:bg-red-200 text-red-600 font-bold text-xs rounded-xl transition-all duration-200 border border-red-200/40 active:scale-95 cursor-pointer"
            >
                Cancel Booking
            </AlertDialog.Trigger>

            <AlertDialog.Backdrop>
                <AlertDialog.Container>
                    
                    <AlertDialog.Dialog className="sm:max-w-[420px] p-6 bg-white rounded-3xl shadow-xl border border-slate-100/80">
                        <AlertDialog.CloseTrigger className="text-slate-400 hover:text-slate-600 transition-colors" />

                        {/* Header Section */}
                        <AlertDialog.Header className="flex items-start gap-3">
                            <AlertDialog.Icon status="danger" className="mt-0.5 flex-shrink-0" />
                            <AlertDialog.Heading className="text-lg font-bold text-slate-800 tracking-tight">
                                Cancel this booking?
                            </AlertDialog.Heading>
                        </AlertDialog.Header>

                        
                        <AlertDialog.Body className="mt-3">
                            <p className="text-slate-600 text-sm leading-relaxed">
                                Are you sure you want to cancel your slot for <strong className="text-slate-900">{name || "this turf"}</strong>?
                                This time slot will be instantly made available for other players. This action cannot be undone.
                            </p>
                        </AlertDialog.Body>

                        {/* Footer Buttons */}
                        <AlertDialog.Footer className="mt-6 flex flex-col-reverse sm:flex-row justify-end gap-2">
                            
                            <Button
                                slot="close"
                                variant="tertiary"
                                className="w-full sm:w-auto px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-sm rounded-xl transition-all"
                            >
                                No, Keep it
                            </Button>

                           
                            <Button
                                slot="close"
                                variant="danger"
                                className="w-full sm:w-auto px-4 py-2 bg-red-600 hover:bg-red-500 text-white font-semibold text-sm rounded-xl transition-all shadow-lg shadow-red-600/10"
                                onClick={() => {
                                   
                                    if (typeof handleCancel === 'function') {
                                        handleCancel(userid);
                                    }
                                }}
                            >
                                Yes, Cancel Booking
                            </Button>
                        </AlertDialog.Footer>
                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>
    );
}