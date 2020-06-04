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
  };

  @action setPage = (categoryId: number) => {
    this.params.activeCategoryId = categoryId;
    const currentPage: number = this.params.activeCategoryId;

    let startPage: number = 0;
    let endPage: number = 5;

    if (currentPage > 5) {
      startPage = currentPage - 5;
      endPage = currentPage + 1;
    }

    if (currentPage === category.length) {
      startPage = currentPage - 5;
      endPage = currentPage;
    }

    const newCategory = category.slice(startPage, endPage);
    this.params.category = newCategory;
  };

  @action setWindowSize = (windowSize: number) => {
    const lastElement = this.params.category.slice(-1)[0];

    if (windowSize <= 1200 && lastElement.id === this.params.activeCategoryId) {
      console.log("object");
    }

    this.params.windowWidth = windowSize;
  };
}

export default createContext(new PaginationStore());
