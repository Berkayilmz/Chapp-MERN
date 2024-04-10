import React, { useState } from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'
import NoChatSelected from './NoChatSelected'

const MessageContainer = () => {
    const [noChatSelected, setNoChatSelected] = useState(false);
    return (
        <div className='md:min-w-[450px] flex flex-col'>
            {noChatSelected ? <NoChatSelected /> :
                (<>
                    {/* HEADER */}
                    <div className="bg-slate-500 px-4 py-2 mb-2">
                        <span className='label-text'>To:</span>{" "}
                        <span className='text-grat-900 font-bold'>Berkay Yılmaz</span>
                    </div>

                    <Messages />
                    <MessageInput />
                </>)
            }
        </div>
    )
}

export default MessageContainer


//Starter codes

// import React from 'react'
// import Messages from './Messages'
// import MessageInput from './MessageInput'

// const MessageContainer = () => {
//   return (
//     <div className='md:min-w-[450px] flex flex-col'>
//         <>
//             {/* HEADER */}
//             <div className="bg-slate-500 px-4 py-2 mb-2">
//                 <span className='label-text'>To:</span>{" "}
//                 <span className='text-grat-900 font-bold'>Berkay Yılmaz</span>
//             </div>

//             <Messages/>
//             <MessageInput/>
//         </>
//     </div>
//   )
// }

// export default MessageContainer