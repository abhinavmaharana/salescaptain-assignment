function Login() {
  return (
    <div>
      <div className="w-full h-screen flex items-start">
        <div className="relative w-1/2 h-full flex flex-col">
          <div className="absolute top-[50%] left-[10%] flex flex-col">
            
          </div>
          <img
            src="https://app.salescaptain.com/static/media/loginSidePanel.6cc7d5c0ea3bc4deefac.jpeg"
            className="w-full h-full object-cover"
            alt="Sample image" 
          />
        </div>
        <div className="w-1/2 h-full bg-primary flex flex-col p-20 justify-between">
          <h1 className="text-xl text-black font-semibold"> Welcome to SalesCaptain </h1>
          
          <div className="w-full flex flex-col max-w-[550px]">
              <div className="w-full flex flex-col mb-2">
                <h1 className="text-3xl font-semibold mb-2 text-black">Login</h1>
                <p className="text-sm mb-2">Welcome Back! Please enter your details</p>
              </div>
              <div className="w-full flex flex-col">
                <input 
                  type="email"
                  placeholder="Enter your email id"
                  className="w-full text-black bg-transparent my-2 py-2 border-b border-black outline-none focus:outline-none"
                />

                <input 
                  type="password"
                  placeholder="Enter your password"
                  className="w-full text-black bg-transparent my-2 py-2 border-b border-black outline-none focus:outline-none"
                />
              </div>

              <div className="w-full flex items-center justify-between mb-6">
                <div className="w-full flex items-center">
                  <input type="checkbox" className="w-4 h-4 mr-2" />
                  <p className="text-sm">Remember me for 30 days</p>
                </div>

                <p className="text-sm font-medium cursor-pointer underline underline-offset-2 whitespace-nowrap">Forgot Password ?</p>
              </div>

              <div className="w-full flex flex-col">
                <button className="w-full bg-secondary rounded-md p-4 text-center flex items-start justify-center text-white">Login</button>
              </div>
          </div>
          <div className="w-full flex items-center justify-center">
            <p className="text-sm font-normal text-black">Don't have a account? <span className="font-semibold underline underline-offset-2 cursor-pointer">Sign up for free</span> </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login