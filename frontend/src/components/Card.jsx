import SamuraiImage from '../assets/images/samurai-sunset.jpg'

function Card({
    subject='Add you subject',
    duration = '0:00 mins'
}) {
    return (
        <div className='w-70 border-2 border-amber-200 rounded-2xl overflow-clip'>
            <img src={SamuraiImage} alt="samurai" />
            <div className='p-2'>
                <div className='font-bold text-white text-left'>{subject}</div>
                <div className=' text-white '>{duration}</div>
            </div>
        </div>
    )
}

export default Card