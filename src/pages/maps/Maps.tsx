
import BasicMap from "./BasicMap";
import MarkerMap from "./MarkerMap";

function Maps() {
 
  return (
    <>
      <BasicMap/>
      <MarkerMap/>
      <div className="rounded-lg shadow-md border border-gray-200 bg-white mt-7">
        <div className="p-4 md:px-6 md:py-3 border-b border-gray-200 font-bold text-[17px]">
          <h3 className="font-bold text-[17px] text-darkgray">Uses Instruction</h3>
        </div>
        <div className="py-4 px-6 border-b border-gray-200">
          <p className=" text-sm text-lightgray">Quill is delivered primarily via npm
          <span className="text-[#e83e8c] py-[3px] px-2 rounded bg-[#f1f2f3] text-sm w-max ms-2">
        npm install jsvectormap
          </span>
          </p>
        </div>
          <div className="py-4 px-6">
             <p className=" text-sm text-lightgray">For full documentation please visit the link: <a href="https://jvm-docs.vercel.app/docs/introduction" className=" break-all"><strong className="underline">https://jvm-docs.vercel.app/docs/introduction</strong></a></p>
          </div>
      </div>
    </>
  );
}

export default Maps;
