import GuestLayout from "@/Layouts/GuestLayout";
import {  Head } from "@inertiajs/react";
import { useState } from "react";
import TicketForm from "./Partials/TicketForm";
import StatusCheck from "./Partials/StatusCheck";

export default function Index({ }) {


    const [form, setForm] = useState('open');

    return (
        <GuestLayout>
            <Head title="Home" />
            <div className="px-6 py-4 ">
                <h1 className="text-3xl font-bold">Welcome to the Ticketing System</h1>
                <p className="pb-4 mt-1 text-sm text-gray-600">
                    This is a simple  system to resolve your problems.
                </p>

            </div>
            {form == 'check' && (
                <StatusCheck setForm={setForm} />

            )}
            {form == 'open' && (

                <TicketForm setForm={setForm} />
            )}
        </GuestLayout>
    );
}
