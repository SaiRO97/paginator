import React, { useEffect } from "react";
import { ICategory } from "../interfaces/store";
import { category } from "../consts/category";
import "./paginator.css";

export interface PaginatorProps {
  categories: ICategory[];
  activeCategoryId: number;
  setPage: (id: number) => void;
}

const Paginator: React.FC<PaginatorProps> = ({
  categories,
  activeCategoryId,
  setPage,
}) => {
  useEffect(() => {
    setPage(1);
  }, []);

  return (
    <div className="wrapper">
      <button
        onClick={() =>
          setPage(
            activeCategoryId === 1 ? category.length : activeCategoryId - 1
          )
        }
        className="wrapper_btn prev_btn"
      >
        PREV
      </button>
      <div className="wrapper_categories">
        {categories.map((it) => {
          return (
            <span
              className={
                it.id === activeCategoryId
                  ? "category_item active"
                  : "category_item"
              }
              key={it.id}
              onClick={() => setPage(it.id)}
            >
              {it.name}
            </span>
          );
        })}
      </div>
      <button
        onClick={() =>
          setPage(
            activeCategoryId === category.length ? 1 : activeCategoryId + 1
          )
        }
        className="wrapper_btn next_btn"
      >
        NEXT
      </button>
    </div>
  );
};

export default Paginator;
