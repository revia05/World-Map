export const Contact=()=>{
    const handleInput=(formData)=>{
        const dataForm=Object.fromEntries(formData.entries());
        console.log(dataForm);
    }
    return(
        <div className="field">
            <h1 className="hare">
                Contact Us
            </h1>
            <form action={handleInput} className="rem">
            <input type="text" name="name" id="naam" placeholder="Enter Your Name" className="ham"/>
            <input type="email" name="email" id="email" placeholder="Enter Your Email" className="ham"/>
            <textarea name="message" id="mes" cols="30" rows="10" placeholder="Enter Your Message"></textarea>
            <button type="submit" className="send" >Send</button>
            </form>
        </div>
    )
}