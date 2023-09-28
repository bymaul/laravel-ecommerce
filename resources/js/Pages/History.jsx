import Card from "@/Components/Card";
import Container from "@/Components/Container";
import Pagination from "@/Components/Pagination";
import Table from "@/Components/Table";
import App from "@/Layouts/AppLayout";
import { Head, Link } from "@inertiajs/react";

export default function History(props) {
    const { data: carts, meta, links } = props.carts;
    return (
        <>
            <Head title="My History" />
            <Container>
                <Card>
                    <Card.Header>My History</Card.Header>
                    <Card.Table>
                        <Table>
                            <Table.Thead>
                                <tr>
                                    <Table.Th className={"w-0"}>#</Table.Th>
                                    <Table.Th>Product</Table.Th>
                                    <Table.Th>Purchased at</Table.Th>
                                </tr>
                            </Table.Thead>
                            <Table.Tbody>
                                {carts.length ? (
                                    <>
                                        {carts.map((cart, i) => (
                                            <tr key={cart.id}>
                                                <Table.Td>
                                                    {meta.from + i}
                                                </Table.Td>
                                                <Table.Td>
                                                    <Link
                                                        className="text-blue-500 underline"
                                                        href={`/products/${cart.product.slug}`}
                                                    >
                                                        {cart.product.name}
                                                    </Link>
                                                </Table.Td>
                                                <Table.Td>
                                                    {cart.purchased_at}
                                                </Table.Td>
                                            </tr>
                                        ))}
                                    </>
                                ) : (
                                    <Table.Empty colSpan={3} />
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

History.layout = (page) => <App children={page} />;
