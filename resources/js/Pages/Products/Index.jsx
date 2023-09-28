import Container from "@/Components/Container";
import Header from "@/Components/Header";
import Pagination from "@/Components/Pagination";
import ProductItem from "@/Components/ProductItem";
import App from "@/Layouts/AppLayout";
import { Head } from "@inertiajs/react";

export default function Index(props) {
    const { data: products, meta, links } = props.products;
    return (
        <div>
            <Head title="Products" />
            <Header
                title="Our Products"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quis quas aperiam cumque molestiae optio!"
            />

            <Container>
                {products.length ? (
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
                        {products.map((product) => (
                            <ProductItem key={product.id} product={product} />
                        ))}
                    </div>
                ) : null}
                <Pagination meta={meta} links={links} />
            </Container>
        </div>
    );
}

Index.layout = (page) => <App children={page} />;
