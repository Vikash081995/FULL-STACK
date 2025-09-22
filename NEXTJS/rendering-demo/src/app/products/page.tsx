import Link from "next/link";

export default function ProductsPage(){
    return (
        <>
        <h1>Featured products </h1>
        <Link href="/products/1">Product 1</Link>
        <link href="/products/2">Product 2</link>
        <Link href="/products/3">Product 3</Link>
        </>
    )
}