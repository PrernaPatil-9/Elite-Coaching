import React from "react";
import "./WhatsAppChat.css";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppChat = () => {
  return (
    // ✅ WhatsApp floating button with a tooltip
    <a
      href="https://wa.me/919022554488" // 🔹 Replace with your WhatsApp number
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp className="whatsapp-icon" />
      {/* Tooltip text */}
      <span className="tooltip-text">Chat with us</span>
    </a>
  );
};

export default WhatsAppChat;
