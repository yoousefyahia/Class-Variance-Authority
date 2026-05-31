A reusable and flexible Paragraph component built with React, Tailwind CSS, and class-variance-authority (CVA).
It supports multiple variants, sizes, and the ability to render as different HTML elements using Radix Slot.

✨ Features
🎨 Multiple style variants (default, success, error)
📏 Flexible text sizes (sm, md, lg)
🔁 Reusable and scalable design
⚡ Built with class-variance-authority for clean variant handling
🔧 Utility function cn for smart Tailwind class merging
🧩 Supports asChild using Radix Slot
📦 Installation

Make sure you have the required dependencies:

npm install class-variance-authority clsx tailwind-merge @radix-ui/react-slot
📁 File Structure
components/
 └── ui/
      └── paragraph.jsx

lib/
 └── utils.js
🧠 How It Works

The component uses cva to define style variants:

variant → controls text color
size → controls font size

It also uses a cn helper to merge Tailwind classes safely.
