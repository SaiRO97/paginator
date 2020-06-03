export interface PaginatorStore {
  params: {
    category: Category[];
    activeCategoryId: number;
  };
  setPage: (id: number) => void;
}

export interface Category {
  id: number;
  name: string;
}
