// Imports
import React, { useState } from 'react';

// Form Function
function NewForm (props) {

    // Use-State   -in function-
     const [member, setMember] = useState({
        name: "",
        email: "",
        role: ""
    })

    // Variable Spreader   -in function-
     const handleChanges = spreader => {
        setMember({...member, [spreader.target.name]: spreader.target.value});
    };

    // Prevent Default   -in function-
    const submitMember = spreader => {
        spreader.preventDefault();
        props.addNewPerson(member);
        setMember({name: "", email: "", role: ""})
    }

    // Return The Slab   -in function-
    return (

        // Form: Labels, inputs and Section Picker   -in return-   -in function-
        <form onSubmit={submitMember}>
            <label htmlFor="name">Member Name</label>
             <input id="name" name="name" type="text" onChange={handleChanges} placeHolder="name" value={member.name}/>
           
            <label htmlFor="email">Email</label>
             <input id="email" name="email" onChange={handleChanges} placeHolder="email" value={member.email}/>
            
            <label className="labels">Role:</label>
                      {/* Selector & Options: Drop Down Menu */}
                    <select onChange= {handleChanges} name="role" >
                        <option selected >Please Select</option>
                        <option>Android Developer</option>
                        <option>Back End Developer</option>
                        <option>Data Scientist</option>
                        <option>Front End Developer</option>
                        <option>iOS Developer</option>
                        <option>UX/UI Designer</option>
                        
                    </select>
                <br/>
                                 {/* Button */}
                    <button className='berton'>Let's uh GO!</button>

        </form>
        
    ) // Return Closing tag

}; // FUNCTION CLOSING TAG


// EXPORT
export default NewForm;




