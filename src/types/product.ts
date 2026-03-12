export interface Product {
  id: number;
  stock_state: string;
  total_stock: number;
  rating: string;
  reviewCount: string;
  title: string;
  shop_name: string;
  price: number | string;
  old_price: string;
  new_price: string;
  image: string;
  delivered_by?: string;
  discount: string;
  sku: string;
  description: string;
  specifications: {
    spec_images: string[];
  };
  colors: string[];
  tags: string[];
}
