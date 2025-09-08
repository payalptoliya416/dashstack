
import { Link } from "react-router-dom";
import type { Option } from "../../../types/UiType";

export const NavTabData: Option[] = [
  {
    reference: "Base nav",
    details: <>Navigation available in Bootstrap share general markup and styles, from the base
     <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
         .nav 
        </button> class to the active and disabled states. Swap modifier classes to switch between each style. <br/> The base
        <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
          .nav 
        </button> 
    </>,
  },
  {
    reference: "Tabs",
    details: <>Takes the basic nav from above and adds the 
     <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
         .nav-tabs
        </button> class to generate a tabbed interface. Use them to create tabbable regions with our
        <Link to=''>tab JavaScript plugin.</Link>
    </>,
  },
  {
    reference: "Pills",
    details: <>Take that same HTML, but use 
     <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
         .nav-pills
        </button> instead:
    </>,
  },
  {
    reference: "Underline",
    details: <>Take that same HTML, but use
     <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
        .nav-underline
        </button> instead:
    </>,
  },
  {
    reference: "Fill and justify",
    details: <>Force your 
     <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
        .nav
        </button>
         's contents to extend the full available width one of two modifier classes. To proportionately fill all available space with your
         <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
           .nav-item
            </button>s, use 
         <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
         .nav-fill
            </button> <br/>
            Notice that all horizontal space is occupied, but not every nav item has the same width.
    </>,
  },
  {
    reference: "Tabs with dropdowns",
    details: <>Add dropdown menus with a little extra HTML and the <Link to=''>dropdowns JavaScript plugin.</Link></>,
  },
  {
    reference: "JavaScript behavior",
    details: <>Use the tab JavaScript plugin—include it individually or through the compiled 
     <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
        bootstrap.js
        </button>
        file—to extend our navigational tabs and pills to create tabbable panes of local content.
    </>,
  },
  {
    reference: "Vertical",
    details: <>And with vertical pills. Ideally, for vertical tabs, you should also add
     <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
       aria-orientation="vertical"
        </button>
       to the tab list container.
    </>,
  },
  {
    reference: "withIcon",
    details: <>Use icon tabs </>,
  },
  {
    reference: "Line",
    details: <>Use
     <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
     line 
        </button> tabs as adding class 
     <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
     .nav-line-tabs
        </button> 
    </>,
  },
  {
    reference: "Themes",
    details: <>Use
     <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
     themes 
        </button> tabs as adding class
     <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
    .nav-theme-tabs-(colors)
        </button> . Colors can be use mapping color from
     <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
($theme-colors)
        </button> .
    </>,
  },
  {
    reference: "richContent",
    details: <>Use
     <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
     richContent  
        </button>  tabs as adding class
     <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
    .nav-rich-content-tabs
        </button> and then add class
     <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
           .nav-rich-content-(colors)
        </button>  Colors can be use mapping color from 
     <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
           ($theme-colors)
        </button>. 
    </>,
  },
  {
    reference: "Documentations",
    details: (
      <>
        Please visit:{" "}
        <a
          href="https://react-bootstrap.netlify.app/docs/components/tabs"
          className="text-darkgray font-bold"
          target="_blank"
          rel="noreferrer"
        >
         https://react-bootstrap.netlify.app/docs/components/tabs
        </a>
      </>
    ),
  },
];