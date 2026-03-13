"use client";

import { useQuery } from "@tanstack/react-query";
import Container from "@/components/Container/Container";
import { useEffect, useState } from "react";
import Pagination from "@/components/Pagination/Pagination";
import css from "./Medicine.module.css";
import { Category, ProductsRequest } from "@/types/product";
import { getProductsClient } from "@/lib/api/clientApi";
import ProductList from "@/components/ProductList/ProductList";
import Filters from "@/components/Filters/Filters";

export default function MedicineClient({
  page,
  perPage,
  //   search,
  //   category,
}: ProductsRequest) {
  const [currentPage, setCarrentPage] = useState(page);
  const [limit, setLimit] = useState(perPage);
  const [newSearch, setNewSearch] = useState("");
  const [newCategory, setNewCategory] = useState<Category>("");
  useEffect(() => {
    const updateLimit = () => {
      if (window.innerWidth >= 1440) {
        setLimit(12);
      } else {
        setLimit(9);
      }
    };

    updateLimit();
    window.addEventListener("resize", updateLimit);

    return () => window.removeEventListener("resize", updateLimit);
  }, []);

  const { data } = useQuery({
    queryKey: ["medicine", currentPage, limit, newSearch, newCategory],
    queryFn: () =>
      getProductsClient({
        page: currentPage,
        perPage: limit,
        search: newSearch,
        category: newCategory,
      }),
    refetchOnMount: false,
  });

  return (
    <section className={css.section}>
      <Container>
        <h1 className={css.title}>Medicine</h1>
        <Filters
          //   search={newSearch}
          onPage={setCarrentPage}
          onSearch={setNewSearch}
          onCtegoryChange={setNewCategory}
        />
        {data && data.products.length !== 0 && (
          <ProductList products={data.products} />
        )}
        {data && data.products.length !== 0 && (
          <Pagination
            onPageChange={setCarrentPage}
            page={currentPage}
            pageCount={data?.totalPages}
          />
        )}
      </Container>
    </section>
  );
}
