"use client";

import { useQuery } from "@tanstack/react-query";
import Container from "@/components/Container/Container";
import { useState } from "react";
import Pagination from "@/components/Pagination/Pagination";
import { RequestStore } from "@/types/store";
import css from "./MedicineStore.module.css";
import { getStoresClient } from "@/lib/api/clientApi";
import PharmacyList from "@/components/PharmacyList/PharmacyList";

export default function MedicineStoreClient({ page, perPage }: RequestStore) {
  const [currentPage, setCarrentPage] = useState(page);

  const { data } = useQuery({
    queryKey: ["medicine-store", currentPage, perPage],
    queryFn: () => getStoresClient({ page: currentPage, perPage }),
    refetchOnMount: false,
  });

  return (
    <section className={css.section}>
      <Container>
        <h1 className={css.title}>Medicine Store</h1>
        {data && data.pharmacies.length !== 0 && (
          <PharmacyList pharmacies={data.pharmacies} />
        )}
        {data && data.pharmacies.length !== 0 && (
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
