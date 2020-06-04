export interface PaginatorStore {
  params: {
    category: ICategory[];
    activeCategoryId: number;
    windowWidth: number;
  };
  setWindowSize: (windowSize: number) => void;
  setPage: (id: number) => void;
}

export interface IParams {
  category: ICategory[];
  activeCategoryId: number;
  windowWidth: number;
  limit: number;
}

export interface ICategory {
  id: number;
  name: string;
}
