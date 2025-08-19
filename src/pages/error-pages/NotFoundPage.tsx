import { Link } from "react-router-dom"

function NotFoundPage() {
  return (
       <div className="min-h-screen w-full bg-[url('/images/loginbg.png')] bg-cover bg-center flex items-center justify-center overflow-y-auto px-4 py-10">
              <div className="bg-white py-14 px-6 sm:px-10 md:py-[90px] md:px-[57px] rounded-xl w-full max-w-[500px] md:max-w-[630px] shadow-lg text-center">
              <img src="/images/404.png" alt="" className=" mx-auto mb-6 sm:mb-16 md:mb-[98px]" />
              <h3 className="text-[#202224] font-semibold text-lg sm:text-2xl md:text-[32px] mb-7 md:mb-[35px]">Looks like you’ve got lost….</h3>
              <div className="sm:mx-10">
              <Link to='/eCommerce' className="bg-[#4880FF]/90 text-white py-3 sm:py-[15px] w-full rounded-md block">Back to Dashboard</Link>
              </div>
              </div>
        </div>
  )
}

export default NotFoundPage
