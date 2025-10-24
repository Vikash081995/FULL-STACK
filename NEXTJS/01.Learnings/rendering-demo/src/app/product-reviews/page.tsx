import { Suspense } from "react";

import Product from "../components/product";
import { Reviews } from "../components/reviews";


export default function ProductReviewsPage() {
    if (!Product || !Reviews) {
        return <div>Error: Components not found.</div>;
    }

    return (
        <div>
            <h1>Product reviews</h1>
            <Suspense fallback={<div>Loading...</div>}>
                <Product />
            </Suspense>
            <Suspense fallback={<div>Loading...</div>}>
                <Reviews />
            </Suspense>
        </div>
    );
}