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