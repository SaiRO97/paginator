import { action, observable } from "mobx";
import { category } from "../consts/category";

class PaginatorStore {
  @observable public params = {
    count: 0,
    category: category,
  };

  // @action nextAction = (e: any, value: any) => {
  //   console.log(e);
  //   console.log(value);
  // };
}

export default new PaginatorStore();
