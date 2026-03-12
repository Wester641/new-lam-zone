# Project: X-Market DXB — E-Commerce Web App

## Overview

An e-commerce product catalog for **X-Market DXB** (laptop & mobile shop in Dubai). Built with React 19 + TypeScript + Vite. Currently a frontend-only prototype with static product data — no backend integration yet.

## Tech Stack

- **Framework:** React 19.1 + TypeScript 5.8
- **Build:** Vite 6.3
- **UI Library:** Material UI 7.1 (MUI) + MUI Joy 5.0-beta + MUI Icons
- **Styling:** SCSS Modules (`.module.scss`) + MUI Theme + Emotion CSS-in-JS
- **Routing:** React Router DOM 7.6 (BrowserRouter)
- **Forms:** React Hook Form 7.57
- **Carousel:** React Slick 0.30
- **HTTP:** Axios 1.9 (installed, not yet used)
- **Linting:** ESLint 9 + Prettier 3.5 + jsx-a11y

## Scripts

- `npm run dev` — start Vite dev server
- `npm run build` — TypeScript check + Vite build
- `npm run lint` — ESLint
- `npm run preview` — preview production build

## Project Structure

```
src/
├── components/
│   ├── common/        # Reusable UI: Button, Banner, Divider, AskForQuotation,
│   │                  #   AskForSupport, DetailInformation, HeaderComponent,
│   │                  #   FrequentlyAskedQuestions, ScrollToTop, Select,
│   │                  #   SliderImage, TermsOfService, UnderConstruction
│   ├── features/      # Feature-specific: ProductCard, CatalogueProducts,
│   │                  #   PriorityProduct, SimilarProducts, BestDeals,
│   │                  #   FeaturedProducts, SaleItem, ShopWithCategories,
│   │                  #   WatchesBanner, BlackFridayWidget, BottomMenuWidget,
│   │                  #   Filter (Category, PopularBrands, PopularTags),
│   │                  #   SupportSection, SocialItemsWidget, ContactUs
│   └── layout/        # HeaderLayout, FooterLayout
├── pages/
│   ├── homepage/          # HomePage — main landing (complete)
│   ├── catalogue/         # CataloguePage — product grid + sidebar filters (complete)
│   ├── products/          # ProductsDetailPage — single product view (complete)
│   ├── cart/              # CartPage — under construction
│   ├── favorites/         # FavoritesPage — under construction
│   ├── account/           # AccountPage — under construction
│   ├── terms_of_service/  # TermsOfServicePage
│   ├── FAQsPage/          # FAQsPage
│   └── customar_support_page/  # CustomerSupportPage
├── styles/
│   ├── global.scss        # Root CSS variables, font imports
│   ├── _variables.scss    # SCSS color/size variables
│   ├── _mixins.scss       # Reusable mixins (flex-center, transition, border)
│   ├── _reset.scss        # normalize.css import
│   └── theme.ts           # MUI createTheme config
├── utils/
│   └── Constans.ts        # Countries list (typo in filename — should be Constants)
├── assets/                # Static images and icons (local + Cloudinary CDN)
├── App.tsx                # Route definitions
├── main.tsx               # Entry point (ThemeProvider + App)
└── App.css / index.css    # Legacy global CSS (mostly unused)

products.ts (root)         # Static product data array (hardcoded)
structures.ini (root)      # Planned folder structure reference (in Russian)
```

## Routes

| Path                | Component           | Status             |
| ------------------- | ------------------- | ------------------ |
| `/`                 | HomePage            | Complete           |
| `/catalogue`        | CataloguePage       | Complete           |
| `/product/:id`      | ProductsDetailPage  | Complete           |
| `/cart`             | CartPage            | Under construction |
| `/favorites`        | FavoritesPage       | Under construction |
| `/account`          | AccountPage         | Under construction |
| `/terms-of-service` | TermsOfServicePage  | Complete           |
| `/fAQs-page`        | FAQsPage            | Complete           |
| `/customer-support` | CustomerSupportPage | Complete           |

## Design Tokens

- **Primary:** `#1976d2` (blue)
- **Secondary:** `#424242` (dark gray)
- **Orange accent:** `#fa8232`
- **Yellow accent:** `#ebc80c`
- **Background:** `#f5f5f5`
- **Border:** `#e4e7e9`
- **Font:** Roboto, sans-serif
- **Breakpoints:** xs:0, sm:375, md:768, lg/xl:1440

## Product Data Shape

```ts
{
  id: number;
  stock_state: string;
  total_stock: number;
  rating: string;
  reviewCount: string;
  title: string;
  shop_name: string;        // "X-Market DXB"
  price: number;
  old_price: string;
  new_price: string;
  image: string;           // Cloudinary URL
  delivered_by: string;
  discount: string;
  sku: string;
  description: string;
  specifications: { spec_images: string[] };
  colors: string[];
  tags: string[];
}
```

## Conventions

- **Component files:** PascalCase (`HomePage.tsx`)
- **Style modules:** PascalCase + `.module.scss` (`HomePage.module.scss`)
- **Folder names:** mixed (snake_case, kebab-case, PascalCase — inconsistent, needs standardizing)
- **Exports:** default exports throughout
- **State:** component-local only — no global state management yet

## Known Issues & Gaps

1. **No state management** — no Redux/Zustand/Context for cart, favorites, auth
2. **No API layer** — product data is a static array in `products.ts`
3. **Duplicate components** — ProductCard, CatalogueProducts, PriorityProduct are nearly identical
4. **No error boundaries**
5. **Some `any` types** instead of proper interfaces
6. **No lazy loading** on routes
7. **Forms log to console** but don't submit anywhere
8. **Inconsistent folder naming** across the project
9. **Filename typo:** `Constans.ts` → should be `Constants.ts`
