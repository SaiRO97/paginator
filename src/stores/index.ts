import { createContext } from "react";
import { action, observable } from "mobx";
import { category } from "../consts/category";
import { WINDOW_SIZES } from "../consts/windowSize";
import { Category } from "../interfaces/store";

class PaginationStore {
  @observable public params = {
    category,
    activeCategoryId: 1,
    windowWidth: WINDOW_SIZES.X,
    limit: 5,
  };

  @action setPage = (categoryId: number) => {
    this.params.activeCategoryId = categoryId;
    const currentPage: number = this.params.activeCategoryId;

    let startPage: number = 0;
    let endPage: number = this.params.limit;

    if (currentPage > this.params.limit) {
      startPage = currentPage - this.params.limit;
      endPage = currentPage + 1;
    }

    if (currentPage === category.length) {
      startPage = currentPage - this.params.limit;
      endPage = currentPage;
    }

    const newCategory = category.slice(startPage, endPage);
    this.params.category = newCategory;
  };

  @action setWindowSize = (windowSize: number) => {
    const lastElement = this.params.category.slice(-1)[0];

    if (windowSize <= 1200) {
      this.params.limit = 4;

      if (lastElement.id === this.params.activeCategoryId) {
        this.params.category.shift();
      }

      this.setPage(this.params.activeCategoryId);
    } else {
      this.params.limit = 5;
      this.setPage(this.params.activeCategoryId);
    }

    this.params.windowWidth = windowSize;
  };
}

export default createContext(new PaginationStore());
