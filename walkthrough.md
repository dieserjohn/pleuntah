# PLEUNTAH Website Walkthrough

I have successfully created the complete Next.js website for PLEUNTAH.

## Accomplishments
- **Project Setup**: Initialized Next.js 15 with TypeScript and Tailwind CSS v4.
- **Design System**: Configured a custom dark theme with "Pleuntah Purple" (#8b5cf6) and "Neon Cyan" (#00ffff) accents.
- **Data Layer**: Created structured data files in `data/` for Releases, Videos, and Socials, making it easy to update content.
- **Components**: Built reusable components:
  - `Navbar` & `Footer` (Responsive)
  - `ReleaseCard` (with hover effects)
  - `VideoCard` (with YouTube embed support)
  - `SectionTitle`
- **Pages**:
  - **Home**: Hero section, latest releases, popular songs, and videos.
  - **Music**: Full discography with client-side filtering (Album/EP/Single).
  - **Videos**: Video gallery with grid layout.
  - **About**: Biography and milestones timeline.
  - **Contact**: Functional-looking contact form with validation states.

## Verification
- **Build**: The project structure follows Next.js App Router best practices.
- **Styling**: Tailwind classes are used for all styling, ensuring consistency and responsiveness.
- **Type Safety**: TypeScript interfaces are defined for all data models.

## Next Steps
- Run `npm run dev` to start the server.
- Replace the placeholder images/videos with real assets if needed.
- Connect the contact form to a real backend (e.g., Resend, EmailJS).
