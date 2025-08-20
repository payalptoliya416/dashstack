import {
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
} from "lucide-react";
import type {
  BrandButton,
  ButtonIconType,
  ButtonType,
  IconButton,
  Option,
  SizeButton,
  SocialButton,
} from "../../../types/UiType";

export const buttonOption: Option[] = [
  {
    reference: "Buttons",
    details: (
      <>
        Bootstrap has a base{" "}
        <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
          {" "}
          .btn{" "}
        </button>
        class that sets up basic styles such as padding and content alignment.
        By default,
        <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
          .btn{" "}
        </button>
        controls have a transparent border and background color, and lack any
        explicit focus and hover styles.
      </>
    ),
  },
  {
    reference: "Variants",
    details: (
      <>
        Bootstrap includes several button variants, each serving its own
        semantic purpose, with a few extras thrown in for more control.
      </>
    ),
  },
  {
    reference: "Outline",
    details: (
      <>
        In need of a button, but not the hefty background colors they bring?
        Replace the default modifier classes with the
        <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
          .btn-outline-*
        </button>
        ones to remove all background images and colors on any button.
      </>
    ),
  },
  {
    reference: "Sizes",
    details: (
      <>
        Fancy larger or smaller buttons? Add
        <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
          .btn-lg
        </button>{" "}
        or
        <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
          .btn-sm
        </button>
        for additional sizes.
      </>
    ),
  },
  {
    reference: "Group",
    details: (
      <>
        FWrap a series of buttons with
        <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
          .btn
        </button>{" "}
        in
        <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
          .btn-group
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

export const buttons: IconButton[] = [
  { size: "w-5 h-5", iconSize: 10, color: "#3e97ff" },
  { size: "w-7 h-7", iconSize: 12, color: "#25b865" },
  { size: "w-9 h-9", iconSize: 15, color: "#d13b4c" },
  { size: "w-11 h-11", iconSize: 19, color: "#e49e3d" },
  { size: "w-[52px] h-[52px]", iconSize: 24, color: "#02a0e4" },
  { size: "w-[60px] h-[60px]", iconSize: 32, color: "#252f4a" },
];

export const buttonData: ButtonType[] = [
  { label: "Primary", color: "#3e97ff" },
  { label: "Secondary", color: "#505863" },
  { label: "Success", color: "#25b865" },
  { label: "Danger", color: "#d13b4c" },
  { label: "Warning", color: "#e49e3d" },
  { label: "Info", color: "#02a0e4" },
  { label: "Dark", color: "#252f4a" },
];

export const IconData: ButtonIconType[] = [
  { color: "#3e97ff" },
  { color: "#505863" },
  { color: "#25b865" },
  { color: "#d13b4c" },
  { color: "#e49e3d" },
  { color: "#02a0e4" },
  { color: "#252f4a" },
];

export const brandButtons: BrandButton[] = [
  { color: "#3b5998", icon: <Facebook size={20} /> },
  { color: "#1da1f2", icon: <Twitter size={20} /> },
  { color: "#e4405f", icon: <Instagram size={20} /> },
  { color: "#0e76a8", icon: <Linkedin size={20} /> },
  { color: "#c4302b", icon: <Youtube size={20} /> },
  { color: "#1f2328", icon: <Github size={20} /> },
];

export const socialButtons: SocialButton[] = [
  { color: "#3b5998", icon: <Facebook size={15} />, label: "Facebook" },
  { color: "#1da1f2", icon: <Twitter size={15} />, label: "Twitter" },
  { color: "#e4405f", icon: <Instagram size={15} />, label: "Instagram" },
  { color: "#0e76a8", icon: <Linkedin size={15} />, label: "LinkedIn" },
  { color: "#c4302b", icon: <Youtube size={15} />, label: "Youtube" },
  { color: "#1f2328", icon: <Github size={15} />, label: "Github" },
];

export const sizes: SizeButton[] = [
  { label: "button-xs", padding: "px-2 py-[2px]" },
  { label: "button-sm", padding: "px-[10px] py-[6px]" },
  { label: "button-md", padding: "px-4 py-2" },
  { label: "button-lg", padding: "px-5 py-[10px]" },
  { label: "button-xl", padding: "px-6 py-3" },
  { label: "button-xxl", padding: "px-7 py-[14px]" },
];
