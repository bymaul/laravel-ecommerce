import Container from "@/Components/Container";
import App from "@/Layouts/AppLayout";
import { Head } from "@inertiajs/react";

export default function Home() {
    return (
        <>
            <Head title="Home" />

            <Container>Home</Container>
        </>
    );
}

Home.layout = (page) => <App children={page} />;
