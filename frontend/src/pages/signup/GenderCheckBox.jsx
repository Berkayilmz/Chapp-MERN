import React from 'react'

const GenderCheckBox = ({ onCheckboxChange, selectedGender }) => {
    return (
        <div className='flex mt-1'>
            <div className='form-control'>
                <label className={`label gap-2 cursor-pointer ${selectedGender === "male" ? "selecter" : ""}`}>
                    <span className='label-text'>Male</span>
                    <input type="checkbox" className='checkbox border-slate-900'
                        checked={selectedGender === "male"}
                        onChange={() => onCheckboxChange("male")}
                    />
                </label>
            </div>
            <div>
                <div className='form-control'>
                    <label className={`label gap-2 cursor-pointer ${selectedGender === "female" ? "selector" : ""}`}>
                        <span className='label-text'>Female</span>
                        <input type="checkbox" className='checkbox border-slate-900'
                            checked={selectedGender === "female"}
                            onChange={() => onCheckboxChange("female")}
                        />
                    </label>
                </div>
            </div>
        </div>
    )
}

export default GenderCheckBox


//STARTER CODE THİS FİLE
// import React from 'react'

// const GenderCheckBox = () => {
//     return (
//         <div className='flex mt-1'>
//             <div className='form-control'>
//                 <label className={`label gap-2 cursor-pointer`}>
//                     <span className='label-text'>Male</span>
//                     <input type="checkbox" className='checkbox border-slate-900' />
//                 </label>
//             </div>
//             <div>
//                 <div className='form-control'>
//                     <label className={`label gap-2 cursor-pointer`}>
//                         <span className='label-text'>Female</span>
//                         <input type="checkbox" className='checkbox border-slate-900' />
//                     </label>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default GenderCheckBox