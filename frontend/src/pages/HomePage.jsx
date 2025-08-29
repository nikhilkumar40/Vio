import React from 'react'
import { Card } from '../components'

function HomePage() {

  const videos = [
    { subject: 'Ninjas in a Nija wars', duration: "15:00 mins" },
    { subject: 'Samurai facedowns', duration: "20:00 mins" },
    { subject: 'Demon Slayer Final Trailer', duration: "7:00 mins" },
    { subject: 'Miyamoto Mushashi: Documentry', duration: "160:00 mins" }
  ]

  return (
    <div>
      <div className='flex justify-evenly items-center gap-2 w-6xl m-auto mt-4'>
        {
          videos.map(vid => (
            <div key={vid.subject}>
              <Card subject={vid.subject} duration={vid.duration} />
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default HomePage