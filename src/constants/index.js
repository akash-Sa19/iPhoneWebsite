import {
  blackImg,
  blueImg,
  highlightFirstVideo,
  highlightFourthVideo,
  highlightSecondVideo,
  highlightThirdVideo,
  main24mmImg,
  main28mmImg,
  main35mmImg,
  telephoto120mmImg,
  telephoto48mmImg,
  ultraWide13mmImg,
  ultraWideMacroImg,
  whiteImg,
  yellowImg,
} from "../utils";

export const navLists = ["Store", "Mac", "iPhone", "Support"];

export const hightlightsSlides = [
  {
    id: 1,
    textLists: [
      "Enter A17 Pro.",
      "Game‑changing chip.",
      "Groundbreaking performance.",
    ],
    video: highlightFirstVideo,
    videoDuration: 4,
  },
  {
    id: 2,
    textLists: ["Titanium.", "So strong. So light. So Pro."],
    video: highlightSecondVideo,
    videoDuration: 5,
  },
  {
    id: 3,
    textLists: [
      "iPhone 15 Pro Max has the",
      "longest optical zoom in",
      "iPhone ever. Far out.",
    ],
    video: highlightThirdVideo,
    videoDuration: 2,
  },
  {
    id: 4,
    textLists: ["All-new Action button.", "What will yours do?."],
    video: highlightFourthVideo,
    videoDuration: 3.63,
  },
];

export const models = [
  {
    id: 1,
    title: "iPhone 15 Pro in Natural Titanium",
    color: ["#8F8A81", "#ffe7b9", "#6f6c64"],
    img: yellowImg,
  },
  {
    id: 2,
    title: "iPhone 15 Pro in Blue Titanium",
    color: ["#53596E", "#6395ff", "#21242e"],
    img: blueImg,
  },
  {
    id: 3,
    title: "iPhone 15 Pro in White Titanium",
    color: ["#C9C8C2", "#ffffff", "#C9C8C2"],
    img: whiteImg,
  },
  {
    id: 4,
    title: "iPhone 15 Pro in Black Titanium",
    color: ["#454749", "#3b3b3b", "#181819"],
    img: blackImg,
  },
];

export const sizes = [
  { label: '6.1"', value: "small" },
  { label: '6.7"', value: "large" },
];

export const footerLinks = [
  "Privacy Policy",
  "Terms of Use",
  "Sales Policy",
  "Legal",
  "Site Map",
];

export const cameraPhotoSlides = [
  {
    id: 1,
    zoom: "0.5x",
    text: "Ultra Wide | Macro",
    img: window.innerWidth < 768 ? ultraWideMacroImg : ultraWideMacroImg,
  },
  {
    id: 2,
    zoom: "0.5x",
    text: "Ultra Wide | 13mm",
    img: ultraWide13mmImg,
  },
  {
    id: 3,
    zoom: "1x",
    text: "Main | 24mm",
    img: main24mmImg,
  },
  {
    id: 4,
    zoom: "1x",
    text: "Main | 28 mm",
    img: main28mmImg,
  },
  {
    id: 5,
    zoom: "1x",
    text: "Main | 35mm",
    img: main35mmImg,
  },
  {
    id: 6,
    zoom: "2x",
    text: "Telephoto | 48mm",
    img: telephoto48mmImg,
  },
  {
    id: 7,
    zoom: "New 5x",
    text: "Telephoto | 120mm",
    img: telephoto120mmImg,
  },
];
