import { star } from '../assets/icons';

const ReviewCard = ({
    imgURL,
    customerName,
    rating,
    feedback
}) => {
  return (
    <div className="flex flex-col items-center justify-center">
        <img
            src={imgURL}
            alt={customerName}
            height={24}
            width={24}
            className="rounded-full w-24 h-24 object-cover"
        />
        <p className='mt-6 max-w-sm text-center info-text'>{feedback}</p>
        <div className='flex justify-center items-center mt-3 gap-2.5'>
            <img src={star} alt="star" width={24} height={24} className="object-container m-0"/>
            <p className='text-xl font-montserrat text-slate-gray'>({rating})</p>
        </div>
        <h3 className='mt-1 font-palanquin text-3xl text-center font-bold'>{customerName}</h3>
    </div>
  )
}

export default ReviewCard
