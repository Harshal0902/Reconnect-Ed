import React from "react"
import HeroImg from '../assets/hero.svg'
import FeatImg from '../assets/feat.svg'
import { Link } from 'react-router-dom';

export default function Home() {

  return (
    <div className='md:mx-28 mx-4 text-white py-10'>

      <div className='md:grid md:grid-cols-2 items-center'>
        <div className=''>
          <h1 className='text-3xl md:text-6xl'>Who we are</h1>
          <p className='text-xl py-4 tracking-wider text-justify'>Around $280 billion were spent on mental health services in 2020, but still many people were unable to get proper care due to lack of funds. Sustainable mental health care works to: Prevent mental illness, develop social capital, and foster mental wellbeing and individual, societal, and community resilience. Encourage the management of mental health by patients, employees, and caregivers. Cut back on needless activity.</p>

          <Link to="/music">
            <button className='bg-secondary py-2 px-8 rounded-md text-xl md:text-2xl'>Listen Music</button>
          </Link>

        </div>
        <div className="grid place-items-center py-4 drop-shadow-3xl shadow-black">
          <img src={HeroImg} alt="img" width="350" height="350" />
        </div>
      </div>

      <div className='md:grid md:grid-cols-2 pt-12 items-center'>
        <div className="grid place-items-center py-4 drop-shadow-3xl shadow-black">
          <img src={FeatImg} alt="img" width="350" height="350" />
        </div>
        <div className=''>
          <h1 className='text-5xl'>What else do we have</h1>
          <p className='text-xl md:text-2xl py-4 tracking-wider'> Sustainable Health is a web app where you can:
          </p>
          <ul className="text-xl">
            <li className="list-disc">Listen to music to calm your mind.</li>
            <li className="list-disc">For every donation get a chance to plant tree.</li>
            <li className="list-disc">Donate to NGO for helping people with mental illness.</li>
            <li className="list-disc">Help people suffering from Mental Health and save planet.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
