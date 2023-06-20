import React from 'react'

interface Props {
    businessTitle: string,
    businessDescription: string,
    icon1: string,
    text1: string,
    description1: string,
    icon2: string,
    text2: string,
    description2: string,
    icon3: string,
    text3: string,
    description3: string,
    icon4: string,
    text4: string,
    description4: string,
    styles: React.CSSProperties;
    className: string;
}

const BusinessLevelCard: React.FC<Props> = ({
    businessTitle,
    businessDescription,
    icon1,
    text1,
    description1,
    icon2,
    text2,
    description2,
    icon3,
    text3,
    description3,
    icon4,
    text4,
    description4,
    styles,
    className
}) => {
  return (
    <div className={className} style={styles || {}}>
        <div className='space-y-8'>
            <div className='space-y-2'>
                <h1 className='text-4xl text-secondary'>{businessTitle}</h1>
                <p className='text-gray-600'>{businessDescription}</p>
            </div>
            <div className='flex items-center space-x-8'>
                <div>
                    <img src={icon1} alt="" />
                </div>
                <div className='space-y-1'>
                    <h1 className='text-lg font-bold'>{text1}</h1>
                    <p className='text-md text-gray-500'>{description1}</p>
                </div>
            </div>
            <div className='flex items-center space-x-8'>
                <div>
                    <img src={icon2} alt="" />
                </div>
                <div className='space-y-1'>
                    <h1 className='text-lg font-bold'>{text2}</h1>
                    <p className='text-md text-gray-500'>{description2}</p>
                </div>
            </div>
            <div className='flex items-center space-x-8'>
                <div>
                    <img src={icon3} alt="" />
                </div>
                <div className='space-y-1'>
                    <h1 className='text-lg font-bold'>{text3}</h1>
                    <p className='text-md text-gray-500'>{description3}</p>
                </div>
            </div>
            <div className='flex items-center space-x-8' >
                <div>
                    <img src={icon4} alt="" />
                </div>
                <div className='space-y-1'>
                    <h1 className='text-lg font-bold'>{text4}</h1>
                    <p className='text-md text-gray-500'>{description4}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BusinessLevelCard