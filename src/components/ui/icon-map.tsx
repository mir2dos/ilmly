import {
  Shapes,
  MessageCircleOff,
  NotebookPen,
  TrendingDown,
} from "lucide-react";

import { FaTelegram, FaInstagram, FaEnvelope } from "react-icons/fa";

const iconMap = {
  shapes: Shapes,
  "message-circle-off": MessageCircleOff,
  "notebook-pen": NotebookPen,
  "trending-down": TrendingDown,
};

const socialIconMap = {
  telegram: FaTelegram,
  instagram: FaInstagram,
  mail: FaEnvelope,
};

export { socialIconMap };

export default iconMap;
