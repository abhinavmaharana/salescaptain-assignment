import BusinessLevelCard from "../../../shared/components/BusinessLevelCard/BusinessLevelCard"

function BusinessLevel() {
  return (
    <div className="justify-center items-center text-center space-y-4 mt-8">
        <h1 className="text-6xl">Tools to take your business to next level</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 p-8 justify-center">
            <BusinessLevelCard 
                businessTitle="Attract"
                businessDescription="Attract more customers"
                icon1="https://assets.website-files.com/62a83ee090ccdee139c347e5/62d9bbec00a8aaf428800c75_Group%2018613.svg"
                text1="Reviews"
                description1="Improve ratings & get chosen more."
                icon2="https://assets.website-files.com/62a83ee090ccdee139c347e5/62d9bbeb4806cd1c4715ced5_Group%2018614.svg"
                text2="Listings"
                description2="Improve listings & get seen more."
                icon3="https://assets.website-files.com/62a83ee090ccdee139c347e5/62d9bbec43bcc550dc49c6e8_Group%2018624.svg"
                text3="Marketing"
                description3="Reach out to customers on text & email."
                icon4="https://assets.website-files.com/62a83ee090ccdee139c347e5/62d9bbeb12ef6612375a88c4_Group%2018618.svg"
                text4="SmartPages"
                description4="Engage more with out AI SEO"
                styles={{}}
                className="text-left p-8 outline outline-gray-200 h-auto w-auto rounded-lg space-y-12'"
            />
            <BusinessLevelCard 
                businessTitle="Engage"
                businessDescription="Convert leads to customers"
                icon1="	https://assets.website-files.com/62a83ee090ccdee139c347e5/62d9bbeb8a983469d6918815_Group%2018616.svg"
                text1="WebChat"
                description1="Convert leads on website chat with our AI."
                icon2="https://assets.website-files.com/62a83ee090ccdee139c347e5/62d9bbeb7cee6e0fc06b720a_Group%2018617.svg"
                text2="Messaging"
                description2="Engage with customers across all channels."
                icon3="	https://assets.website-files.com/62a83ee090ccdee139c347e5/62d9bbebaaeb8c7e7cef4b97_Group%2018619.svg"
                text3="Referrals"
                description3="Let your customers refer you."
                icon4="https://assets.website-files.com/62a83ee090ccdee139c347e5/62d9bbeb12ef6662a15a88c5_Group%2018615.svg"
                text4="Payments"
                description4="Modernize your integrated payment tools"
                styles={{}}
                className="text-left p-8 outline outline-gray-200 h-auto w-auto rounded-lg space-y-12'"
            />
            <BusinessLevelCard 
                businessTitle="Elevate"
                businessDescription="Provide a delightful experiece"
                icon1="	https://assets.website-files.com/62a83ee090ccdee139c347e5/62d9bbec5519b27af4eec871_Group%2018623.svg"
                text1="Captain AI"
                description1="Your AI assistant to drive growth "
                icon2="https://assets.website-files.com/62a83ee090ccdee139c347e5/62d9bbec4d64345353355417_Group%2018621.svg"
                text2="Feedback & survey"
                description2="Listen to your customers & delight them."
                icon3="	https://assets.website-files.com/62a83ee090ccdee139c347e5/62d9bbecb9ed0fa8b30e3a47_Group%2018620.svg"
                text3="Competition & Insights"
                description3="Learn about your competitors & insights."
                icon4="	https://assets.website-files.com/62a83ee090ccdee139c347e5/62d9bbec4a3eedd06bd65d1a_Group%2018622.svg"
                text4="Customer Manager"
                description4="Manage all your customer data & activity."
                styles={{}}
                className="text-left p-8 outline outline-gray-200 h-auto w-auto rounded-lg space-y-12'"
            />
        </div>
    </div>
  )
}

export default BusinessLevel