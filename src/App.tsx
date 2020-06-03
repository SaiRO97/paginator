import React, { useContext, useEffect } from "react";
import { observer } from "mobx-react-lite";
import PaginationStore from "./stores/index";
import { PaginatorStore } from "./interfaces/store";
import Paginator from "./views/paginator";

import "./App.css";

const App: React.FC = () => {
  const paginatorStore: PaginatorStore = useContext(PaginationStore);
  const { params, setPage, setWindowSize } = paginatorStore;

  const setSizeToMobxStore = () => {
    console.log(window.innerWidth);
    setWindowSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", setSizeToMobxStore);
    return () => {
      window.removeEventListener("resize", setSizeToMobxStore);
    };
  }, []);

  return (
    <Paginator
      activeCategoryId={params.activeCategoryId}
      categories={params.category}
      setPage={setPage}
    />
  );
};

export default observer(App);
