# PLEUNTAH Website Implementation Plan

## Goal Description
Create a modern, responsive, and dark-themed website for the German YouTuber and Rapper PLEUNTAH. The site will feature his discography, videos, biography, and contact information, built with Next.js, TypeScript, and Tailwind CSS.

## User Review Required
> [!IMPORTANT]
> Please review the design choices (Neon Blue/Purple accents) and the structure of the data files.

## Proposed Changes

### Project Structure
- Initialize Next.js app (App Router)
- Configure Tailwind CSS for Dark Mode and Custom Colors

### Data Layer
#### [NEW] [releases.ts](file:///Volumes/SSD/Entwicklung/pleuntah/data/releases.ts)
- Define `Release` interface
- Populate with real-world data (EPs, Albums, Singles)

#### [NEW] [videos.ts](file:///Volumes/SSD/Entwicklung/pleuntah/data/videos.ts)
- Define `Video` interface
- Populate with YouTube formats

#### [NEW] [socials.ts](file:///Volumes/SSD/Entwicklung/pleuntah/data/socials.ts)
- Define social links constants

### Components
#### [NEW] [Navbar.tsx](file:///Volumes/SSD/Entwicklung/pleuntah/components/Navbar.tsx)
- Sticky navigation with logo and links

#### [NEW] [Footer.tsx](file:///Volumes/SSD/Entwicklung/pleuntah/components/Footer.tsx)
- Copyright and social icons

#### [NEW] [ReleaseCard.tsx](file:///Volumes/SSD/Entwicklung/pleuntah/components/ReleaseCard.tsx)
- Display individual release info

#### [NEW] [VideoCard.tsx](file:///Volumes/SSD/Entwicklung/pleuntah/components/VideoCard.tsx)
- Display video embed/thumbnail

### Pages
#### [NEW] [page.tsx](file:///Volumes/SSD/Entwicklung/pleuntah/app/page.tsx)
- Hero section, Latest Releases, Popular Songs, Popular Videos

#### [NEW] [music/page.tsx](file:///Volumes/SSD/Entwicklung/pleuntah/app/music/page.tsx)
- Full discography with filters

#### [NEW] [videos/page.tsx](file:///Volumes/SSD/Entwicklung/pleuntah/app/videos/page.tsx)
- Video gallery

#### [NEW] [about/page.tsx](file:///Volumes/SSD/Entwicklung/pleuntah/app/about/page.tsx)
- Biography and milestones

#### [NEW] [contact/page.tsx](file:///Volumes/SSD/Entwicklung/pleuntah/app/contact/page.tsx)
- Contact form

## Verification Plan

### Automated Tests
- Run `npm run build` to ensure type safety and build success.
- Run `npm run lint` to check for code style issues.

### Manual Verification
- Verify the "Dark Mode" aesthetic.
- Check responsiveness on mobile and desktop sizes.
- Navigate through all links (Home, Music, Videos, About, Contact).
- Verify data rendering matches the provided real-world info.
