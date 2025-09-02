interface Option {
  reference: string;
  details: React.ReactNode;
}

export const switchTable: Option[] = [
  {
    reference: "switch",
    details: <>Use
    Initialize 
     <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
      .switch
        </button> 
        </>,
  },
  {
    reference: "withText",
    details: (
      <>
      Use 
        <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
     withText 
        </button>  as:
        <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
    switch
        </button>  
        <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
     <span className="switch-on">on</span><code> </code> <span className="switch-off">off</span>
        </button>  
      </>
    ),
  },
  {
    reference: "withIcon",
    details: (
      <>
    Use
        <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
       withText
        </button> as: 
        <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
       switch
        </button> 
        <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
       <span className="switch-on"><i className="bi bi-check"></i></span><code> </code> <span className="switch-off"><i className="bi bi-x"></i></span>
        </button> 
      </>
    ),
  },
  {
    reference: ".switch-size",
    details: (
      <>
   Use 
        <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
       size
        </button> as: 
        <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
       sm
        </button> , 
        <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
       lg
        </button> 
      </>
    ),
  },
  {
    reference: ".switch-stacked-radio",
    details: (
      <>
   Use 
        <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
    stacked - radio
        </button> as: 
        <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
    switches-stacked-radio
        </button> 
      </>
    ),
  },
  {
    reference: ".switch-theme",
    details: (
      <>
   Use 
        <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
      theme
        </button> as: 
        <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
      colors
        </button> from mapping theme color mapping
        <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
     $theme-colors
        </button>
      </>
    ),
  },
]