SoftSell Marketing Website
A modern, responsive one-page marketing website for SoftSell, a fictional software resale startup. Built with Next.js (App Router), Tailwind CSS, and deployed on Vercel.
Features

Hero Section: Engaging headline, subheading, and two CTA buttons ("Get a Quote" links to Contact Form, "Sell Licenses" links to How It Works).
How It Works: Three-step process with Lucide icons.
Why Choose Us: Four feature tiles with icons highlighting benefits.
Testimonials: Two dummy customer reviews.
Contact Form: Form with frontend validation (Name, Email, Company, License Type, Message).
Responsive Design: Mobile-first layout with Tailwind CSS.
SEO: Metadata for title, description, and favicon.
Light/Dark Mode: Toggleable theme using next-themes.
Animations: Subtle transitions using Framer Motion.
Chat Widget: Mock AI-powered FAQ widget with hardcoded Q&A.
Deployment: Hosted on Vercel with a live link.

Design Choices

Tech Stack: Next.js (App Router) for modern React framework, Tailwind CSS for rapid styling, and Vercel for seamless deployment.
Color Palette: Blue (#2563eb, #1e3a8a) for trust, yellow (#facc15) for primary CTA, neutral grays for contrast.
Typography: Inter for body text (clean, readable), Poppins for headings (bold, modern).
Icons: Lucide React for lightweight, customizable icons.
Animations: Framer Motion for smooth section transitions and hover effects.
CTA Buttons: "Get a Quote" (yellow) links to Contact Form (#contact), "Sell Licenses" (blue) links to How It Works (#how-it-works) to guide users through the process.
Chat Widget: Mock implementation with static FAQs to simulate AI interaction.
Dark Mode: Implemented with next-themes for accessibility and user preference.

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
git commit -m "Update Sell Licenses to link to How It Works"
git push origin main


Deploy to Vercel

Install Vercel CLI: npm i -g vercel
Run: vercel --prod
Follow prompts to link the project to your Vercel account.
Vercel will provide a live URL (e.g., https://softsell-website.vercel.app).



Time Estimate

Initial Setup and Planning: 1 hour
Component Development: 4 hours
Styling and Responsiveness: 2 hours
Bonus Features (Dark Mode, Chat Widget, Animations): 2 hours
Adding Sell Licenses CTA and Fixing Navigation: 1 hour
Deployment and Documentation: 1 hour
Total: ~11 hours

Live Demo
SoftSell Website (Replace with your Vercel URL after deployment)
Future Improvements

Integrate a real AI chatbot using OpenAI API or LangChain.
Add form submission to a backend (e.g., Node.js, Supabase).
Enhance animations with more interactive elements.
Implement analytics tracking (e.g., Google Analytics).

