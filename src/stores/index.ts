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
      console.log("test");
      startPage = currentPage - this.params.limit;
      endPage = currentPage;
    }

    const newCategory: ICategory[] = category.slice(startPage, endPage);
    this.params.category = newCategory;
  };

  @action setWindowSize = (windowSize: number) => {
    const lastElement: ICategory = this.params.category.slice(-1)[0];

    if (windowSize <= WINDOW_SIZES.X) {
      this.updateDataWithAction(() => {
        this.params.limit = 4;
        if (lastElement.id === this.params.activeCategoryId) {
          this.params.category.shift();
        }
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
