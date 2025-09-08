import AcceptingZone from "./AcceptingZone"
import BasicDropZone from "./BasicDropZone"
import MaxFilesZone from "./MaxFilesZone"
import PreviewsZone from "./PreviewsZone"

function DropZone() {
  return (
    <>
      <div className="rounded-lg shadow border border-gray-100 bg-white col-span-12 2xl:col-span-6 mb-7">
          <div className="p-4 border-b border-gray-100 font-bold text-[17px]">
          Basic
          </div>
          <div className="p-4 sm:p-6"> <BasicDropZone/></div>
      </div>      
      <div className="rounded-lg shadow border border-gray-100 bg-white col-span-12 2xl:col-span-6 mb-7">
          <div className="p-4 border-b border-gray-100 font-bold text-[17px]">
       Accepting
          </div>
          <div className="p-4 sm:p-6"><AcceptingZone/></div>
      </div>      
      <div className="rounded-lg shadow border border-gray-100 bg-white col-span-12 2xl:col-span-6 mb-7">
          <div className="p-4 border-b border-gray-100 font-bold text-[17px]">
         MaxFiles
          </div>
          <div className="p-4 sm:p-6"><MaxFilesZone/></div>
      </div>      
      <div className="rounded-lg shadow border border-gray-100 bg-white col-span-12 2xl:col-span-6 mb-7">
          <div className="p-4 border-b border-gray-100 font-bold text-[17px]">
        Previews
          </div>
          <div className="p-4 sm:p-6"><PreviewsZone/></div>
      </div> 
      <div className="rounded-lg shadow-md border border-gray-200 bg-white mt-7">
        <div className="p-4 md:p-6 border-b border-gray-200 font-bold text-[17px]">
          <h3 className="font-bold text-[17px] text-darkgray">Uses Instruction</h3>
        </div>
        <div className="py-4 px-6 border-b border-gray-200">
          <p className=" text-sm text-lightgray">Dropzone is delivered primarily via npm.
          <span className="text-[#e83e8c] py-[3px] px-2 rounded bg-[#f1f2f3] text-sm w-max ms-2">
    npm install --save react-dropzone
          </span>
          </p>
        </div>
          <div className="py-4 px-6">
             <p className=" text-sm text-lightgray">For full documentation please visit the link: <a href="https://react-dropzone.js.org/" className=" break-all"><strong className="underline">https://react-dropzone.js.org/</strong></a></p>
          </div>
      </div>     
    </>
  )
}

export default DropZone
