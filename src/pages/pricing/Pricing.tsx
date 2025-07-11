import MainTitle from "../../hooks/MainTitle"

function Pricing() {
  return (
    <>
       <MainTitle title="Pricing"/>
       <div className="grid grid-cols-3">
            <div className="rounded-xl ">
                <div className="border-b border-2 border-[#212121]/10">
                        <h3 className="text-[#202224] text-[22px] font-bold mb-[10px]">Basic</h3>
                    <h6 className="text-[#212121]">Monthly Charge</h6>
                    <h2>$14.99</h2>
                </div>
            </div>
       </div>
    </>
  )
}

export default Pricing
