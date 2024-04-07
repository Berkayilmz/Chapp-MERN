import React, { useState } from 'react'
import GenderCheckBox from './GenderCheckBox'
import { Link } from 'react-router-dom';

const Signup = () => {

    const [inputs, setInputs] = useState({
        fullName: '',
        userName: '',
        password: '',
        confirmPassword: '',
        gender: ''
    })

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(inputs);
    }

    const handleCheckboxChange=(gender)=>{
        setInputs({...inputs,gender})
    }

    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
                <h1 className="text-3xl font-semibold text-center text-gray-300">
                    SIGNUP
                    <span className='text-orange-500'>Chapp</span>
                </h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text">Full Name</span>
                        </label>
                        <input
                            type="text" placeholder='Enter Full Name' className='w-full input input-bordered h-10'
                            value={inputs.fullName}
                            onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
                        />
                    </div>
                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text">Username</span>
                        </label>
                        <input
                            type="text" placeholder='Enter Username' className='w-full input input-bordered h-10'
                            value={inputs.userName}
                            onChange={(e) => setInputs({ ...inputs, userName: e.target.value })}
                        />
                    </div>
                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text">Password</span>
                        </label>
                        <input
                            type="password" placeholder='Enter Password' className='w-full input input-bordered h-10'
                            value={inputs.password}
                            onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
                        />
                    </div>
                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text">Confirm Password</span>
                        </label>
                        <input
                            type="password" placeholder='Enter Again Password' className='w-full input input-bordered h-10'
                            value={inputs.confirmPassword}
                            onChange={(e)=>setInputs({...inputs,confirmPassword:e.target.value})}
                        />
                    </div>
                    <GenderCheckBox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender} />
                    <Link to="/login" className='text-sm hover:underline hover:text-orange-600 mt-1 inline-block'>
                        {"Already"} have an account?
                    </Link>
                    <div>
                        <button className='btn btn-block btn-sm mt-2'>Signup</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup

//STARTER CODE FOT THIS FILE

// import React from 'react'
// import GenderCheckBox from './GenderCheckBox'

// const Signup = () => {
//     return (
//         <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//             <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
//                 <h1 className="text-3xl font-semibold text-center text-gray-300">
//                     SIGNUP
//                     <span className='text-orange-500'>Chapp</span>
//                 </h1>
//                 <form>
//                     <div>
//                         <label className="label p-2">
//                             <span className="text-base label-text">Full Name</span>
//                         </label>
//                         <input type="text" placeholder='Enter Full Name' className='w-full input input-bordered h-10' />
//                     </div>
//                     <div>
//                         <label className="label p-2">
//                             <span className="text-base label-text">Username</span>
//                         </label>
//                         <input type="text" placeholder='Enter Username' className='w-full input input-bordered h-10' />
//                     </div>
//                     <div>
//                         <label className="label p-2">
//                             <span className="text-base label-text">Password</span>
//                         </label>
//                         <input type="password" placeholder='Enter Password' className='w-full input input-bordered h-10' />
//                     </div>
//                     <div>
//                         <label className="label p-2">
//                             <span className="text-base label-text">Confirm Password</span>
//                         </label>
//                         <input type="password" placeholder='Enter Again Password' className='w-full input input-bordered h-10' />
//                     </div>
//                     <GenderCheckBox />
//                     <a href="#" className='text-sm hover:underline hover:text-orange-600 mt-1 inline-block'>
//                         {"Already"} have an account?
//                     </a>
//                     <div>
//                         <button className='btn btn-block btn-sm mt-2'>Signup</button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     )
// }

// export default Signup