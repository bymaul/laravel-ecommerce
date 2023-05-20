import React from "react";
import Container from "@/Components/Container";
import Table from "@/Components/Table";
import Header from "@/Components/Header";
import PrimaryButton from "@/Components/PrimaryButton";
import LinkButton from "@/Components/LinkButton";
import Card from "@/Components/Card";
import App from "@/Layouts/AppLayout";
import { numberFormat } from "@/Libs/helper";
import { Head, Link, router } from "@inertiajs/react";
import { toast } from "react-hot-toast";
import DropdownMenu from "@/Components/DropdownMenu";

export default function Index({ carts }) {
    const onDeleteHandler = (cart_id) => {
        router.post(
            route("cart.destroy", cart_id),
            { _method: "DELETE" },
            {
                onSuccess: toast.success("Item deleted"),
            }
        );
    };

    let subtotal = carts.reduce((acc, cart) => acc + cart.price, 0);
    let ppn = (11 / 100) * subtotal;
    let total = subtotal + ppn;
    return (
        <>
            <Head title="Your Carts" />
            <Header
                title={"Your Carts"}
                description={
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore vitae reiciendis labore excepturi?"
                }
            />
            <Container>
                <Card>
                    <Card.Header>Your Carts</Card.Header>
                    <Card.Table>
                        <Table>
                            <Table.Thead>
                                <tr>
                                    <Table.Th className={"w-0"}>#</Table.Th>
                                    <Table.Th>Name</Table.Th>
                                    <Table.Th className={"text-right"}>
                                        Price
                                    </Table.Th>
                                    <Table.Th></Table.Th>
                                </tr>
                            </Table.Thead>
                            <Table.Tbody>
                                {carts.length ? (
                                    <>
                                        {carts.map((cart, i) => (
                                            <tr key={cart.id}>
                                                <Table.Td className={"w-0"}>
                                                    {i + 1}
                                                </Table.Td>
                                                <Table.Td>
                                                    <Link
                                                        href={`/products/${cart.product.slug}`}
                                                    >
                                                        {cart.product.name}
                                                    </Link>
                                                </Table.Td>
                                                <Table.Td className="text-right">
                                                    Rp{numberFormat(cart.price)}
                                                </Table.Td>
                                                <Table.Td
                                                    className={"text-right"}
                                                >
                                                    <PrimaryButton
                                                        onClick={() =>
                                                            onDeleteHandler(
                                                                cart.id
                                                            )
                                                        }
                                                        className="inline"
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            fill="none"
                                                            viewBox="0 0 24 24"
                                                            strokeWidth={1.5}
                                                            stroke="currentColor"
                                                            className="w-5 h-5"
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                                            />
                                                        </svg>
                                                    </PrimaryButton>
                                                </Table.Td>
                                            </tr>
                                        ))}
                                        <tr>
                                            <Table.Td></Table.Td>
                                            <Table.Td>PPN (11%)</Table.Td>
                                            <Table.Td className="text-right">
                                                Rp
                                                {numberFormat(ppn)}
                                            </Table.Td>
                                            <Table.Td></Table.Td>
                                        </tr>
                                        <tr className="bg-blue-50 text-blue-900 font-semibold">
                                            <Table.Td></Table.Td>
                                            <Table.Td>Total</Table.Td>
                                            <Table.Td className="text-right">
                                                Rp
                                                {numberFormat(total)}
                                            </Table.Td>
                                            <Table.Td></Table.Td>
                                        </tr>
                                    </>
                                ) : (
                                    <Table.Empty
                                        colSpan={4}
                                        message={
                                            <>
                                                The cart is currently empty.
                                                <br />
                                                <Link
                                                    className="text-blue-500 underline"
                                                    href={"/products"}
                                                >
                                                    Go to products
                                                </Link>
                                            </>
                                        }
                                    />
                                )}
                            </Table.Tbody>
                        </Table>
                    </Card.Table>
                </Card>
                {carts.length ? (
                    <>
                        <div className="mt-4 flex justify-end">
                            <DropdownMenu
                                buttonClassName="bg-blue-500 text-white px-4 py-2 rounded-md"
                                label={"Payment Method"}
                            >
                                <DropdownMenu.Link
                                    href="/invoice"
                                    method="post"
                                    as="button"
                                    data={{
                                        carts: carts,
                                        total: total,
                                        payment_type: "gopay",
                                    }}
                                >
                                    Gopay
                                </DropdownMenu.Link>
                                <DropdownMenu.Divider />
                                <DropdownMenu.Link
                                    href="/invoice"
                                    method="post"
                                    as="button"
                                    data={{
                                        carts: carts,
                                        total: total,
                                        payment_type: "bank_transfer",
                                        bank: "bca",
                                    }}
                                >
                                    BCA Virtual Account
                                </DropdownMenu.Link>
                                <DropdownMenu.Link
                                    href="/invoice"
                                    method="post"
                                    as="button"
                                    data={{
                                        carts: carts,
                                        total: total,
                                        payment_type: "bank_transfer",
                                        bank: "bni",
                                    }}
                                >
                                    BNI Virtual Account
                                </DropdownMenu.Link>
                            </DropdownMenu>
                        </div>
                    </>
                ) : null}
            </Container>
        </>
    );
}

Index.layout = (page) => <App children={page} />;
