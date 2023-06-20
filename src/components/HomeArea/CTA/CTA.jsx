function CTA() {
  return (
    <div className="w-full h-auto flex items-center justify-center bg-[#202020] text-white">
        <div className="justify-center text-center space-y-8 lg:w-auto mb-8">
            <h1 className="text-6xl font-bold">Ready to grow?</h1>
            <p className="text-lg leading-10">See why 100,000+ businesses trust us. Book a personalized demo to see <br/>
                how SalesCaptain provides you the right tools to grow your business.</p>
            <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                <input
                    type="search"
                    className="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-black outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-black focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-secondary"
                    placeholder="Enter your Email"
                    aria-label="Search"
                    aria-describedby="button-addon1" 
                />

                <button
                    className="relative z-[2] flex items-center rounded-r bg-secondary px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-secondary-700 hover:shadow-lg focus:bg-secondary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-secondary-800 active:shadow-lg"
                    type="button"
                    id="button-addon1"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                >
                    GET DEMO
                </button>
            </div>
            <div className="space-y-6 lg:pl-32">
                <div className="flex items-center space-x-6">
                    <img className="w-48" src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62af532e37289b6270d7aba8_stars.webp" alt="" />
                    <p>500+ Reviews</p>
                </div>
                <div className="flex items-center space-x-6">
                    <img src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62af562b0cd76f4e7026cba9_18-187112_google-transparent-white-logo.webp" loading="lazy" width="57" alt="" />
                    <img src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62af5631b8d59acd37236ca0_c-dark.webp" loading="lazy" width="92" alt="" />
                    <img src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62af562bb61c17fbd3d37043_6033de5cf82f810004782cb7.webp" loading="lazy" width="138" alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default CTA