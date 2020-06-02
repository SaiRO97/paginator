import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import PaginationStore from "./stores/index";
import { PaginatorStore } from "./interfaces/store";

import "./App.css";
import Paginator from "./views/paginator";

const App: React.FC = () => {
  const paginatorStore: PaginatorStore = useContext(PaginationStore);

  return <Paginator categories={paginatorStore.params.category} />;
};

export default observer(App);
