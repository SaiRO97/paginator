export interface PaginatorStore {
  params: {
    category: Category[];
    activeCategoryId: number;
  };
  nextAction: () => void;
  prevAction: () => void;
  changeActiveCategory: (id: number) => void;
}

export interface Category {
  id: number;
  name: string;
}
