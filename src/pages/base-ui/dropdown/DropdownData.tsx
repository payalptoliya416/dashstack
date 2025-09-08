import type { Option } from "../../../types/UiType";

export const cardOption: Option[] = [
  {
    reference: "Dropdown",
    details: (
      <>
        Wrap the dropdown's toggle (your button or link) and the dropdown menu within 
         <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
         .dropdown
        </button> 
      </>
    ),
  },
  {
    reference: "Split button	",
    details: (
      <>
        	Similarly, create split button dropdowns with virtually the same markup as single button dropdowns, but with the addition of
         <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
        .dropdown-toggle-split
        </button> 
        for proper spacing around the dropdown caret.
          We use this extra class to reduce the horizontal
         <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
         margin-left
        </button> 
        on either side of the caret by 25% and remove the
      </>
    ),
  },
  {
    reference: "Sizing",
    details: (
      <>
       Button dropdowns work with buttons of all sizes, including default and split dropdown buttons.
      </>
    ),
  },
  {
    reference: "Dark dropdowns",
    details: (
      <>
       Opt into darker dropdowns to match a dark navbar or custom style by adding 
         <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
        .dropdown-menu-dark
        </button> 
     onto an existing 
         <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
       .dropdown-menu
        </button> 
        No changes are required to the dropdown items.
      </>
    ),
  },
  {
    reference: "Centered",
    details: (
      <>
      Make the dropdown menu centered below the toggle with
         <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
       .dropdown-center
        </button> 
      on the parent element.
      </>
    ),
  },
  {
    reference: "Dropup",
    details: (
      <>
      Trigger dropdown menus above elements by adding
         <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
      .dropup
        </button> 
      to the parent element.
      </>
    ),
  },
  {
    reference: "Dropup  centered",
    details: (
      <>
     Make the dropup menu centered above the toggle with
         <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
      .dropup-center
        </button> 
      on the parent element.
      </>
    ),
  },
  {
    reference: "Dropend",
    details: (
      <>
    Trigger dropdown menus at the right of the elements by adding 
         <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
      .dropend 
        </button> 
      to the parent element.
      </>
    ),
  },
  {
    reference: "Dropstart",
    details: (
      <>
   Trigger dropdown menus at the left of the elements by adding
         <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
      .dropstart
        </button> 
    to the parent element.
      </>
    ),
  },
  {
    reference: "Menu alignment	",
    details: (
      <>
   By default, a dropdown menu is automatically positioned 100% from the top and along the left side of its parent. You can change this with the directional 
         <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
     .drop*
        </button> 
  classes, but you can also control them with additional modifier classes. Add
         <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
     .dropdown-menu-end 
        </button> 
        to a 
         <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
     .dropdown-menu
        </button> 
        to right align the dropdown menu. Directions are mirrored when using Bootstrap in RTL, meaning 
         <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
    .dropdown-menu-end
        </button> 
         will appear on the left side.
      </>
    ),
  },
  {
    reference: "Responsive alignment	",
    details: (
      <>
   If you want to use responsive alignment, disable dynamic positioning by adding the
         <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
     .data-bs-display="static"
        </button> 
   attribute and use the responsive variation classes.
   <br/> To align right the dropdown menu with the given breakpoint or larger, add
         <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
    .dropdown-menu(-sm -md -lg -xl -xxl)-end.
        </button> <br/>
        To align left the dropdown menu with the given breakpoint or larger, add
         <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
    .dropdown-menu-end
        </button> 
       and
         <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
    .dropdown-menu(-sm -md -lg -xl -xxl)-start.
        </button> .<br/>
        Note that you don't need to add a
         <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
    data-bs-display="static" 
        </button> 
         attribute to dropdown buttons in navbars, since Popper isn't used in navbars.
      </>
    ),
  },
    {
    reference: "Forms",
    details: (
      <>
   Put a form within a dropdown menu, or make it into a dropdown menu, and usemargin or padding utilitiesto give it the negative space you require.
      </>
    ),
  },
    {
    reference: "Dropdown options",
    details: (
      <>
   Use 
    <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
    data-bs-offset
        </button> or
    <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
    data-bs-reference
        </button> to change the location of the dropdown.
      </>
    ),
  },
    {
    reference: "Auto close behavior",
    details: (
      <>
          By default, the dropdown menu is closed when clicking inside or outside the dropdown menu. You can use the
          <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
          autoClose
        </button>  option to change this behavior of the dropdown.
      </>
    ),
  },
    {
    reference: "withIcon",
    details: (
      <>
         Use 
          <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
         (icon)
        </button> with 
          <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
         (dropdown-item) 
        </button> as per your requiremnts.
      </>
    ),
  },
    {
    reference: "menuSizing",
    details: (
      <>
         Use 
          <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
         (menuSizing)
        </button> with 
          <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
        (dropdown-menu)
        </button> as
          <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
        .dropdown-sm
        </button> ,
          <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
       .dropdown-md
        </button> ,
          <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
        .dropdown-lg
        </button> ,
          <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
        .dropdown-xl
        </button> ,
          <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
        .dropdown-xxl
        </button> ,
      </>
    ),
  },
   {
    reference: "Theme",
    details: (
      <>
         Use 
          <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
         (Theme)
        </button> with 
          <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
         (.dropdown)
        </button>  as like:
          <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
         .dropdown-primary
        </button> ,
          <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
         .dropdown-secondary
        </button> ,
          <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
         .dropdown-success
        </button> ,
          <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
         .dropdown-info
        </button> ,
          <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
         .dropdown-warning
        </button> ,
          <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
         .dropdown-danger
        </button> , etc. Can use any
          <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
         ($thems-colors)
        </button>  mapping colors.
      </>
    ),
  },
   {
    reference: "ThemeSoft",
    details: (
      <>
         Use 
          <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
         (ThemeSoft)
        </button> with 
          <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
        (.dropdown)
        </button>  as like:
          <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
         .dropdown-soft-primary,
        </button> ,
          <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
         .dropdown-soft-secondary
        </button> ,
          <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
         .dropdown-soft-success
        </button> ,
          <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
        .dropdown-soft-info
        </button> ,
          <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
         .dropdown-soft-warning
        </button> ,
          <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
         .dropdown-soft-danger
        </button> , etc. Can use any
          <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
         ($thems-colors)
        </button>  mapping colors.
      </>
    ),
  },
  {
    reference: "Documentations",
    details: (
      <>
        Please visit:{" "}
        <a
          href="https://react-bootstrap.netlify.app/docs/components/dropdowns"
          className="text-darkgray font-bold"
          target="_blank"
          rel="noreferrer"
        >
          https://react-bootstrap.netlify.app/docs/components/dropdowns
        </a>
      </>
    ),
  },
];