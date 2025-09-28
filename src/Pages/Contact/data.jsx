// src/Pages/Contact/data.jsx
import React from 'react';
import { FaEnvelope, FaBookOpen, FaMapMarkerAlt } from 'react-icons/fa';

export const contactDetails = [
  {
    icon: <FaEnvelope />,
    title: "Email Us",
    lines: [
      "Get in touch with our team for support or sales inquiries."
    ],
    link: { href: "mailto:info@tensorgo.com", text: "info@tensorgo.com" }
  },
  {
    icon: <FaBookOpen />,
    title: "Knowledge Base",
    lines: [
      "Find answers to common questions and learn how to get the most out of Go-X."
    ],
    link: { href: "#", text: "Visit our Help Center" }
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Find our office",
    lines: [
      "TensorGo Software Pvt. Ltd.",
      "4th and 11th Floor, The Platina, A- Block,",
      "Main Road Kondapur, Gachibowli,",
      "Hyderabad, Telangana, 500032"
    ]
  }
];