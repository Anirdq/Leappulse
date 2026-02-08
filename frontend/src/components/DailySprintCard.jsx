import React from 'react';

const DailySprintCard = () => {
    return (
        <div className="w-full max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-4 border border-gray-100">
            <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Daily Sprint</div>
                <h1 className="block mt-1 text-lg leading-tight font-medium text-black">Speak about a memorable journey</h1>
                <p className="mt-2 text-slate-500">Practice your fluency and coherence. Record your response for 2 minutes.</p>

                <div className="mt-6 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded text-indigo-600 bg-indigo-200 uppercase last:mr-0 mr-1">
                            Part 2
                        </span>
                    </div>
                    <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 shadow-lg">
                        Start Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DailySprintCard;
