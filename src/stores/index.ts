import { createContext } from "react";
import { action, observable } from "mobx";
import { category } from "../consts/category";
import { WINDOW_SIZES } from "../consts/windowSize";
import { ICategory, IParams } from "../interfaces/store";

class PaginationStore {
  @observable public params: IParams = {
    category,
    activeCategoryId: 1,
    windowWidth: WINDOW_SIZES.X,
    limit: 0,
  };

  @action setPage = (categoryId: number) => {
    this.params.activeCategoryId = categoryId;
    const currentPage: number = this.params.activeCategoryId;

    let startPage: number = 0;
    let endPage: number = this.params.limit;

    if (currentPage > this.params.limit) {
      startPage = currentPage - this.params.limit;
      endPage = currentPage;
    }

    if (currentPage === category.length) {
      startPage = currentPage - this.params.limit;
      endPage = currentPage;
    }

    const newCategory: ICategory[] = category.slice(startPage, endPage);
    this.params.category = newCategory;
  };

  @action removedFirstElemIndicateLimit = (limit: number) => {
    this.params.limit = limit;
    const lastElement = !!this.params.category.length
      ? this.params.category.slice(-1)[0]
      : {
          id: 4,
        };

    if (lastElement.id === this.params.activeCategoryId) {
      this.params.category.shift();
    }
  };

  @action setWindowSize = (windowSize: number) => {
    console.log(windowSize);
    console.log(WINDOW_SIZES.TB);
    if (windowSize <= WINDOW_SIZES.X && windowSize > WINDOW_SIZES.TB) {
      this.updateDataWithAction(() => {
        this.removedFirstElemIndicateLimit(4);
      });
    } else if (windowSize <= WINDOW_SIZES.TB && windowSize >= WINDOW_SIZES.SM) {
      this.updateDataWithAction(() => {
        this.removedFirstElemIndicateLimit(3);
      });
    } else if (windowSize <= WINDOW_SIZES.SM) {
      this.updateDataWithAction(() => {
        this.removedFirstElemIndicateLimit(2);
      });
    } else {
      this.updateDataWithAction(() => {
        this.params.limit = 5;
      });
    }
  };

  @action updateDataWithAction = (action: () => void) => {
    action();
    this.setPage(this.params.activeCategoryId);
  };
}

export default createContext(new PaginationStore());
