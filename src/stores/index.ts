import { createContext } from "react";
import { action, observable } from "mobx";
import { category } from "../consts/category";
import { WINDOW_SIZES } from "../consts/windowSize";

class PaginationStore {
  @observable public params = {
    category,
    activeCategoryId: 1,
    windowWidth: WINDOW_SIZES.X,
  };

  limitChanger = () => {
    if (
      this.params.windowWidth <= WINDOW_SIZES.X &&
      this.params.windowWidth >= WINDOW_SIZES.XL
    ) {
      return 4;
    }

    return 5;
  };

  @action setPage = (categoryId: number) => {
    let startPage: number, endPage: number;
    this.params.activeCategoryId = categoryId;
    const currentPage: number = this.params.activeCategoryId;
    const totalCategories: number = category.length;
    const categoryLimit: number = this.limitChanger();

    if (currentPage <= categoryLimit) {
      startPage = 0;
      endPage = totalCategories;
    } else if (currentPage <= totalCategories) {
      startPage = currentPage - categoryLimit;
      endPage = currentPage + 4;
    } else {
      startPage = 0;
      endPage = totalCategories;
    }

    const newCategory = category.slice(startPage, endPage + 1);
    this.params.category = newCategory;
  };

  @action setWindowSize = (windowSize: number) => {
    this.params.windowWidth = windowSize;
  };
}

export default createContext(new PaginationStore());
