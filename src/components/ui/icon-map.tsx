import {
  Shapes,
  MessageCircleOff,
  NotebookPen,
  TrendingDown,
  Users,
  ClipboardList,
  MessageCircle,
  ChartColumn,
} from "lucide-react";

import { FaTelegram, FaInstagram, FaEnvelope } from "react-icons/fa";

const iconMap = {
  shapes: Shapes,
  users: Users,
  "message-circle": MessageCircle,
  "chart-column": ChartColumn,
  "clipboard-list": ClipboardList,
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
