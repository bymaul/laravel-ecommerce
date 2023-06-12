import Container from "@/Components/Container";
import PrimaryButton from "@/Components/PrimaryButton";
import App from "@/Layouts/AppLayout";
import { numberFormat } from "@/Libs/helper";
import { Head, Link } from "@inertiajs/react";
import React from "react";
import { router } from "@inertiajs/react";
import { toast } from "react-hot-toast";
<<<<<<< HEAD
import LinkButton from "@/Components/LinkButton";

export default function Show({ product, auth, isProductPurchased }) {
=======

export default function Show({ product }) {
>>>>>>> 6e3e94820b7471dc5e4b5aebf91e2131b2d2c7a6
    const AddToCart = () => {
        router.post(
            route("cart.store", product),
            {},
            {
                onSuccess: () => toast.success("Added to cart"),
            }
        );
    };
    return (
        <div>
            <Head title={product.name} />
            <Container>
                <div className="flex gap-10">
                    <div className="w-1/3">
                        <img
                            className="w-full rounded-lg"
                            src={product.image}
                            alt={product.name}
                        />
                    </div>
                    <div className="w-2/3 min-h-full flex flex-col justfiy-between">
                        <div className="flex-1">
                            <Link
                                className="text-xs font-semibold px-2 py-1 inline-flex bg-blue-500 text-white rounded"
                                href={`/products?category=${product.category.slug}`}
                            >
                                {product.category.name}
                            </Link>
                            <h1 className="text-3xl font-semibold my-5">
                                {product.name}
                            </h1>
                            <div className="text-2xl font-semibold">
                                <sup>Rp</sup>
                                {numberFormat(product.price)}
                            </div>
                            <div className="leading-relaxed text-gray-500 my-3">
                                {product.description}
                            </div>
                        </div>
<<<<<<< HEAD
                        {auth.user ? (
                            isProductPurchased ? (
                                <LinkButton href="/products/purchased">
                                    Owned
                                </LinkButton>
                            ) : (
                                <PrimaryButton onClick={AddToCart}>
                                    Add to Cart
                                </PrimaryButton>
                            )
                        ) : (
                            <PrimaryButton onClick={AddToCart}>
                                Add to Cart
                            </PrimaryButton>
                        )}
=======
                        <PrimaryButton onClick={AddToCart}>
                            Add to Cart
                        </PrimaryButton>
>>>>>>> 6e3e94820b7471dc5e4b5aebf91e2131b2d2c7a6
                    </div>
                </div>
            </Container>
        </div>
    );
}

Show.layout = (page) => <App children={page} />;
