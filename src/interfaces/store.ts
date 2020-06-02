export interface stores {
  PaginatorStore: {
    params: {
      count: number;
      category: Category[];
    };
    nextAction: () => void;
  };
}

export interface Category {
  id: number;
  name: string;
}
