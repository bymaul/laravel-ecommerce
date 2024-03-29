import Container from "@/Components/Container";
import LinkButton from "@/Components/LinkButton";
import PrimaryButton from "@/Components/PrimaryButton";
import App from "@/Layouts/AppLayout";
import { numberFormat } from "@/Libs/helper";
import { Head, Link, router } from "@inertiajs/react";
import { toast } from "react-hot-toast";

export default function Show({ product, auth, isProductPurchased }) {
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
                    </div>
                </div>
            </Container>
        </div>
    );
}

Show.layout = (page) => <App children={page} />;
