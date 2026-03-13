import { getSingleProduct } from "@/lib/api/serverApi";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import SingleMedicineClient from "./SingleMedicine.client";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function SingleMedicine({ params }: Props) {
  const { id } = await params;
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["product", id],
    queryFn: () => getSingleProduct(id),
  });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <SingleMedicineClient />
    </HydrationBoundary>
  );
}
