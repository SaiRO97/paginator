import { action, observable } from "mobx";
import { category } from "../consts/category";

class indexStore {
  @observable public params = {
    count: 0,
    category: category,
  };

  @action nextAction = () => {
    this.params.count++;
  };
}

export default new indexStore();
