import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import PaginationStore from "./stores/index";
import { PaginatorStore } from "./interfaces/store";
import Paginator from "./views/paginator";

import "./App.css";

const App: React.FC = () => {
  const paginatorStore: PaginatorStore = useContext(PaginationStore);
  const { changeActiveCategory, params, setPage } = paginatorStore;

  return (
    <Paginator
      categoryClickAction={changeActiveCategory}
      activeCategoryId={params.activeCategoryId}
      categories={params.category}
      setPage={setPage}
    />
  );
};

export default observer(App);
