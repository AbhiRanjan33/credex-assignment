SoftSell Marketing Website
A modern, responsive one-page marketing website for SoftSell, a fictional software resale startup. Built with Next.js (App Router), Tailwind CSS, and deployed on Vercel as part of the Credex Web Development Internship Assignment.
Features

Hero Section: 

Engaging headline: "Sell Your Software Licenses with Ease" and subheading: "Get top value for your unused software licenses in just a few clicks."
Two CTA buttons: "Get a Quote" (links to Contact Form, #contact) and "Sell Licenses" (links to How It Works, #how-it-works).
Added a logo above the headline with theme-specific background colors (#1F53DD for light mode, #1D3072 for dark mode).


How It Works: 

Three-step process: "Upload License", "Get Valuation", "Get Paid".
Uses Lucide React icons for visual representation.
Added a logo above the section with theme-specific background colors (#1F53DD for light mode, #1D3072 for dark mode).


Why Choose Us: 

Four feature tiles: "Secure Transactions", "Fast Valuations", "Expert Support", and "Competitive Offers".
Each tile includes a Lucide icon and a short description.


Testimonials: 

Two dummy customer reviews:
John Smith, IT Manager at TechCorp: "SoftSell made selling our unused licenses a breeze. Fast, secure, and great value!"
Sarah Johnson, Procurement Lead at Innovate Ltd: "The process was seamless, and the support team was incredibly helpful."




Contact Form: 

Fields: Name, Email, Company (optional), License Type (dropdown: Microsoft, Adobe, Autodesk, Other), Message.
Frontend validation: Ensures Name, Email (valid format), and License Type are filled.
Displays a success alert on submission (logs to console, no backend).


Responsive Design: 

Mobile-first layout using Tailwind CSS.
Tested on mobile, tablet, and desktop screen sizes.


SEO: 

Metadata for title ("SoftSell - Sell Your Software Licenses") and description.
Added a favicon (assumed placeholder, as no specific favicon was provided).


Light/Dark Mode: 

Toggleable theme using next-themes.
Fixed ThemeToggle component to always be present on reload.
Logo backgrounds adapt to theme: #1F53DD (light mode) and #1D3072 (dark mode).
Consistent color schemes across all sections for light and dark modes.


Animations: 

Subtle transitions using Framer Motion.
Entrance animations for section headings, cards, and CTAs.
Hover effects on buttons, icons, and cards (e.g., scale, rotate, translate).
Fixed duplicate animate and transition props in ThemeToggle for smoother animations.


Chat Widget: 

Mock AI-powered FAQ widget with hardcoded Q&A.
Example questions: "How do I sell my license?", "Is the process secure?", "How long does it take to get paid?".
Responses are static (no real LLM integration due to assignment scope).
Features a loading animation, smooth scrolling, and theme-aware styling.


Footer:

Social media links (GitHub, Twitter, LinkedIn) with icons.
"Scroll to Top" button with animation.
Copyright notice: "© 2025 SoftSell. All rights reserved."


Deployment: 

Hosted on Vercel with a live link (replace with your Vercel URL after deployment).



Design Choices

Tech Stack: 

Next.js (App Router) for a modern React framework with file-based routing.
Tailwind CSS for rapid, utility-first styling.
Vercel for seamless deployment and hosting.


Color Palette: 

Blues (#2563eb, #1e3a8a, #1F53DD for light mode logo, #1D3072 for dark mode logo) to convey trust and professionalism.
Yellow (#facc15) for primary CTAs to draw attention.
Neutral grays for contrast and background elements in light/dark modes.


Typography: 

Inter for body text (clean, readable).
Poppins for headings (bold, modern).


Icons: 

Lucide React for lightweight, customizable icons across sections (e.g., Upload, DollarSign, Shield).


Animations: 

Used Framer Motion for smooth entrance animations (fade-in, slide-in) and hover effects (scale, rotate).
Staggered animations for cards and buttons to enhance user experience.
Fixed animation conflicts in ThemeToggle by combining animate and transition props.


CTA Buttons: 

"Get a Quote" (yellow) links to Contact Form (#contact).
"Sell Licenses" (blue) links to How It Works (#how-it-works) to guide users through the process.


Chat Widget: 

Mock implementation with static FAQs to simulate AI interaction.
Positioned in the bottom-right corner with a toggleable panel.
Theme-aware styling for light/dark modes (e.g., background, text colors).


Dark Mode: 

Implemented with next-themes for accessibility and user preference.
Adjusted backgrounds, text colors, and button gradients for each section.
Logo background colors (#1F53DD for light, #1D3072 for dark) enhance visual consistency.


Logos:

Added placeholder logos above Hero and How It Works sections.
Theme-specific background colors for logos to match the design palette.
Ensured logos are responsive and animated on load/scroll.



Setup Instructions

Clone the Repository
git clone https://github.com/your-username/softsell-website.git
cd softsell-website


Install Dependencies
npm install


Run Development Server
npm run dev

Open http://localhost:3000 in your browser.

Build for Production
npm run build
npm run start



Deployment Instructions

Push to GitHub
git add .
git commit -m "Final updates for SoftSell website"
git push origin main


Deploy to Vercel

Install Vercel CLI:npm i -g vercel


Deploy:vercel --prod


Follow prompts to link the project to your Vercel account.
Vercel will provide a live URL (e.g., https://softsell-website.vercel.app).



Time Estimate

Initial Setup and Planning: 1 hour
Component Development (Hero, How It Works, Why Choose Us, Testimonials, Contact Form, Footer): 4 hours
Styling and Responsiveness: 2 hours
Bonus Features (Dark Mode, Chat Widget, Animations): 2 hours
Adding Sell Licenses CTA and Fixing Navigation: 1 hour
Adding Logos and Theme-Specific Backgrounds: 1 hour
Fixing ThemeToggle and Animations: 0.5 hours
Deployment and Documentation: 1 hour
Total: ~11.5 hours

Live Demo
SoftSell Website(Replace with your Vercel URL after deployment)
Future Improvements


Backend Integration: Add form submission to a backend (e.g., Node.js, Supabase) to store lead data.
Enhanced Animations: Introduce more interactive elements (e.g., scroll-triggered animations, parallax effects).
Analytics Tracking: Implement Google Analytics or similar for user behavior tracking.
Custom Logo/Favicon: Design a custom logo and favicon specific to SoftSell branding.
Accessibility Improvements: Enhance screen reader support (e.g., aria-labels for interactive elements).

Submission Details

GitHub Repository: https://github.com/AbhiRanjan33/credex-assignment
Live URL:https://credex-assignment-red.vercel.app/

