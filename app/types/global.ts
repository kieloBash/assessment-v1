export interface ILayoutProps {
  children: React.ReactNode;
}

export type NavigationTypes =
  | "start"
  | "search"
  | "new"
  | "slots"
  | "live"
  | "jackpots";

export type CategoriesType = NavigationTypes;

export interface GameProviderType {
  id: string;
  juego: number;
  name: string;
  logo: any;
}

export interface GameType {
  id: string;
  name: string;
  providerId: string;
  category: CategoriesType;
  image: any;
}
