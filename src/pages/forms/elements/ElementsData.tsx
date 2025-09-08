
interface Option {
  reference: string;
  details: React.ReactNode;
}

export const ElementTable: Option[] = [
  {
    reference: "Approach",
    details: <>Browser default checkboxes and radios are replaced with the help of 
     <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
       .form-check
        </button>  
        ,<br/> a series of classes for both input types that improves the layout and behavior of their HTML elements, that provide greater customization and cross browser consistency. Checkboxes are for selecting one or several options in a list, while radios are for selecting one option from many. <br/> Structurally, our
         <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
        &lt; input  &gt;
        </button> s and
         <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
        &lt; label  &gt;
        </button> s are sibling elements as opposed to an 
         <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
        &lt; input  &gt;
        </button>  within a
         <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
        &lt; label  &gt;
        </button>  . This is slightly more verbose as you must specify 
         <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
       id 
        </button> and 
         <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
       for 
        </button>  attributes to relate the 
         <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
         &lt; input  &gt;
        </button> and 
         <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
         &lt; label  &gt;
        </button> . We use the sibling selector 
        ( <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
         ~
        </button> )for all our 
        <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
         &lt; input  &gt;
        </button> states, like
        <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
       :checked
        </button> or 
        <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
      :disabled
        </button>. When combined with the
        <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
      .form-check-label
        </button>class, we can easily style the text for each item based on the 
        <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
       &lt; input  &gt;
        </button>'s state.
        </>,
  },
    {
    reference: "Indeterminate",
    details: <>Checkboxes can utilize the 
     <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
     :indeterminate
        </button>  pseudo class when manually set via JavaScript (there is no available HTML attribute for specifying it).
        </>
  },
    {
    reference: "Disabled",
    details: <>Add the
     <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
     disabled
        </button>  attribute and the associated
     <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
     &lt; label  &gt;
        </button>  s are automatically styled to match with a lighter color to help indicate the input's state.
        </>,
  },
    {
    reference: "Inline",
    details: <>Group checkboxes or radios on the same horizontal row by adding 
     <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
    .form-check-inline
        </button>  to any 
     <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
    .form-check
        </button>  .
        </>,
  },
    {
    reference: "Reverse",
    details: <>Put your checkboxes, radios, and switches on the opposite side with the 
     <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
    .form-check-reverse
        </button> modifier class.
        </>,
  },
    {
    reference: "Without labels",
    details: <>Omit the wrapping 
     <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
   .form-check 
        </button> for checkboxes and radios that have no label text. Remember to still provide some form of accessible name for assistive technologies (for instance, using
     <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
  aria-label
        </button>).  See the
     <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
  forms overview accessibility
        </button> section for details.
        </>,
  },
    {
    reference: "Toggle buttons",
    details: <>Create button-like checkboxes and radio buttons by using
     <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
  .btn 
        </button> styles rather than 
     <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
  .form-check-label 
        </button>on the 
     <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
    &lt; label  &gt;
        </button> elements. These toggle buttons can further be grouped in a 
     <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
  button group
        </button>  if needed.
        </>,
  },
    {
    reference: "Documentations",
    details: <>
     Please visit:{" "}
        <a
          href="https://react-bootstrap.netlify.app/docs/forms/overview"
          className="text-darkgray font-bold"
          target="_blank"
          rel="noreferrer"
        >
          https://react-bootstrap.netlify.app/docs/forms/overview
        </a>
        </>,
  },
]