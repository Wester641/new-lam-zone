# Project: X-Market DXB — E-Commerce Web App

## Overview

An e-commerce product catalog for **X-Market DXB** (laptop & mobile shop in Dubai). Built with React 19 + TypeScript + Vite. Currently a frontend-only prototype with static product data — no backend integration yet.

- **Domain:** [techsale.online](https://techsale.online)
- **Business model:** Single store (not a marketplace), B2B wholesale
- **Target audience:** B2B wholesale buyers
- **Key user action:** Request a quote (no online payment)
- **No cart/checkout flow** — users contact the store for pricing

## Tech Stack

- **Framework:** React 19.1 + TypeScript 5.8
- **Build:** Vite 6.3
- **UI Library:** Material UI 7.1 (MUI) + MUI Joy 5.0-beta + MUI Icons
- **Styling:** SCSS Modules (`.module.scss`) + MUI Theme + Emotion CSS-in-JS
- **Routing:** React Router DOM 7.6 (BrowserRouter)
- **Forms:** React Hook Form 7.57
- **Carousel:** React Slick 0.30
- **State Management:** Zustand (cart + favorites stores)
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
├── api/
│   └── products.ts        # Service layer wrapping static product data
├── types/
│   └── product.ts         # Shared Product interface
├── store/
│   ├── cartStore.ts       # Zustand cart store (add/remove/update/clear)
│   └── favoritesStore.ts  # Zustand favorites store (add/remove/toggle)
├── components/
│   ├── common/            # Reusable UI: button, banner, divider, ask_for_quotation,
│   │                      #   ask_for_support, detail_informations, header_components,
│   │                      #   frequently_asked_questions, scroll_to_top, select,
│   │                      #   slider_image, terms_of_service, developing
│   ├── features/          # Feature-specific: products (ProductCard with variants),
│   │                      #   similar_products, BestDeals, FeaturedProducts,
│   │                      #   SaleItem, ShopWithCategories, watches_banner,
│   │                      #   BlackFridayWidget, BottomMenuWidget,
│   │                      #   filter (category, popular_brands, popular_tags),
│   │                      #   support_section, social_items_header, contact_us
│   └── layout/            # HeaderLayout, FooterLayout
├── pages/
│   ├── homepage/              # HomePage — main landing (complete)
│   ├── catalogue/             # CataloguePage — product grid + sidebar filters (complete)
│   ├── products/              # ProductsDetailPage — single product view (complete)
│   ├── cart/                  # CartPage — under construction
│   ├── favorites/             # FavoritesPage — under construction
│   ├── account/               # AccountPage — under construction
│   ├── terms_of_service/      # TermsOfServicePage
│   ├── faqs_page/             # FAQsPage
│   └── customer_support_page/ # CustomerSupportPage
├── styles/
│   ├── global.scss        # Root CSS variables, font imports
│   ├── _variables.scss    # SCSS color/size variables
│   ├── _mixins.scss       # Reusable mixins (flex-center, transition, border)
│   ├── _reset.scss        # normalize.css import
│   └── theme.ts           # MUI createTheme config
├── utils/
│   └── Constants.ts       # Countries list
├── assets/                # Static images and icons (local + Cloudinary CDN)
├── App.tsx                # Route definitions (lazy-loaded)
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
- **Main mobile size:** 375px (primary mobile target for responsive design)

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
  price: number | string;
  old_price: string;
  new_price: string;
  image: string;           // Cloudinary URL
  delivered_by?: string;
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
- **Folder names:** snake_case (`ask_for_quotation/`, `best_deals/`, `customer_support_page/`)
- **Exports:** default exports throughout
- **State:** Zustand stores for cart and favorites

## Known Issues & Gaps

1. **No error boundaries**
2. **Forms log to console** but don't submit anywhere
3. **Cart/Favorites/Account pages** — under construction
