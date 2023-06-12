import Container from "@/Components/Container";
import App from "@/Layouts/AppLayout";
<<<<<<< HEAD
import { Head, router } from "@inertiajs/react";
import React from "react";

export default function Show({ auth, invoice }) {
    Echo.private(`invoice.paid.${auth.user.id}`).listen(
        "InvoicePaid",
        ({ invoice }) => {
            if (invoice.status == "settlement") {
                router.get("/products/purchased");
            }
        }
    );
=======
import { Head } from "@inertiajs/react";
import React from "react";

export default function Show({ invoice }) {
>>>>>>> 6e3e94820b7471dc5e4b5aebf91e2131b2d2c7a6
    return (
        <>
            <Head title={`Your order - ${invoice.order_id}`} />
            <Container>
                <div className="grid grid-cols-2 gap-10">
                    <div>
<<<<<<< HEAD
                        {invoice.gopay ? (
                            <div>
                                <div className="text-center text-sm">
                                    Click{" "}
                                    <a
                                        className="text-blue-500 underline"
                                        href={invoice.gopay.deeplink}
                                        target="_blank"
                                    >
                                        here
                                    </a>{" "}
                                    if QR Code doesn't appear.
                                </div>
                                <img
                                    className="border shadow-sm rounded-lg"
                                    src={invoice.gopay.qr_code}
                                    alt=""
                                />
                            </div>
=======
                        {invoice.qr_code ? (
                            <img
                                className="border shadow-sm rounded-lg"
                                src={invoice.qr_code}
                                alt=""
                            />
>>>>>>> 6e3e94820b7471dc5e4b5aebf91e2131b2d2c7a6
                        ) : null}
                        {invoice.bank ? (
                            <div className="font-semibold text-xl uppercase">
                                <div>{invoice.bank.name}</div>
                                <div>{invoice.bank.va_number}</div>
                            </div>
                        ) : null}
                    </div>
                    <div className="prose">
                        <h3>Instruction</h3>
                        <p>
                            Please follow the instruction below if you don't
                            understand how to pay your order.
                        </p>
                        <ol>
                            <li>Lorem ipsum dolor sit amet.</li>
                            <li>Lorem ipsum dolor sit.</li>
                            <li>Lorem ipsum dolor sit amet consectetur.</li>
                            <li>Lorem ipsum dolor sit.</li>
                            <li>Lorem, ipsum.</li>
                        </ol>
                    </div>
                </div>
            </Container>
        </>
    );
}

Show.layout = (page) => <App children={page} />;
