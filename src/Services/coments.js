const addComent =(User,InputContent)=>{
    const newComent= {
        date: Date.now,
        text: InputContent,
        userName: User,
    }
    return newComent;
}
export default addComent;