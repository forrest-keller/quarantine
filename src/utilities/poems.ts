import { PoemProps } from "../components/poem";
import documentsImage from "../../public/images/documents.jpg";
import greenSpotImage from "../../public/images/green-spot.jpg";
import reflectionsImage from "../../public/images/reflections.jpg";
import movementImage from "../../public/images/movement.jpg";
import uniformityImage from "../../public/images/uniformity.jpg";
import evacuationPlanImage from "../../public/images/evacuation-plan.jpg";

export const poems: PoemProps[] = [
  {
    title: "Documents",
    imageAlt: "Documents on a wooden floor",
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
    imageAlt: "Two glasses with leaves in them.",
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
  {
    title: "Reflections",
    imageAlt: "Reflections on glass in building.",
    imageSrc: reflectionsImage,
    number: 3,
    text: `I stare at reflections of worlds that must exist,
With time to think about questions that persist.
Like how come some glass reflects distorted views,
While others are clear when the day comes anew?
Like who decided where the sky began,
Is it me when I move my head?
Maybe if I move enough away,
I won't see reflections, just a real gaze.`,
  },
  {
    title: "Movement",
    imageAlt: "Top-down view of one car and a motorbike in Vietnam.",
    imageSrc: movementImage,
    number: 4,
    text: `And so they move quickly forwards,
With drive, purpose, and ambition.
And yet I move slowly nowhere
With wistful yearning to guide me.

We live in different worlds.`,
  },
  {
    title: "Uniformity",
    imageAlt: "Side view of intersection between wooden boards on a wall.",
    imageSrc: uniformityImage,
    number: 5,
    text: `It appears the rooms are uniform,
The same table, curtain, shelf.
But no, it's not all to a norm,
Says the crack that's asking for help.
Maybe, he thinks, each room is unique to itself.`,
  },
  {
    title: "Evacuation Plan",
    imageAlt: "Hotel evacuation plan hung on wall.",
    imageSrc: evacuationPlanImage,
    number: 6,
    text: `Sit
Wait
Stare
Start Thinking
Stop Thinking
Do Something
Sleep
Leave`,
  },
];
