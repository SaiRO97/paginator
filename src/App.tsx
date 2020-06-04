import React, { useContext, useEffect, useCallback } from "react";
import { observer } from "mobx-react-lite";
import PaginationStore from "./stores/index";
import { PaginatorStore } from "./interfaces/store";
import Paginator from "./views/paginator";

import "./App.css";

const App: React.FC = () => {
  const paginatorStore: PaginatorStore = useContext(PaginationStore);
  const { params, setPage, setWindowSize } = paginatorStore;

  const setSizeToMobxStore = useCallback(() => {
    setWindowSize(window.innerWidth);
  }, [window.innerWidth]);

  useEffect(() => {
    setSizeToMobxStore();
    window.addEventListener("resize", setSizeToMobxStore);
    return () => {
      window.removeEventListener("resize", setSizeToMobxStore);
    };
  }, []);

  return (
    <div className="container">
      <Paginator
        activeCategoryId={params.activeCategoryId}
        categories={params.category}
        setPage={setPage}
      />
    </div>
  );
};

export default observer(App);
