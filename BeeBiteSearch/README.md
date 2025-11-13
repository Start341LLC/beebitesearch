# BeeBite.com - Affiliate Marketing Website

## 🐝 Project Overview

BeeBite.com is a friendly, bee-themed affiliate marketing website designed to help visitors discover the best services across multiple categories including real estate, insurance, and income tax preparation. The site features a clean vertical directory homepage, and each category page displays partner recommendations styled as authentic Google search results.

## 🎯 Business Model

The website monetizes organic traffic through affiliate partnerships:

1. **Traffic Routing**: Owned domains with organic traffic redirect to BeeBite subpages (e.g., `beebite.com/realestate`)
2. **Curated Results**: Each vertical displays 3 carefully selected partner services
3. **Affiliate Revenue**: Partner clicks generate revenue through affiliate programs
4. **Clean UX**: Search engine interface provides familiar, trustworthy user experience

## 📂 Project Structure

```
beebite/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   │   ├── BeeHero.tsx           # Homepage hero section
│   │   │   ├── ResultCard.tsx        # Partner result cards
│   │   │   ├── PageHeader.tsx        # Landing page header
│   │   │   └── PageFooter.tsx        # Site footer
│   │   ├── pages/         # Route pages
│   │   │   ├── home.tsx              # Homepage
│   │   │   ├── realestate.tsx        # Real estate vertical
│   │   │   ├── insurance.tsx         # Insurance vertical
│   │   │   └── incometax.tsx         # Income tax vertical
│   │   └── App.tsx        # Main app router
│   └── index.html         # HTML entry point
├── server/                # Backend (minimal for this project)
└── README.md             # This file
```

## 🚀 Tech Stack

- **Frontend**: React 18 + TypeScript
- **Routing**: Wouter (lightweight routing)
- **Styling**: Tailwind CSS + Shadcn UI components
- **Fonts**: Poppins (headings) + Inter (body)
- **Build**: Vite
- **Deployment**: Netlify

## 🎨 Design Highlights

- **Friendly Bee Theme**: Warm yellow/amber colors with custom bee mascot
- **Vertical Directory**: Clean homepage listing all service categories
- **Google-Style Results**: Authentic search result appearance (blue links, green URLs, gray descriptions)
- **Clean Typography**: Poppins for brand personality, Inter for readability
- **Responsive Design**: Mobile-first, works beautifully on all devices
- **Accessible**: Proper semantic HTML and ARIA labels

## 💻 Development Setup

### Prerequisites
- Node.js 20+
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd beebite
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5000`

## 📦 Building for Production

This project is optimized for static deployment on Netlify:

```bash
npm run build
```

The build output will be in the `dist/` folder.

## 🌐 Netlify Deployment

### Quick Deploy

1. **Build the project locally** (optional test):
   ```bash
   npm run build
   ```

2. **Push to GitHub**:
   - Initialize git repository if not already done
   - Add all files: `git add .`
   - Commit: `git commit -m "Initial BeeBite commit"`
   - Push to GitHub

3. **Deploy on Netlify**:
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect your GitHub repository
   - Netlify will automatically detect the `netlify.toml` configuration file
   - Click "Deploy site"
   
   **Manual configuration (if needed)**:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist/public`

4. **Custom Domain** (optional):
   - In Netlify dashboard, go to "Domain settings"
   - Add custom domain `beebite.com`
   - Follow DNS configuration instructions

### Environment Variables
Currently no environment variables needed. All affiliate links are hardcoded in page components.

## 🔄 Updating Affiliate Links

To update partner information or affiliate links, edit the respective page files:

- **Real Estate**: `client/src/pages/realestate.tsx`
- **Insurance**: `client/src/pages/insurance.tsx`
- **Income Tax**: `client/src/pages/incometax.tsx`

Each page contains a `partners` array with objects like:
```typescript
{
  name: 'Partner Name',
  url: 'www.partner.com',
  description: 'Partner description...',
  affiliateLink: 'https://affiliate-link-here',
}
```

Simply update the `affiliateLink` field with your affiliate tracking URLs.

## 📊 Adding New Verticals

To add a new category (e.g., `/travel`):

1. **Create new page**:
   ```typescript
   // client/src/pages/travel.tsx
   import { useLocation } from 'wouter';
   import PageHeader from '@/components/PageHeader';
   import ResultCard from '@/components/ResultCard';
   import PageFooter from '@/components/PageFooter';

   export default function TravelPage() {
     // ... copy structure from existing pages
   }
   ```

2. **Add route** in `client/src/App.tsx`:
   ```typescript
   <Route path="/travel" component={TravelPage} />
   ```

3. **Add button** to homepage in `client/src/components/BeeHero.tsx`:
   ```typescript
   { name: 'Travel', path: '/travel' }
   ```

## 🐛 Troubleshooting

### Build Issues
- Ensure Node.js version is 20 or higher
- Delete `node_modules` and `package-lock.json`, then reinstall
- Clear Vite cache: `rm -rf .vite`

### Images Not Loading
- Verify the bee mascot image path in components
- Rebuild the project to ensure assets are bundled

## 👤 Developer Experience Level

**Beginner-Friendly**: This project is designed for developers with minimal coding experience. The code is:
- Well-commented where helpful
- Uses modern best practices
- Organized in a logical structure
- Easy to modify without deep React knowledge

Key files to understand:
1. `client/src/App.tsx` - Main routing
2. `client/src/pages/*.tsx` - Individual pages
3. `client/src/components/*.tsx` - Reusable components

## 📝 License

All rights reserved. This is a private commercial project.

## 🤝 Support

For questions or issues, please refer to:
- [Netlify Documentation](https://docs.netlify.com)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)

---

**Built with 🐝 by BeeBite Team**
