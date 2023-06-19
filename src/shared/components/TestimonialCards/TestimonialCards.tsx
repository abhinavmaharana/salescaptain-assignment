import React from 'react'

interface Props {
    clientImg: string;
    clientName: string;
    clientDesignation: string;
    clientMessage: string;
    clientProfit: string;
    clientProfitMessage:string;
    styles: React.CSSProperties;
    className: string;
}

const TestimonialCards: React.FC<Props> = ({
    clientImg,
    clientName,
    clientDesignation,
    clientMessage,
    clientProfit,
    clientProfitMessage,
    styles,
    className
}) => {
  return (
    <div className={className} style={styles || {}}>
        <div className='flex space-x-4 items-center'>
            <div>
                <img className='w-24' src={clientImg} alt='' />
            </div>
            <div className='space-y-2'>
                <h1 className='text-2xl'>{clientName}</h1>
                <p className='text-lg text-gray-400'>{clientDesignation}</p>
            </div>
        </div>
        <div className='space-y-12'>
            <h1 className='text-center text-2xl'>{clientMessage}</h1>
            <div className='text-center space-y-2'>
                <h1 className='text-8xl font-bold'>{clientProfit}</h1>
                <p className='text-2xl'>{clientProfitMessage}</p>
            </div>
        </div>
        <div>
            <h2 className='text-xl'>Products used:</h2>
            <div className='grid grid-cols-3 gap-2 mt-5 text-center'>
                <p className='bg-lightBlue text-black py-4 px-6 rounded-xl'>Messaging</p>
                <p className='bg-lightBlue text-black py-4 px-6 rounded-xl'>Webchat</p>
                <p className='bg-lightBlue text-black py-4 px-6 rounded-xl'>Reviews</p>
                <p className='bg-lightBlue text-black py-4 px-6 rounded-xl'>Listing</p>
                <p className='bg-lightBlue text-black py-4 px-6 rounded-xl'>Referrals</p>
            </div>
        </div>
    </div>
  )
}

export default TestimonialCards