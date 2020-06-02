import React from "react";
import { Category } from "../interfaces/store";

export interface PaginatorProps {
  categories: Category[];
}

const Paginator: React.FC<PaginatorProps> = ({ categories }) => {
  return (
    <div>
      <button>prev</button>
      <div className="elements">
        {categories.map((it) => {
          return <span key={it.id}>{it.name}</span>;
        })}
      </div>
      <button>next</button>
    </div>
  );
};

export default Paginator;
