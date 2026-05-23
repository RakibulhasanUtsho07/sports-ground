export const getGrounds = async()=>{
    const res = await fetch("http://localhost:5000/grounds")
    const data = res.json()
    return data
}
export const getGroundDetails = async(id)=>{
    const res = await fetch(`http://localhost:5000/grounds/${id}`)
    const data = res.json()
    return data
}
export const bookingGrounds = async()=>{
    const res = await fetch("http://localhost:5000/bookings")
    const data = res.json()
    return data
}
export const deleteBookingData = async(id)=>{
    console.log(id,"id")

     try{
        const res = await fetch(`http://localhost:5000/bookings/${id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            },
           
        });
        if (!res.ok) {
            const errorText = await res.text(); 
            console.error("Server raw response:", errorText);
            throw new Error(`Server returned status ${res.status}`);
        }
         const data = await res.json()
        return data
     } catch(error){
        console.error("Error in deleteBookingData function:", error);
        throw error;
     }

       
        
}