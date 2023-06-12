import Container from "@/Components/Container";
import AppLayout from "@/Layouts/AppLayout";
import { Head } from "@inertiajs/react";

export default function Dashboard({ auth }) {
    return (
        <>
            <Head title="Dashboard" />
            <Container>Dashboard</Container>
        </>
    );
}

Dashboard.layout = (page) => <AppLayout children={page} />;
