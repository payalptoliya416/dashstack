import { Link } from "react-router-dom"

function ServerError() {
  return (
   <div className="min-h-screen w-full bg-[url('/images/loginbg.png')] bg-cover bg-center flex items-center justify-center overflow-y-auto px-4 py-10">
                 <div className="bg-white py-14 px-6 sm:px-10 md:py-[90px] md:px-[57px] rounded-xl w-full max-w-[500px] md:max-w-[630px] shadow-lg text-center">
                 <h1 className="text-8xl font-bold mb-5 text-[#4880FF]">500</h1>
                 <h3 className="text-[#202224] font-semibold text-lg sm:text-2xl md:text-[32px] mb-7 md:mb-[35px]">Internal server error!</h3>
                 <p className="text-base sm:text-lg max-w-[500px] mb-5">There was an error with the internal server. Please contact your site administrator.</p>
                 <div className="sm:mx-10">
                 <Link to='/eCommerce' className="bg-[#4880FF]/90 text-white py-3 sm:py-[15px] w-full rounded-md block">Back to Dashboard</Link>
                 </div>
                 </div>
           </div>
  )
}

export default ServerError
