import { Link } from "react-router-dom";
import type { Option } from "../../../types/UiType";

export const ModalOptions: Option[] = [
  {
    reference: "Modal components",
    details: <>Below is a static modal example (meaning its
     <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
         position
        </button> and
        <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
          display
        </button> <br/> have been overridden). Included are the modal header, modal body (required for 
         <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
         padding
        </button>), and modal footer (optional). We ask that you include modal headers with dismiss actions whenever possible, or provide another explicit dismiss action.
    </>,
  },
  {
    reference: "Live demo",
    details: <>Toggle a working modal demo by clicking the button below. It will slide down and fade in from the top of the page.
    </>,
  },
  {
    reference: "Static backdrop",
    details: <>When backdrop is set to static, the modal will not close when clicking outside of it. Click the button below to try it.
    </>,
  },
  {
    reference: "Scrolling long content",
    details: <>When modals become too long for the user's viewport or device, they scroll independent of the page itself. Try the demo below to see what we mean.
    </>,
  },
  {
    reference: "Vertically centered",
    details: <>Add  
    <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
        .modal-dialog-centered
        </button> to
    <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
       .modal-dialog
        </button> to vertically center the modal.
    </>,
  },
    {
    reference: "Tooltips and popovers",
    details: <><Link to='' className="hover:text-blue-500">Tooltips</Link>and<Link to='' className="hover:text-blue-500">popoverscan</Link> be placed within modals as needed. When modals are closed, any tooltips and popovers within are also automatically dismissed.
    </>,
  },
    {
    reference: "Toggle between modals",
    details: <>Toggle between multiple modals with some clever placement of the 
    <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
       data-bs-target
        </button> and
    <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
     data-bs-toggle
        </button> <br/> 
        attributes. For example, you could toggle a password reset modal from within an already open sign in modal. <strong>Please note multiple modals cannot be open at the same time—</strong>
        this method simply toggles between two separate modals.
    </>,
  },
    {
    reference: "Optional sizes",
    details: <>Modals have three optional sizes, available via modifier classes to be placed on a
    <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
       .modal-dialog
        </button> . These sizes kick in at certain breakpoints to avoid horizontal scrollbars on narrower viewports.
        <div className="overflow-x-auto w-full">
        <table className="table-auto border-collapse w-full text-left mt-7 mb-3">
            <thead>
            <tr className=" text-gray-700">
                <th className="px-6 py-2 border-b border-gray-100">Size</th>
                <th className="px-6 py-2 border-b border-gray-100">Class</th>
                <th className="px-6 py-2 border-b border-gray-100">Modal max-width</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td className="px-6 py-2 border-b border-gray-100">Small</td>
                <td className="px-6 py-2 border-b border-gray-100">
                <button className="text-[#e83e8c] py-[2px] px-2 rounded bg-[#f1f2f3] text-sm">
                    .modal-sm
                </button>
                </td>
                <td className="px-6 py-2 border-b border-gray-100">
                <button className="text-[#e83e8c] py-[2px] px-2 rounded bg-[#f1f2f3] text-sm">
                    300px
                </button>
                </td>
            </tr>
            <tr>
                <td className="px-6 py-2 border-b border-gray-100">Default</td>
                <td className="px-6 py-2 border-b border-gray-100">
                <p className="text-graytext font-bold">None</p>
                </td>
                <td className="px-6 py-2 border-b border-gray-100">
                <button className="text-[#e83e8c] py-[2px] px-2 rounded bg-[#f1f2f3] text-sm">
                    500px
                </button>
                </td>
            </tr>
            <tr>
                <td className="px-6 py-2 border-b border-gray-100">Large</td>
                <td className="px-6 py-2 border-b border-gray-100">
                <button className="text-[#e83e8c] py-[2px] px-2 rounded bg-[#f1f2f3] text-sm">
                    .modal-lg
                </button>
                </td>
                <td className="px-6 py-2 border-b border-gray-100">
                <button className="text-[#e83e8c] py-[2px] px-2 rounded bg-[#f1f2f3] text-sm">
                    800px
                </button>
                </td>
            </tr>
            <tr>
                <td className="px-6 py-2 border-b border-gray-100">Extra large</td>
                <td className="px-6 py-2 border-b border-gray-100">
                <button className="text-[#e83e8c] py-[2px] px-2 rounded bg-[#f1f2f3] text-sm">
                    .modal-xl
                </button>
                </td>
                <td className="px-6 py-2 border-b border-gray-100">
                <button className="text-[#e83e8c] py-[2px] px-2 rounded bg-[#f1f2f3] text-sm">
                    1140px
                </button>
                </td>
            </tr>
            </tbody>
        </table>
        Our default modal without modifier class constitutes the “medium” size modal.
        </div>
    </>,
  },
    {
    reference: "Fullscreen Modal",
    details: <>Another override is the option to pop up a modal that covers the user viewport, available via modifier classes that are placed on a 
    <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
      .modal-dialog
        </button> . 
        <div className="overflow-x-auto w-full">
        <table className="table-auto border-collapse w-full text-left mt-7 mb-3">
            <thead>
            <tr className=" text-gray-700">
                <th className="px-6 py-2 border-b border-gray-100">Class</th>
                <th className="px-6 py-2 border-b border-gray-100">Availability</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td className="px-6 py-2 border-b border-gray-100"> <button className="text-[#e83e8c] py-[2px] px-2 rounded bg-[#f1f2f3] text-sm">
                   .modal-fullscreen
                </button></td>
                <td className="px-6 py-2 border-b border-gray-100">Always</td>
            </tr>
            <tr>
                <td className="px-6 py-2 border-b border-gray-100"> <button className="text-[#e83e8c] py-[2px] px-2 rounded bg-[#f1f2f3] text-sm">
                  .modal-fullscreen-sm-down
                </button></td>
                <td className="px-6 py-2 border-b border-gray-100"> <button className="text-[#e83e8c] py-[2px] px-2 rounded bg-[#f1f2f3] text-sm">
                576px
                </button></td>
            </tr>
            <tr>
                <td className="px-6 py-2 border-b border-gray-100"> <button className="text-[#e83e8c] py-[2px] px-2 rounded bg-[#f1f2f3] text-sm">
                .modal-fullscreen-md-down
                </button></td>
                <td className="px-6 py-2 border-b border-gray-100"> <button className="text-[#e83e8c] py-[2px] px-2 rounded bg-[#f1f2f3] text-sm">
               768px
                </button></td>
            </tr>
            <tr>
                <td className="px-6 py-2 border-b border-gray-100"> <button className="text-[#e83e8c] py-[2px] px-2 rounded bg-[#f1f2f3] text-sm">
                  .modal-fullscreen-lg-down
                </button></td>
                <td className="px-6 py-2 border-b border-gray-100"> <button className="text-[#e83e8c] py-[2px] px-2 rounded bg-[#f1f2f3] text-sm">
                   992px
                </button></td>
            </tr>
            <tr>
                <td className="px-6 py-2 border-b border-gray-100"> <button className="text-[#e83e8c] py-[2px] px-2 rounded bg-[#f1f2f3] text-sm">
                 .modal-fullscreen-xl-down
                </button></td>
                <td className="px-6 py-2 border-b border-gray-100"> <button className="text-[#e83e8c] py-[2px] px-2 rounded bg-[#f1f2f3] text-sm">
               1200px
                </button></td>
            </tr>
            <tr>
                <td className="px-6 py-2 border-b border-gray-100"> <button className="text-[#e83e8c] py-[2px] px-2 rounded bg-[#f1f2f3] text-sm">
                 .modal-fullscreen-xxl-down
                </button></td>
                <td className="px-6 py-2 border-b border-gray-100"> <button className="text-[#e83e8c] py-[2px] px-2 rounded bg-[#f1f2f3] text-sm">
                1400px
                </button></td>
            </tr>
            </tbody>
        </table>
        Our default modal without modifier class constitutes the “medium” size modal.
        </div>
    </>,
  },
   {
    reference: "Themes",
    details: <>Use 
    <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
       dmodal-theme-(color)
        </button>  by adding class with
    <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
    .modal 
        </button>class as: theme-color name from colors mapping
    <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
    $theme-colors
        </button> .
    </>,
  },
   {
    reference: "Usecase",
    details: <>See the example for best practices.</>,
  },
  {
    reference: "Documentations",
    details: (
      <>
        Please visit:{" "}
        <a
          href="https://react-bootstrap.netlify.app/docs/components/modal"
          className="text-darkgray font-bold"
          target="_blank"
          rel="noreferrer"
        >
         https://react-bootstrap.netlify.app/docs/components/modal
        </a>
      </>
    ),
  },
];