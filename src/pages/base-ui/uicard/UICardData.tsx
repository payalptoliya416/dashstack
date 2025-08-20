import type { CardData, CardUIType, FlushCard, Option } from "../../../types/UiType";

export const cardData: CardData[] = [
  {
    image: "/images/uicard.png",
    title: "Special title treatment",
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    items: [
      "Some quick example text to build on the card title",
      "Some quick example text to build on the card title",
      "Some quick example text to build on the card title",
    ],
    links: [
      { label: "Card Link", color: "#3e97ff", hoverBg: "#3e97ff1a" },
      { label: "Another Link", color: "#d13b4c", hoverBg: "#d13b4c1a" },
    ],
  },
  {
    image: "/images/uicard.png",
    title: "Special title treatment",
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    items: [
      "Some quick example text to build on the card title",
      "Some quick example text to build on the card title",
      "Some quick example text to build on the card title",
    ],
    links: [
      { label: "Card Link", color: "#3e97ff", hoverBg: "#3e97ff1a" },
      { label: "Another Link", color: "#d13b4c", hoverBg: "#d13b4c1a" },
    ],
  },
  {
    image: "/images/uicard.png",
    title: "Special title treatment",
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    items: [
      "Some quick example text to build on the card title",
      "Some quick example text to build on the card title",
      "Some quick example text to build on the card title",
    ],
    links: [
      { label: "Card Link", color: "#3e97ff", hoverBg: "#3e97ff1a" },
      { label: "Another Link", color: "#d13b4c", hoverBg: "#d13b4c1a" },
    ],
  },
];

export const flushCards: FlushCard[] = [
  {
    id: 1,
    title: "Special title treatment",
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
  {
    id: 2,
    title: "Special title treatment",
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
  {
    id: 3,
    title: "Special title treatment",
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
];

export const cards: CardUIType[] = [
  {
    id: 1,
    title: "Primary Card Title",
    variant: "primary",
    bg: "#3e97ff",
    border: "#58a5ff",
  },
  {
    id: 2,
    title: "Secondary Card Title",
    variant: "secondary",
    bg: "#505863",
    border: "#5b6571",
  },
  {
    id: 3,
    title: "Success Card Title",
    variant: "success",
    bg: "#25b865",
    border: "#29cd71",
  },
  {
    id: 4,
    title: "Danger Card Title",
    variant: "danger",
    bg: "#d13b4c",
    border: "#d6505f",
  },
  {
    id: 5,
    title: "Warning Card Title",
    variant: "warning",
    bg: "#e49e3d",
    border: "#e7a953",
  },
  {
    id: 6,
    title: "Info Card Title",
    variant: "info",
    bg: "#02a0e4",
    border: "#03b2fd",
  },
];

export const cardOption: Option[] = [
  {
    reference: "Card",
    details: (
      <>
        A card is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content, contextual background colors, and powerful display options. If you're familiar with Bootstrap 3, cards replace our old panels, wells, and thumbnails. Similar functionality to those components is available as modifier classes for cards.
      </>
    ),
  },
  {
    reference: "Titles, text, and links",
    details: (
      <>
        Card titles are used by adding <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
          .card-title
        </button> to a <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
            &lt;h*&gt; </button>
            tag. In the same way, links are added and placed next to each other by adding
             <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">.card-link </button> 
             to an 
             <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm"> &lt;a&gt; </button>
              tag.
      </>
    ),
  },
  {
    reference: "Images",
    details: (
      <>
        <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
          .card-img-top
        </button>
         places an image to the top of the card. With
           <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
          .card-text
        </button>
        , text can be added to the card. Text within 
        <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
         .card-text 
        </button>
         can also be styled with the standard HTML tags.
      </>
    ),
  },
  {
    reference: "Kitchen Sink",
    details: (
      <>
       Mix and match multiple content types to create the card you need, or throw everything in there. Shown below are image styles, blocks, text styles, and a list group—all wrapped in a fixed-width card.
      </>
    ),
  },
  {
    reference: "Sizing",
    details: (
      <>
       Cards assume no specific 
        <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
          width
        </button>{" "}
        to start, so they'll be 100% wide unless otherwise stated. You can change this as needed with custom CSS, grid classes, grid Sass mixins, or utilities.
      </>
    ),
  },
  {
    reference: "Text Alignment",
    details: (
      <>
      You can quickly change the text alignment of any card—in its entirety or specific parts—with our<strong>text align classes.</strong>
      </>
    ),
  },
  {
    reference: "Navigation",
    details: (
      <>
      Add some navigation to a card's header (or block) with Bootstrap's<strong>nav components.</strong>
      </>
    ),
  },
  {
    reference: "Overlays",
    details: (
      <>
     Turn an image into a card background and overlay your card's text. Depending on the image, you may or may not need additional styles or utilities.
      </>
    ),
  },
  {
    reference: "Horizontal",
    details: (
      <>
     Using a combination of grid and utility classes, cards can be made horizontal in a mobile-friendly and responsive way. In the example below, we remove the grid gutters with
             <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
          .g-0
        </button> and use 
             <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
          .col-md-*
        </button>
         classes to make the card horizontal at the 
             <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
       md  
        </button>
        breakpoint. Further adjustments may be needed depending on your card content.
      </>
    ),
  },
  {
    reference: "Background and color",
    details: (
      <>
    Set a <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
          background-color 
        </button>  with contrasting foreground 
             <button className="text-[#252f4a] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
        color 
        </button>
       Previously it was required to manually pair your choice of
             <button className="text-[#252f4a] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
        and 
        </button>
         <button className="text-[#252f4a] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
        .bg-(color)
        </button> 
       utilities for styling, which you still may use if you prefer.
      </>
    ),
  },
  {
    reference: "Card Groups",
    details: (
      <>
    Use card groups to render cards as a single, attached element with equal width and height columns. Card groups start off stacked and use
         <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
        display: flex;
        </button> 
     to become attached with uniform dimensions starting at the
         <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
        sm
        </button> 
     breakpoint.
      </>
    ),
  },
  {
    reference: "Grid Cards",
    details: (
      <>
    	Use the Bootstrap grid system and its
         <button className="text-[#252f4a] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
        display: flex;
        </button> 
     classesto control how many grid columns (wrapped around your cards) you show per row. For example, here's
         <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
        .row-cols-1 
        </button> 
    laying out the cards on one column, and 
         <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
        .row-cols-md-2
        </button> 
        splitting four cards to equal width across multiple rows, from the medium breakpoint up.
      </>
    ),
  },
  {
    reference: "Flush Cards",
    details: (
      <>
    Use <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
        .card-flush
        </button> for flush cards.
      </>
    ),
  },
  {
    reference: "Hover Cards",
    details: (
      <>
    Use <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
        .card-hover
        </button> for hover cards.
      </>
    ),
  },
  {
    reference: "Stretch",
    details: (
      <>
    Use <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
        .card-stretch
        </button>  for stretch cards. Stretch sizing 
        <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
        .card-stretch-(size)
        </button>
         as:
        <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
        100, 75, 50, 33.33, 25
        </button>
      </>
    ),
  },
  {
    reference: "Documentations",
    details: (
      <>
        Please visit:{" "}
        <a
          href="https://react-bootstrap.netlify.app/docs/components/accordion"
          className="text-[#252f4a] font-bold"
          target="_blank"
          rel="noreferrer"
        >
          https://react-bootstrap.netlify.app/docs/components/accordion
        </a>
      </>
    ),
  },
];