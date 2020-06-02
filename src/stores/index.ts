import { createContext } from "react";
import { action, observable } from "mobx";
import { category } from "../consts/category";

class PaginationStore {
  @observable public params = {
    count: 0,
    category,
  };

  @action nextAction = () => {
    this.params.count++;
  };
}

export default createContext(new PaginationStore());
