import { getStores } from "@/lib/api/serverApi";
import { RequestStore } from "@/types/store";
import {
  QueryClient,
  dehydrate,
  HydrationBoundary,
} from "@tanstack/react-query";
import MedicineStoreClient from "./MedicineStoreClient";

type Props = {
  searchParams: Promise<RequestStore>;
};

export default async function medicineStorePage({ searchParams }: Props) {
  const { page = "1", perPage = "9" } = await searchParams;

  const currentPage = Number(page);
  const currentPerPage = Number(perPage);

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["medicine-store", currentPage, currentPerPage],
    queryFn: () =>
      getStores({
        page: currentPage,
        perPage: currentPerPage,
      }),
  });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <MedicineStoreClient page={currentPage} perPage={currentPerPage} />
    </HydrationBoundary>
  );
}
