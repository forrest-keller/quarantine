import { PoemProps } from "../components/poem";
import documentsImage from "../../public/images/documents.jpg";
import greenSpotImage from "../../public/images/green-spot.jpg";

export const poems: PoemProps[] = [
  {
    title: "Documents",
    imageAlt: "Image of documents on a wooden floor",
    imageSrc: documentsImage,
    number: 1,
    text: `How can they reduce a person to numbers?
Cold hands from above guide both reflections on the glass pane.
Does either party know the significance of what they hold?
Beneath the pulp, ink loses figure, diminished to reality.
The stamp marks: Approved.`,
  },
  {
    title: "Green Spot",
    imageAlt: "Image of two glasses with leaves in them.",
    imageSrc: greenSpotImage,
    number: 2,
    text: `Gray on brown on white on beige,
With all necessities tucked away.
Food brought forth to keep me going,
But wait! That herb stopped me for a moment.
Leafy, long, intricate and green,
It seems to me it just can't be eat.
So take it out, clean it, tuck it in a glass,
Look! Now it's going to last.`,
  },
];