Verano Caluroso — Hotel Booking & Website
A minimal full-stack hotel demo: static marketing pages on the front and a small Express + SQLite API behind a booking widget. It supports availability checks, simple reservations with inventory locking, and seeded data for quick testing.
This project is for learning/demo purposes.
Features
• 🗓 Availability & Booking — check date ranges and create reservations; inventory is decremented per night.
• 🏨 Room Types — normal, deluxe, king with capacities (2/3/4) and base prices (₺2,500 / ₺5,500 / ₺8,500).
• 🧾 Reservation IDs — generated like VC-000123 on success.
• 💾 SQLite — auto-created hotel.db with seed data (next 60 days of inventory).
• 🌐 CORS on API — easy local development.
• 🖥 Static Frontend — index.html, rooms.html, rezervation.html, about.html, amentities.html plus styles.css and scripts.js.
• 🗺 TRY currency — nightly prices and totals return in Turkish Lira.
Tech Stack
• Backend: Node.js + Express 5 (CommonJS), better-sqlite3, CORS
• Database: SQLite (file: hotel.db), seeded on boot
• Frontend: Plain HTML/CSS/JS (booking page uses Flatpickr)
Project Structure (simplified)
/
├─ server.js            # Express API (port 3000)
├─ db.js                # SQLite schema + seed (rooms, inventory, reservations)
├─ package.json         # scripts: start/dev
├─ index.html           # Landing page (hero, features)
├─ rooms.html           # Room cards + link to reservation
├─ rezervation.html     # Booking UI (date pickers, API calls)
├─ about.html           # About page
├─ amentities.html      # Amenities grid
├─ styles.css           # Styles for all pages
└─ scripts.js           # Small UI interactions/animations
Getting Started
Prerequisite: Node.js 18+
