import React, { useState } from "react";

// export default function Form() {
//     const [liveName, setliveName] = useState();
//     const [name, setname] = useState();
//     const [liveLastName, setliveLastName] = useState();
//     const [lastName, setlastName] = useState();

//     const onSubmit = (event) => {
//         event.preventDefault();
//         setname(liveName);
//         setlastName(liveLastName)

//     }
//     const handleOnChange = (event) => {
//         setliveName(event.target.value)
//     }
//     const handleOnChange_lastName = (event) => {
//         setliveLastName(event.target.value)
//     }
//     return (
//         <div>
//             <form onSubmit={onSubmit}>
//                 <div>
//                     <h1> Hello {name} {lastName}</h1>
//                     <input
//                         type="text"
//                         placeholder="Enter First Your Name"
//                         onChange={handleOnChange}
//                         value={name}
//                     />
//                     <input
//                         type="text"
//                         placeholder="Enter Your Last Name"
//                         onChange={handleOnChange_lastName}
//                         value={liveLastName}
//                     />
//                     <button type='submit'>Submit</button>
//                 </div>
//             </form>
//         </div>
//     );
// }



// export default function Form() {
//     const [fullName, setfullName] = useState({
//         fName: '',
//         lName: '',
//         email: '',
//         number: ''
//     })
//     const handleOnSubmit = (event) => {
//         event.preventDefault();
//         alert("success submit")
//     }

//     const handleOnChange = (event) => {
//         let { value, name } = event.target
//         setfullName((prev) => {
//             let data = {
//                 fName: prev.fName,
//                 lName: prev.lName,
//                 email: prev.email,
//                 number: prev.number
//             }
//             if (name === 'fName')
//                 return { ...data, fName: value, }
//             else if (name === 'lName')
//                 return { ...data, lName: value, }
//             else if (name === 'email')
//                 return { ...data, email: value, }
//             else if (name === 'number')
//                 return { ...data, number: value }
//         })
//     }
//     return (
//         <div>
//             <form onSubmit={handleOnSubmit}>
//                 <div>
//                     <h1> Hello {fullName.fName} {fullName.lName}</h1>
//                     <p> {fullName.email}</p>
//                     <p> {fullName.number}</p>

//                     <input type='text' name='fName' placeholder='Enter Your First Name' onChange={handleOnChange}
//                         autoComplete="of"
//                         value={fullName.fname}
//                     />
//                     <input type='text' name='lName' placeholder='Enter Your Last Name' onChange={handleOnChange} autoComplete="of"
//                         value={fullName.lName}
//                     />
//                     <input type='email' name='email' placeholder='Enter Your Email' onChange={handleOnChange} autoComplete="of"
//                         value={fullName.email}
//                     />
//                     <input type='number' name='number' placeholder='Enter Your Mobile Number ' onChange={handleOnChange}
//                         value={fullName.number}
//                     />
//                     <button type='submit'> Submit</button>
//                 </div>
//             </form>
//         </div>
//     )
// }



export default function Form() {
    const [fullName, setfullName] = useState({
        fName: '',
        lName: '',
        email: '',
        number: ''
    })
    const handleOnSubmit = (event) => {
        event.preventDefault();
        alert("success submit")
    }

    const handleOnChange = (event) => {
        let { value, name } = event.target
        setfullName((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })
    }
    return (
        <div>
            <form onSubmit={handleOnSubmit}>
                <div>
                    <h1> Hello {fullName.fName} {fullName.lName}</h1>
                    <p> {fullName.email}</p>
                    <p> {fullName.number}</p>

                    <input type='text' name='fName' placeholder='Enter Your First Name' onChange={handleOnChange}
                        autoComplete="of"
                        value={fullName.fname}
                    />
                    <input type='text' name='lName' placeholder='Enter Your Last Name' onChange={handleOnChange} autoComplete="of"
                        value={fullName.lName}
                    />
                    <input type='email' name='email' placeholder='Enter Your Email' onChange={handleOnChange} autoComplete="of"
                        value={fullName.email}
                    />
                    <input type='number' name='number' placeholder='Enter Your Mobile Number ' onChange={handleOnChange}
                        value={fullName.number}
                    />
                    <button type='submit'> Submit</button>
                </div>
            </form>
        </div>
    )
}