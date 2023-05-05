import { GiHighGrass, GiGardeningShears, GiWaterDrop } from "react-icons/gi";
import { TbShovel } from "react-icons/tb";

const services = [
  {
    id: 1,
    icon: GiHighGrass,
    heading: "Lawn Maint",
    text: "Bi-weekly mowing and weed wacking of lawns. Also including overseeding and lawn installs",
  },
  {
    id: 2,
    icon: GiGardeningShears,
    heading: "Trimming",
    text: "Cutting back overgrown foliage as well as trimming hedges, laurels, cedars, and yews",
  },
  {
    id: 3,
    icon: TbShovel,
    heading: "Garden Maint",
    text: "Garden clean ups, weeding, soil, mulch, and rock delivery",
  },
  {
    id: 4,
    icon: GiWaterDrop,
    heading: "Power Washing",
    text: "All ground surfaces pressure washed such as decks, walkways, and driveways",
  },
];

export default services;
