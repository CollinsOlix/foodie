type Language = "en" | "tr";

interface MenuItem {
  title?: string;
  price?: string;
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

export { MenuData, MenuItem, MenuSection, Language };
