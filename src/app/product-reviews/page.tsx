import { Product } from "@/components/product";
import { Reviews } from "@/components/reviews";
import { Suspense } from "react";
export default function ProductReviews() {
  return (
    <div>
      <h1>Product Reviews</h1>
      <Suspense fallback={<p>Loading Product details...</p>}>
        <Product />
      </Suspense>
      <Suspense fallback={<p>Loading Reviews...</p>}>
        <Reviews />
      </Suspense>
    </div>
  );
}
