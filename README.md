#  Paragraph Component

A highly reusable and scalable **Paragraph UI component** built with **React**, **Tailwind CSS**, and **class-variance-authority (CVA)**.  
It provides a clean way to manage typography styles using a variant-based system, similar to modern UI libraries like **shadcn/ui**.

---

##  Overview

This component solves the problem of messy `className` conditions in React by introducing a **structured styling system**:

- Instead of writing conditional Tailwind classes manually
- You define styles once using `cva`
- Then reuse them through simple props like `variant` and `size`

---

## ✨ Features

-  Multiple style variants (`default`, `success`, `error`)
-  Flexible typography sizes (`sm`, `md`, `lg`)
-  Built using `class-variance-authority` (clean variant system)
-  Supports polymorphic rendering using `asChild`
-  Smart Tailwind merging using `cn` utility
-  Fully reusable and scalable component design

---

##  Installation

Install required dependencies:

```bash
npm install class-variance-authority clsx tailwind-merge @radix-ui/react-slot
