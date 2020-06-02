import { createContext } from "react";
import { action, observable } from "mobx";
import { category } from "../consts/category";

class PaginationStore {
  @observable public params = {
    category,
    activeCategoryId: 1,
  };

  @action nextAction = () => {
    if (this.params.activeCategoryId >= this.params.category.length) {
      this.params.activeCategoryId = 1;
      return;
    }

    this.params.activeCategoryId++;
  };

  @action prevAction = () => {
    if (this.params.activeCategoryId <= 1) {
      this.params.activeCategoryId = this.params.category.length;
      return;
    }

    this.params.activeCategoryId--;
  };

  @action changeActiveCategory = (id: number) => {
    this.params.activeCategoryId = id;
  };
}

export default createContext(new PaginationStore());
