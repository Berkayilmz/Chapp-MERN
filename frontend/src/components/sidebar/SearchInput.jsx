import React from 'react'
import { BiSearchAlt } from "react-icons/bi";

const SearchInput = () => {
    return (
        <form className='flex items-center gap-2 '>
            <input type="text" placeholder='Search...' className='input input-bordered rounded-full' />
            <button type='submit' className='btn btn-circle bg-orange-400 text-white'>
                <BiSearchAlt className='w-6 h-6 outline-none'/>
            </button>
        </form>
    )
}

export default SearchInput

//Starter code this file

// import React from 'react'
// import { BiSearchAlt } from "react-icons/bi";

// const SearchInput = () => {
//     return (
//         <form className='flex items-center gap-2 '>
//             <input type="text" placeholder='Search...' className='input input-bordered rounded-full' />
//             <button type='submit' className='btn btn-circle bg-orange-400 text-white'>
//                 <BiSearchAlt className='w-6 h-6 outline-none'/>
//             </button>
//         </form>
//     )
// }

// export default SearchInput