import React from "react";
import { Category } from "../interfaces/store";
import "./paginator.css";

export interface PaginatorProps {
  categories: Category[];
  activeCategoryId: number;
  categoryClickAction: (id: number) => void;
  setPage: (id: number) => void;
}

const Paginator: React.FC<PaginatorProps> = ({
  categories,
  activeCategoryId,
  categoryClickAction,
  setPage,
}) => {
  console.log(categories);

  return (
    <div className="wrapper">
      <button
        onClick={() => setPage(activeCategoryId - 1)}
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
        onClick={() => setPage(activeCategoryId + 1)}
        className="wrapper_btn next_btn"
      >
        NEXT
      </button>
    </div>
  );
};

export default Paginator;
