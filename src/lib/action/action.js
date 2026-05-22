export const postFacility = async(fullFunctionData)=>{

     const res = await fetch(`http://localhost:5000/grounds`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(fullFunctionData)
        })

        const data = await res.json()
}
export const patchFacility = async(updatedData, _id)=>{

     const res = await fetch(`http://localhost:5000/grounds/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedData)
        })

        const data = await res.json()
}
