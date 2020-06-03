export interface PaginatorStore {
  params: {
    category: Category[];
    activeCategoryId: number;
    //maxCategoryItems: 10;
  };
  changeActiveCategory: (id: number) => void;
  setPage: (id: number) => void;
}

export interface Category {
  id: number;
  name: string;
}
