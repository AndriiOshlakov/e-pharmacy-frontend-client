import { getProducts } from "@/lib/api/serverApi";
import { ProductsRequest } from "@/types/product";
import {
  QueryClient,
  dehydrate,
  HydrationBoundary,
} from "@tanstack/react-query";
import MedicineClient from "./Medicine.client";

type Props = {
  searchParams: Promise<ProductsRequest>;
};

export default async function medicinePage({ searchParams }: Props) {
  const {
    page = "1",
    perPage = "12",
    search = "",
    category = undefined,
  } = await searchParams;

  const currentPage = Number(page);
  const currentPerPage = Number(perPage);

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["medicine", currentPage, currentPerPage, search, category],
    queryFn: () =>
      getProducts({
        page: currentPage,
        perPage: currentPerPage,
        search,
        category,
      }),
  });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <MedicineClient page={currentPage} perPage={currentPerPage} />
    </HydrationBoundary>
  );
}
