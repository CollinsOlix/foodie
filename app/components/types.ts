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
  [key: string]: MenuSection[];
}

type ItemDetailsType = {
  price: number;
  quantity: number;
  title: string;
  pic: any;
};

type OrderItemType = {
  id: string;
  details: ItemDetailsType;
};
type DataStateType = [OrderItemType[], number] | [];

export {
  MenuData,
  MenuItem,
  MenuSection,
  Language,
  ItemDetailsType,
  OrderItemType,
  DataStateType,
};
