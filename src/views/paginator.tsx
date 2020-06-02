import React from "react";
import { Category } from "../interfaces/store";
import "./paginator.css";

export interface PaginatorProps {
  categories: Category[];
  activeCategoryId: number;
  categoryClickAction: (id: number) => void;
  nextAction: () => void;
  prevAction: () => void;
}

const Paginator: React.FC<PaginatorProps> = ({
  categories,
  activeCategoryId,
  categoryClickAction,
  nextAction,
  prevAction,
}) => {
  console.log(activeCategoryId);

  return (
    <div className="wrapper">
      <button onClick={prevAction} className="wrapper_btn prev_btn">
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
              onClick={() => categoryClickAction(it.id)}
            >
              {it.name}
            </span>
          );
        })}
      </div>
      <button onClick={nextAction} className="wrapper_btn next_btn">
        NEXT
      </button>
    </div>
  );
};

export default Paginator;
