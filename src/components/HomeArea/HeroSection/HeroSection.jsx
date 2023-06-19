function HeroSection() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 bg-[#EEECEA] mt-1">
        <div className="max-w-4xl p-32 space-y-12">
            <h1 className="text-7xl">Best way to grow your local business</h1>
            <p className="text-2xl">Artificial Intelligence powered easy-to-use tools to get more customers & give them a better experience</p>
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
        </div>
        <div>
            <img src='https://www.podium.com/_ipx/w_2048,q_75/%2F_next%2Fstatic%2Fmedia%2Fpayment-hero-image%402x.a9dfeeac.jpg?url=%2F_next%2Fstatic%2Fmedia%2Fpayment-hero-image%402x.a9dfeeac.jpg&w=2048&q=75' alt='' />
        </div>
    </div>
  )
}

export default HeroSection