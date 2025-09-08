
import { Link } from "react-router-dom";
import type { Option } from "../../../types/UiType";

export const ToastData: Option[] = [
  {
    reference: "Overview",
    details: <>Things to know when using the toast plugin:
     <ul className="list-disc ps-10 mt-1">
        <li>Toasts are opt-in for performance reasons, so<Link to=''>you must initialize them yourself.</Link></li>
        <li>oasts will automatically hide if you do not specify  <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
         autohide: false
        </button></li>
     </ul>
    </>
  },
  {
    reference: "Basic",
    details: <>To encourage extensible and predictable toasts, we recommend a header and body. Toast headers use
     <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
         display: flex
        </button>, allowing easy alignment of content thanks to our margin and flexbox utilities. <br/>
        Toasts are as flexible as you need and have very little required markup. At a minimum, we require a single element to contain your “toasted” content and strongly encourage a dismiss button.
    </>
  },
  {
    reference: "Live example",
    details: <>Click the button below to show a toast (positioned with our utilities in the lower right corner) that has been hidden by default.
    </>
  },
  {
    reference: "Stacking",
    details: <>You can stack toasts by wrapping them in a toast container, which will vertically add some spacing.
    </>
  },
  {
    reference: "liveStacking",
    details: <>You can stack toasts by wrapping them in a toast container, which will vertically add some spacing.
    </>
  },
  {
    reference: "Custom content",
    details: <>Customize your toasts by removing sub-components, tweaking them with 
    <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
         utilities
        </button> "&gt;, or by adding your own markup. Here we've created a simpler toast by removing the default
    <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
       .toast-header
        </button>, adding a custom hide icon fromBootstrap Icons, and using some 
    <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
       flexbox utilities
        </button>to adjust the layout.
    </>
  },
  {
    reference: "Color schemes",
    details: <>Building on the above example, you can create different toast color schemes with our 
    <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
      color 
        </button> and
    <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
      background
        </button>utilities. Here we've added
    <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
       .text-bg-primary
        </button> to the
    <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
       .toast
        </button> , and then added 
    <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
      .btn-close-white
        </button> to our close button. For a crisp edge, we remove the default border with
    <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
      .border-0
        </button>.
    </>
  },
  {
    reference: "Placement",
    details: <>Place toasts with custom CSS as you need them. The top right is often used for notifications, as is the top middle. If you're only ever going to show one toast at a time, put the positioning styles right on the
    <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
     .toast
        </button>.
    </>
  },
  {
    reference: "Documentations",
    details: (
      <>
        Please visit:{" "}
        <a
          href="https://react-bootstrap.netlify.app/docs/components/toasts/"
          className="text-darkgray font-bold"
          target="_blank"
          rel="noreferrer"
        >
         https://react-bootstrap.netlify.app/docs/components/toasts/
        </a>
      </>
    ),
  },
];