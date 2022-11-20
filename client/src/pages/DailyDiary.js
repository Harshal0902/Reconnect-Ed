import React, { useState, useEffect } from 'react';
import {Cohere} from 'cohere-ai'

import Sentiment from 'sentiment';
const sentiment = new Sentiment();

export default function DailyDiary() {

    const [phrase, setPhrase] = useState('');
    const [sentimentScore, setSentimentScore] = useState(null);

    useEffect(() => {
        setSentimentScore(sentiment.analyze(phrase));
    }, [phrase]);


    return (
        <div className=''>
            <div className='grid place-items-center'>
                <h1 className='text-5xl text-white'>Daily Diary</h1>
                <div className='bg-secondary w-48 h-1 mt-2'></div>
            </div>

            <div className='grid place-items-center py-10 text-2xl'>
                <textarea className='w-96 h-[28rem] text-2xl border-none rounded-xl p-2' value={phrase} onChange={e => setPhrase(e.target.value)} />
                {
                    sentimentScore ?
                        sentimentScore.score === 0 ?
                            <div className='text-2xl py-2 text-white text-center'>Neutral</div>
                            :
                            sentimentScore.score > 0 ?
                                <div className='text-2xl py-2 text-white text-center'>Excited</div>
                                :
                                <div className='text-2xl py-2 text-white text-center'>Depressed</div>

                        : ''
                }
            </div>
        </div>
    )
}
