

function ProgressBarTable() {
  return (
    <>
        <div className="grid grid-cols-12 rounded-lg shadow-md border border-gray-200 bg-white mt-7">
        <div className="col-span-12">
          <div className="p-6 font-bold text-[17px]">Options</div>

          <div className="w-full overflow-x-auto">
            <table className="min-w-full border border-gray-100 text-left text-sm whitespace-nowrap">
              <thead>
                <tr>
                  <th className="px-6 py-2 border-b border-gray-100">Option</th>
                  <th className="px-6 py-2 border-b border-gray-100">Type</th>
                  <th className="px-6 py-2 border-b border-gray-100">
                   Default
                  </th>
                  <th className="px-6 py-2 border-b border-gray-100">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-b border-gray-100 px-6 py-3">value</td>
                  <td className="border-b border-gray-100 px-6 py-3">Number</td>
                  <td className="border-b border-gray-100 px-6 py-3">Indeterminate</td>
                  <td className="border-b border-gray-100 px-6 py-3">Current value</td>
                </tr>
                <tr>
                  <td className="border-b border-gray-100 px-6 py-3">min</td>
                  <td className="border-b border-gray-100 px-6 py-3">Number</td>
                  <td className="border-b border-gray-100 px-6 py-3">0</td>
                  <td className="border-b border-gray-100 px-6 py-3">Minimum value</td>
                </tr>
                <tr>
                  <td className="border-b border-gray-100 px-6 py-3">max</td>
                  <td className="border-b border-gray-100 px-6 py-3">Number</td>
                  <td className="border-b border-gray-100 px-6 py-3">1</td>
                  <td className="border-b border-gray-100 px-6 py-3">Minimum value</td>
                </tr>
                <tr>
                  <td className="border-b border-gray-100 px-6 py-3">startAngle</td>
                  <td className="border-b border-gray-100 px-6 py-3">Number</td>
                  <td className="border-b border-gray-100 px-6 py-3">0</td>
                  <td className="border-b border-gray-100 px-6 py-3">	Starting angle in degrees. Angle of 0 points straight up. Direction depends on  <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
                     anticlockwise
                    </button> .</td>
                </tr>
                <tr>
                  <td className="border-b border-gray-100 px-6 py-3">anticlockwise</td>
                  <td className="border-b border-gray-100 px-6 py-3">Boolean</td>
                  <td className="border-b border-gray-100 px-6 py-3">false</td>
                  <td className="border-b border-gray-100 px-6 py-3">	Whether to rotate anti-clockwise (true) or clockwise (false)</td>
                </tr>
                <tr>
                  <td className="border-b border-gray-100 px-6 py-3">unconstrained</td>
                  <td className="border-b border-gray-100 px-6 py-3">Boolean</td>
                  <td className="border-b border-gray-100 px-6 py-3"> false </td>
                  <td className="border-b border-gray-100 px-6 py-3">
                   Whether the value should be constrained between   <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">  min   </button> and <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">  max   </button> . If false, values over <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">  max   </button>  will be truncated to  <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">  max   </button> and values under <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">  min  </button>
                   will be set to <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">  min  </button>
                  </td>
                </tr>
                 <tr>
                  <td className="border-b border-gray-100 px-6 py-3">indeterminateText</td>
                  <td className="border-b border-gray-100 px-6 py-3">String</td>
                  <td className="border-b border-gray-100 px-6 py-3">'?'</td>
                  <td className="border-b border-gray-100 px-6 py-3">	ext to display as the value when it is indeterminate</td>
                </tr>
                 <tr>
                  <td className="border-b border-gray-100 px-6 py-3">textFormat</td>
                  <td className="border-b border-gray-100 px-6 py-3">String or Function</td>
                  <td className="border-b border-gray-100 px-6 py-3">'horizontal'</td>
                  <td className="border-b border-gray-100 px-6 py-3">	Text layout for value, min, max. <br/>You can pass either one of the possible keywords: <br/>
                  <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm mb-1">horizontal</button> - value/max <br/>
                  <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm mb-1">vertical </button> - value is shown over max<br/>
                  <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm mb-1">percent </button> - value%<br/>
                  <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm mb-1">value </button> - only value is shown<br/>
                  <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm mb-1">valueOnCircle </button> - the value is painted on top of the filled region on the circle<br/>
                  <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm mb-1">none </button> -  no text is shown.<br/>
                  Alternatively you can provide your own function, which will be called each time progress is updated with value and max as arguments, and is expected to return a string of HTML to insert in the center of the progress circle. <strong>Attention! The string returned from your function will be inserted as HTML. Do not pass any dynamic content such as variables coming from elsewhere to avoid XSS vulnerability.</strong>
                   </td>
                </tr>
                  <tr>
                  <td className="border-b border-gray-100 px-6 py-3">animation</td>
                  <td className="border-b border-gray-100 px-6 py-3">String or Function</td>
                  <td className="border-b border-gray-100 px-6 py-3">'easeInOutCubic'</td>
                  <td className="border-b border-gray-100 px-6 py-3">	Animation easing function. Can be a string keyword (see the table below for available easings) or <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">  'none'  </button>. <br/> Alternatively, you can pass your own function with the signature <br/> <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">  function(time, startAngle, angleDiff, duration)  </button>. <br/> The function will be called on each animation frame with the current time (milliseconds since animation start), starting angle, difference in angle (i.e. endAngle - startAngle) and animation duration as arguments, and must return the current angle.</td>
                </tr>
                 <tr>
                  <td className="border-b border-gray-100 px-6 py-3">animationDuration</td>
                  <td className="border-b border-gray-100 px-6 py-3">Number</td>
                  <td className="border-b border-gray-100 px-6 py-3">600</td>
                  <td className="border-b border-gray-100 px-6 py-3">Animation duration in milliseconds</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProgressBarTable
