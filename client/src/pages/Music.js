import React from 'react'

export default function Music() {
    return (
        <div>
            <div className='grid place-items-center text-white'>
                <h1 className='text-5xl'>Music</h1>
                <div className='bg-secondary w-36 h-1'></div>
            </div>

            <div className="flex flex-wrap flex-col-2 justify-around w-full px-16 py-8 gap-4 gap-y-6">

                <div className="shadow-2xl my-4 rounded-3xl bg-white items-center text-center cursor-pointer transition transform hover:scale-110 duration-500 drop-shadow-3xl">
                    <div className="rounded-3xl">
                        <iframe src="https://www.youtube.com/embed/FTqrQsSIKR0" alt="" width="400" height="300" className="rounded-3xl bg-white" allowFullScreen title='music' />
                    </div>
                    <div className="text-2xl pb-1 text-black font-bold tracking-wide">Inner Peace</div>
                </div>

                <div className="shadow-2xl my-4 rounded-3xl bg-white items-center text-center cursor-pointer transition transform hover:scale-110 duration-500 drop-shadow-3xl">
                    <div className="rounded-3xl">
                        <iframe src="https://www.youtube.com/embed/YmHKXm5YEdc" alt="" width="400" height="300" className="rounded-3xl bg-white" allowFullScreen title='music' />
                    </div>
                    <div className="text-2xl pb-1 text-black font-bold tracking-wide">Lo Fi</div>
                </div>

                <div className="shadow-2xl my-4 rounded-3xl bg-white items-center text-center cursor-pointer transition transform hover:scale-110 duration-500 drop-shadow-3xl">
                    <div className="rounded-3xl">
                        <iframe src="https://www.youtube.com/embed/bP9gMpl1gyQ" alt="" width="400" height="300" className="rounded-3xl bg-white" allowFullScreen title='music' />
                    </div>
                    <div className="text-2xl pb-1 text-black font-bold tracking-wide">Relaxing Sleep</div>
                </div>

                <div className="shadow-2xl my-4 rounded-3xl bg-white items-center text-center cursor-pointer transition transform hover:scale-110 duration-500 drop-shadow-3xl">
                    <div className="rounded-3xl">
                        <iframe src="https://www.youtube.com/embed/mXw2aAforhg" alt="" width="400" height="300" className="rounded-3xl bg-white" allowFullScreen title='music' />
                    </div>
                    <div className="text-2xl pb-1 text-black font-bold tracking-wide">Brain Calming</div>
                </div>

                <div className="shadow-2xl my-4 rounded-3xl bg-white items-center text-center cursor-pointer transition transform hover:scale-110 duration-500 drop-shadow-3xl">
                    <div className="rounded-3xl">
                        <iframe src="https://www.youtube.com/embed/aIIEI33EUqI" alt="" width="400" height="300" className="rounded-3xl bg-white" allowFullScreen title='music' />
                    </div>
                    <div className="text-2xl pb-1 text-black font-bold tracking-wide">Meditation</div>
                </div>

            </div>
        </div>
    )
}
