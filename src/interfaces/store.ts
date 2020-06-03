export interface PaginatorStore {
  params: {
    category: Category[];
    activeCategoryId: number;
    windowWidth: number;
  };
  setWindowSize: (windowSize: number) => void;
  setPage: (id: number) => void;
}

export interface Category {
  id: number;
  name: string;
}
