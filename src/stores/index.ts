import { createContext } from "react";
import { action, observable } from "mobx";
import { category } from "../consts/category";

class PaginationStore {
  @observable public params = {
    category,
    categoryMutable: null,
    activeCategoryId: 1,
  };

  @action setPage = (categoryId: number) => {
    let startPage: number, endPage: number;
    this.params.activeCategoryId = categoryId;
    const currentPage: number = this.params.activeCategoryId;
    const totalCategories: number = category.length;

    const categoryLimit: number = 5;

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
}

export default createContext(new PaginationStore());
