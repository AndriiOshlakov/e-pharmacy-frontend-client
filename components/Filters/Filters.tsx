"use client";

import { Category } from "@/types/product";
import css from "./Filters.module.css";
import { useState } from "react";

interface FilersProps {
  //   search?: string;
  //   category?: string;
  onSearch: (newSearch: string) => void;
  onCtegoryChange: (newCategory: Category) => void;
  onPage: (newPage: number) => void;
}

export default function Filters({
  //   search,
  onPage,
  onSearch,
  onCtegoryChange,
}: FilersProps) {
  const [value, setValue] = useState("");
  const [newCategory, setNewCategory] = useState<Category | "">("");
  const [isOpen, setIsOpen] = useState(false);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onCtegoryChange(newCategory);
    onSearch(value);
    onPage(1);
    setNewCategory("");
    setValue("");
  };
  const categories = [
    "Medicine",
    "Heart",
    "Head",
    "Hand",
    "Leg",
    "Dental Care",
    "Skin Care",
  ];
  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.categoryLabel}>
        <select
          onClick={() => setIsOpen(!isOpen)}
          name="categories"
          className={css.select}
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value as Category)}
        >
          <option value="">Product category</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        {!isOpen && (
          <svg className={css.icon} width={16} height={16}>
            <use href="/symbol-defs.svg#chevron-down" />
          </svg>
        )}
        {isOpen && (
          <svg className={css.icon} width={16} height={16}>
            <use href="/symbol-defs.svg#chevron-up" />
          </svg>
        )}
      </label>
      <label className={css.label}>
        <input
          className={css.input}
          type="text"
          placeholder="Search medicine"
          name="search"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <svg className={css.search} width={16} height={16}>
          <use href="/symbol-defs.svg#search" />
        </svg>
      </label>

      <button type="submit" className={css.btn}>
        <svg width={14} height={14} className={css.filter}>
          <use href="/symbol-defs.svg#filter" />
        </svg>
        Filter
      </button>
    </form>
  );
}
