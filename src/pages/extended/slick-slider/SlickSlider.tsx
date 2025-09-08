import AutoPlaySlider from "./AutoPlaySlider"
import CustomPagingSlider from "./CustomPagingSlider"
import MultipleRowsSlider from "./MultipleRowsSlider"
import MultipleSlider from "./MultipleSlider"
import ResponsiveSlider from "./ResponsiveSlider"
import SingleSlider from "./SingleSlider"
import VariableWidthSlider from "./VariableWidthSlider"

function SlickSlider() {
  return (
    <>
      <div className="rounded-lg shadow border border-gray-100 bg-white col-span-12 2xl:col-span-6 mb-7">
          <div className="p-4 border-b border-gray-100 font-bold text-[17px]">
          Single
          </div>
          <div className="p-4 sm:p-6"> <SingleSlider/></div>
      </div>
      <div className="rounded-lg shadow border border-gray-100 bg-white col-span-12 2xl:col-span-6 mb-7">
          <div className="p-4 border-b border-gray-100 font-bold text-[17px]">
          Multiple
          </div>
          <div className="p-4 sm:p-6"><MultipleSlider/></div>
      </div>
      <div className="rounded-lg shadow border border-gray-100 bg-white col-span-12 2xl:col-span-6 mb-7">
          <div className="p-4 border-b border-gray-100 font-bold text-[17px]">
          Responsive
          </div>
          <div className="p-4 sm:p-6"><ResponsiveSlider/></div>
      </div>
      <div className="rounded-lg shadow border border-gray-100 bg-white col-span-12 2xl:col-span-6 mb-7">
          <div className="p-4 border-b border-gray-100 font-bold text-[17px]">
        Multiple Rows
          </div>
          <div className="p-4 sm:p-6"><MultipleRowsSlider/></div>
      </div>
      <div className="rounded-lg shadow border border-gray-100 bg-white col-span-12 2xl:col-span-6 mb-7">
          <div className="p-4 border-b border-gray-100 font-bold text-[17px]">
          Variable Width
          </div>
          <div className="p-4 sm:p-6"><VariableWidthSlider/></div>
      </div>
      <div className="rounded-lg shadow border border-gray-100 bg-white col-span-12 2xl:col-span-6 mb-7">
          <div className="p-4 border-b border-gray-100 font-bold text-[17px]">
           Auto Play
          </div>
          <div className="p-4 sm:p-6"><AutoPlaySlider/></div>
      </div>
      <div className="rounded-lg shadow border border-gray-100 bg-white col-span-12 2xl:col-span-6 mb-7">
          <div className="p-4 border-b border-gray-100 font-bold text-[17px]">
           Custom Paging
          </div>
          <div className="p-4 sm:p-6"><CustomPagingSlider/></div>
      </div>
          <div className="rounded-lg shadow-md border border-gray-200 bg-white mt-7">
        <div className="p-4 md:p-4 sm:p-6 border-b border-gray-200 font-bold text-[17px]">
          <h3 className="font-bold text-[17px] text-darkgray">Uses Instruction</h3>
        </div>
        <div className="py-4 px-6 border-b border-gray-200">
          <p className=" text-sm text-lightgray">Slick is delivered primarily via npm. 
          <span className="text-[#e83e8c] py-[3px] px-2 rounded bg-[#f1f2f3] text-sm w-max ms-2">
        npm install react-slick --save
          </span>
          </p>
        </div>
          <div className="py-4 px-6">
             <p className=" text-sm text-lightgray">For full documentation please visit the link: <a href="https://react-slick.neostack.com/docs/get-started" className=" break-all"><strong className="underline">https://react-slick.neostack.com/docs/get-started</strong></a></p>
          </div>
      </div>
    </>
  )
}

export default SlickSlider
