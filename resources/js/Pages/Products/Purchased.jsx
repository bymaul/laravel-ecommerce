import Card from "@/Components/Card";
import Container from "@/Components/Container";
import Pagination from "@/Components/Pagination";
import Table from "@/Components/Table";
import App from "@/Layouts/AppLayout";
import { Head } from "@inertiajs/react";

export default function Purchased(props) {
    const { data: products, meta, links } = props.products;
    return (
        <>
            <Head title="My Products" />
            <Container>
                <Card>
                    <Card.Header>My Products</Card.Header>
                    <Card.Table>
                        <Table>
                            <Table.Thead>
                                <tr>
                                    <Table.Th className={"w-0"}>#</Table.Th>
                                    <Table.Th>Product</Table.Th>
                                </tr>
                            </Table.Thead>
                            <Table.Tbody>
                                {products.length ? (
                                    <>
                                        {products.map((product, i) => (
                                            <tr key={product.id}>
                                                <Table.Td>
                                                    {meta.from + i}
                                                </Table.Td>
                                                <Table.Td>
                                                    <a
                                                        className="text-blue-500 underline"
                                                        href={product.url}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        {product.name}
                                                    </a>
                                                </Table.Td>
                                            </tr>
                                        ))}
                                    </>
                                ) : (
                                    <Table.Empty colSpan={2} />
                                )}
                            </Table.Tbody>
                        </Table>
                    </Card.Table>
                    <Card.Footer>
                        <Pagination
                            marginTop="mt-0"
                            meta={meta}
                            links={links}
                        />
                    </Card.Footer>
                </Card>
            </Container>
        </>
    );
}

Purchased.layout = (page) => <App children={page} />;
