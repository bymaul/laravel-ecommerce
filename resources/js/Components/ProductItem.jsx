import { numberFormat } from "@/Libs/Helper";
import { Link } from "@inertiajs/react";
import React from "react";

export default function ProductItem({ product }) {
    return (
        <div>
            <Link href={`/products/${product.slug}`}>
                <img
                    className="w-full rounded-lg"
                    src={product.image}
                    alt={product.name}
                />
            </Link>
            <div className="mt-4">
                <Link
                    className="text-sm mb-2 line-clamp-1"
                    href={`/products/${product.slug}`}
                >
                    {product.name}
                </Link>
                <div className="flex items-center justify-between text-sm">
                    <Link href={`/products?category=${product.category.slug}`}>
                        {product.category.name}
                    </Link>
                    <div>Rp{numberFormat(product.price)}</div>
                </div>
            </div>
        </div>
    );
}
