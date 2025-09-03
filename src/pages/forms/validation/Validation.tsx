function Validation() {
  return (
    <>
      <div className="rounded-lg shadow border border-gray-100 bg-white xl:mb-7">
        <div className="p-4 border-b border-gray-100 font-bold text-[17px]">
           Native HTML5
        </div>
        <form action="" className="p-6">
          <div className="grid grid-cols-3 gap-7 items-center mb-7">
           <div className="">
             <label className="text-sm text-[#4B5675] mb-2 block font-semibold">First name</label>
            <input type="text"  className="border rounded border-gray-100 py-2 px-3 w-full text-sm focus:outline-blue-500 text-[#4B5675]" value="Mark" />
           </div>
           <div className="">
             <label className="text-sm text-[#4B5675] mb-2 block font-semibold">Last name</label>
            <input type="text"  className="border rounded border-gray-100 py-2 px-3 w-full text-sm focus:outline-blue-500 text-[#4B5675]" value="Otto" />
           </div>
           <div className="">
             <label className="text-sm text-[#4B5675] mb-2 block font-semibold">Username</label>
             <div className="flex relative">
              <div className="py-2 px-3 border border-gray-100 border-r-0 text-[#4B5675]">@</div>
            <input type="text"  className="border rounded-r border-gray-100 py-2 px-3 w-full text-sm focus:outline-blue-500 text-[#4B5675]" placeholder="Username" />
             </div>
           </div>
          </div>
          <div className="grid grid-cols-12 gap-7 mb-7">
            <div className="col-span-6">
              <div className="">
             <label className="text-sm text-[#4B5675] mb-2 block font-semibold">City</label>
            <input type="text"  className="border rounded border-gray-100 py-2 px-3 w-full text-sm focus:outline-blue-500 text-[#4B5675]" placeholder="City"  />
           </div>
            </div>
            <div className="col-span-3">
              <div className="">
             <label className="text-sm text-[#4B5675] mb-2 block font-semibold">State</label>
            <input type="text"  className="border rounded border-gray-100 py-2 px-3 w-full text-sm focus:outline-blue-500 text-[#4B5675]"  placeholder="State"/>
           </div>
            </div>
            <div className="col-span-3">
              <div className="">
             <label className="text-sm text-[#4B5675] mb-2 block font-semibold">Zip</label>
            <input type="text"  className="border rounded border-gray-100 py-2 px-3 w-full text-sm focus:outline-blue-500 text-[#4B5675]" placeholder="Zip" />
           </div>
            </div>
          </div>
           <div className="mb-7">
              <label htmlFor="remember" className="relative flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="appearance-none w-5 h-5 bg-[#EEF0F3] border-none rounded cursor-pointer
                    checked:bg-[#3E97FF] checked:border-[#3E97FF] relative
                    checked:after:content-['✔'] checked:after:absolute checked:after:text-white
                    checked:after:font-bold checked:after:text-[12px] checked:after:left-[5px] checked:after:top-[1px]"
                />
                <span className="ms-3 text-[#4B5675] text-sm">
             Agree to terms and conditions
                </span>
            </label>
           </div>
           <button type="submit" className="text-white bg-[#3e97ff] px-5 py-2 rounded text-sm">Submit form</button>
        </form>
      </div>

      <div className="rounded-lg shadow border border-gray-100 bg-white xl:mb-7">
        <div className="p-4 border-b border-gray-100 font-bold text-[17px]">
           Server Rendered
        </div>
        <form action="" className="p-6">
          <div className="grid grid-cols-3 gap-7 items-center mb-7">
           <div className="">
             <label className="text-sm text-[#4B5675] mb-2 block font-semibold">First name</label>
            <input type="text"  className="border rounded border-gray-100 py-2 px-3 w-full text-sm focus:outline-blue-500 text-[#4B5675]" value="Mark" />
           </div>
           <div className="">
             <label className="text-sm text-[#4B5675] mb-2 block font-semibold">Last name</label>
            <input type="text"  className="border rounded border-gray-100 py-2 px-3 w-full text-sm focus:outline-blue-500 text-[#4B5675]" value="Otto" />
           </div>
           <div className="">
             <label className="text-sm text-[#4B5675] mb-2 block font-semibold">Username</label>
             <div className="flex relative">
              <div className="py-2 px-3 border border-gray-100 border-r-0 text-[#4B5675]">@</div>
            <input type="text"  className="border rounded-r border-gray-100 py-2 px-3 w-full text-sm focus:outline-blue-500 text-[#4B5675]" placeholder="Username" />
             </div>
           </div>
          </div>
          <div className="grid grid-cols-12 gap-7 mb-7">
            <div className="col-span-6">
              <div className="">
             <label className="text-sm text-[#4B5675] mb-2 block font-semibold">City</label>
            <input type="text"  className="border rounded border-gray-100 py-2 px-3 w-full text-sm focus:outline-blue-500 text-[#4B5675]" placeholder="City"  />
           </div>
            </div>
            <div className="col-span-3">
              <div className="">
             <label className="text-sm text-[#4B5675] mb-2 block font-semibold">State</label>
            <input type="text"  className="border rounded border-gray-100 py-2 px-3 w-full text-sm focus:outline-blue-500 text-[#4B5675]"  placeholder="State"/>
           </div>
            </div>
            <div className="col-span-3">
              <div className="">
             <label className="text-sm text-[#4B5675] mb-2 block font-semibold">Zip</label>
            <input type="text"  className="border rounded border-gray-100 py-2 px-3 w-full text-sm focus:outline-blue-500 text-[#4B5675]" placeholder="Zip" />
           </div>
            </div>
          </div>
           <div className="mb-7">
              <label htmlFor="remember" className="relative flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="appearance-none w-5 h-5 bg-[#EEF0F3] border-none rounded cursor-pointer
                    checked:bg-[#3E97FF] checked:border-[#3E97FF] relative
                    checked:after:content-['✔'] checked:after:absolute checked:after:text-white
                    checked:after:font-bold checked:after:text-[12px] checked:after:left-[5px] checked:after:top-[1px]"
                />
                <span className="ms-3 text-[#4B5675] text-sm">
             Agree to terms and conditions
                </span>
            </label>
           </div>
           <button type="submit" className="text-white bg-[#3e97ff] px-5 py-2 rounded text-sm">Submit form</button>
        </form>
      </div>
    </>
  );
}

export default Validation;
