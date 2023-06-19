import TestimonialCards from '../../../shared/components/TestimonialCards/TestimonialCards'

function Testimonial() {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 p-8 justify-center'>
        <TestimonialCards 
            clientImg='https://assets.website-files.com/62a83ee090ccdee139c347e5/62e0341ce2debac5188bfaa5_Mask%20Group%20174.webp'
            clientName='Simon Page'
            clientDesignation='Owner, Mamagato Restaurant'
            clientMessage='“In 2022 so far we are hitting our best months in customers & revenue even in an economic downturn"'
            clientProfit='40%'
            clientProfitMessage='Average net profit
            increase'
            styles={{}}
            className='p-8 outline outline-gray-200 h-auto w-auto rounded-lg space-y-12'
        />
        <TestimonialCards 
            clientImg='https://assets.website-files.com/62a83ee090ccdee139c347e5/62e0341c025451d2b6d54b11_xZ4wg2Xj-2.webp'
            clientName='Daniel Wilson'
            clientDesignation='Marketing head, The Air Conditioning Company'
            clientMessage='“Our rating improved from 3.3 to 4.6 & reviews are up 200%, we are getting more leads from Google”'
            clientProfit='200%'
            clientProfitMessage='New review growth'
            styles={{}}
            className='p-8 outline outline-gray-200 h-auto w-auto rounded-lg space-y-12'
        />
        <TestimonialCards 
            clientImg='https://assets.website-files.com/62a83ee090ccdee139c347e5/62ae22ec3263c7de8393966d_photo-1493666438817-866a91353ca9.webp'
            clientName='Debbie Rose'
            clientDesignation='Owner, Jiva luxury Spa'
            clientMessage='“Effective text & email marketing campaign on SalesCaptain helped us make additional $150k in two weeks”'
            clientProfit='$150k'
            clientProfitMessage='Generated with marketing campaign'
            styles={{}}
            className='p-8 outline outline-gray-200 h-auto w-auto rounded-lg space-y-12'
        />
    </div>
  )
}

export default Testimonial