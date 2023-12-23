export type TIngredient = {
  calories: number;
  carbohydrates: number;
  fat: number;
  image: string;
  image_large: string;
  image_mobile: string;
  name: string;
  price: number;
  proteins: number;
  type: string;
  _id: string;
  id?: string;
  index: number;
  key: string;
};

export type TOrder = {
  _id: string;
  createdAt: string;
  ingredients: Array<string>;
  name: string;
  number: number;
  status: string;
  updatedAt: string;
};

export type TFillingElement = {
  item: TIngredient;
  index: number;
  id: string;
  moveCard: (
    dragIndex: number,
    hoverIndex: number,
    burgerInfill: boolean
  ) => void;
};

export type BurgerConstTotalProps = {
  burgerInfill: TIngredient[];
};

export type TFullPriceElement = {
  item: TIngredient;
  index: number;
  id: string;
  price: number;
  closeModal: () => void;
  title: string;
};

export type TCardElement = {
  item: TIngredient;
  index: number;
  _id: string;
  onClick: () => void;
  key: string;
};

export type TCardListElement = {
  data: TIngredient[];
  id: string;
  handleOpenModal: (item: TIngredient) => void;
};

export type FormFooterLinksProps = {
  infoText: string;
  children: React.ReactNode;
};

export type ModalProps = {
  closeModal: () => void; // Assuming closeModal is a function that takes no arguments and returns nothing
  children: React.ReactNode; // React.ReactNode covers anything that is renderable
  header?: string;
  title?: string;
};

export type TNavigationLink = {
  text: string;
  children: JSX.Element;
  active: boolean;
  link: string;
};

export interface IProtected {
  onlyUnAuth?: boolean;
  component: JSX.Element;
}

export interface INotProtected {
  component: JSX.Element;
}

export type TWSMessage = {
  orders: TOrder[];
  success: boolean;
  total: number;
  totalToday: number;
};

export type NavigateButtonProps = {
  onClick: () => void;
  label: string;
};

export type TUser = {
  email: string;
  name: string;
};