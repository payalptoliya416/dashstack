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
    </>
  )
}

export default DropZone
