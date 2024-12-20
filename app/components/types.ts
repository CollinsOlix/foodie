type Language = "en" | "tr";

interface MenuItem {
  title?: string;
  price?: number;
  time?: string;
  pic?: any;
  subNote?: string;
  id?: number;
}

interface MenuSection {
  title: string;
  data: MenuItem[];
}

interface MenuData {
  en: MenuSection[];
  tr: MenuSection[];
}

type ItemDetailsType = {
  price: number;
  quantity: number;
  title: string;
  pic: any;
};

export { MenuData, MenuItem, MenuSection, Language, ItemDetailsType };
