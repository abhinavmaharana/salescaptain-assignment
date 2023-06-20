import BlogCards from "../../../shared/components/BlogCards/BlogCards"

function Blog() {
  return (
    <div className="justify-center items-center  space-y-4 mt-8">
        <div className="text-center space-y-4 mb-8">
            <h1 className="text-6xl">Tools to take your business to next level</h1>
            <p className="text-3xl text-gray-400">Get the latest business intelligence relevant to your industry, designed to help you grow.</p>
        </div>
        <div className="grid grid-cols-3 gap-8 p-12">
            <BlogCards 
                blogImg="https://assets.website-files.com/62a83ee090ccdee139c347e5/62defe250a42e4ba76b2ab04_Mask%20Group%20166.webp"
                blogTitle="Google My Business Basics: How to get more customers from GMB."
                blogDescription="Customers want to find local proprietors on search engines and nearly 90 percent of that traffic goes to Google."
                styles={{}}
                className="space-y-4 cursor-pointer mb-8"
            />
            <BlogCards 
                blogImg="https://assets.website-files.com/62a83ee090ccdee139c347e5/62defe243b03ce85cb2d8c9d_Mask%20Group%20165.webp"
                blogTitle="How to use Google's Business Messaging tool to get new customers"
                blogDescription="Today’s leading businesses aren’t just being found - they’re engaging the moment they’re discovered."
                styles={{}}
                className="space-y-4 cursor-pointer mb-8"
            />
            <BlogCards 
                blogImg="https://assets.website-files.com/62a83ee090ccdee139c347e5/62defe2556fec0b3086291da_pexels-antoni-shkraba-4348404.webp"
                blogTitle="6 Ways to Increase Your Website Traffic and Leads"
                blogDescription="More than 61% of marketers have reported that attracting traffic to their website is their biggest challenge."
                styles={{}}
                className="space-y-4 cursor-pointer mb-8"
            />
        </div>
    </div>
  )
}

export default Blog