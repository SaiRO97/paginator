import { createContext } from "react";
import { action, observable, computed } from "mobx";
import { category } from "../consts/category";

class PaginationStore {
  @observable public params = {
    category,
    categoryMutable: null,
    activeCategoryId: 1,
  };

  @action setPage = (categoryId: number) => {
    if (categoryId < 1) {
      this.params.activeCategoryId = this.params.category.length;
      return;
    }

    if (this.params.activeCategoryId > this.params.category.length) {
      this.params.activeCategoryId = 1;
      return;
    }

    this.params.activeCategoryId = categoryId;
    const currentPage: number = this.params.activeCategoryId;
    const pageSize: number = 6;
    const totalCategories = this.params.category.length;

    let startPage: any, endPage: any;
    if (totalCategories <= pageSize) {
      // less than 10 total pages so show all
      startPage = 1;
      endPage = totalCategories;
    } else {
      // more than 10 total pages so calculate start and end pages
      if (currentPage <= 6) {
        startPage = 1;
        endPage = totalCategories;
      } else if (currentPage + 4 >= totalCategories) {
        startPage = totalCategories - 9;
        endPage = totalCategories;
      } else {
        startPage = currentPage - 5;
        endPage = currentPage + 4;
      }
    }

    console.log(startPage);
    console.log(endPage);
    const newCategory = category.slice(startPage, endPage + 1);
    this.params.category = newCategory;

    // const pager = this.getPager(this.params.category.length, categoryId);
  };

  // @action getPager(totalItems: any, currentPage: any, pageSize?: any) {
  //   currentPage = currentPage || 1;

  //   // default page size is 10
  //   pageSize = pageSize || 11;

  //   // calculate total pages
  //   let totalPages = Math.ceil(totalItems / pageSize);
  //   let startPage: any, endPage: any;
  //   if (totalPages <= 10) {
  //     // less than 10 total pages so show all
  //     startPage = 1;
  //     endPage = totalPages;
  //   } else {
  //     // more than 10 total pages so calculate start and end pages
  //     if (currentPage <= 6) {
  //       startPage = 1;
  //       endPage = this.params.category.length;
  //     } else if (currentPage + 4 >= totalPages) {
  //       startPage = totalPages - 9;
  //       endPage = totalPages;
  //     } else {
  //       startPage = currentPage - 5;
  //       endPage = currentPage + 4;
  //     }
  //   }

  //   // calculate start and end item indexes
  //   var startIndex = (currentPage - 1) * pageSize;
  //   var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

  //   // create an array of pages to ng-repeat in the pager control
  //   var pages = [...Array(endPage + 1 - startPage).keys()].map(
  //     (i) => startPage + i
  //   );

  //   const newCategory = this.params.category.slice(startPage, endPage + 1);
  //   this.params.category = newCategory;

  //   // return object with all pager properties required by the view
  //   return {
  //     totalItems: totalItems,
  //     currentPage: currentPage,
  //     pageSize: pageSize,
  //     totalPages: totalPages,
  //     startPage: startPage,
  //     endPage: endPage,
  //     startIndex: startIndex,
  //     endIndex: endIndex,
  //     pages: pages,
  //   };
  // }

  @action changeActiveCategory = (id: number) => {
    this.params.activeCategoryId = id;
  };
}

export default createContext(new PaginationStore());
