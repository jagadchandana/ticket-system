import InputLabel from "@/Components/InputLabel";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head } from "@inertiajs/react";
import StatusBadge from "../../../Components/StatusBadge";

export default function Index({ ticket }: any) {
    return (
        <GuestLayout>
            <Head title="Check" />
            <div className="px-6 py-4 ">
                <h1 className="text-3xl font-bold">Welcome to the Ticketing System</h1>
                <p className="pb-4 mt-1 text-sm text-gray-600">
                    This is a simple  system to resolve your problems.
                </p>

                <div className="px-6 py-4 mt-6 bg-white rounded-lg shadow-md">
                    <div className="flex flex-row">
                        <div>
                            <h1 className="text-3xl font-bold">Ticket Details</h1>
                            <p className="pb-4 mt-1 text-sm text-gray-600">
                                Here are the details of your ticket.
                            </p>
                        </div>
                        <div>
                            <StatusBadge status={ticket?.status} />
                        </div>
                    </div>
                    <div>
                        <div className="mt-4">
                            <InputLabel htmlFor="name" value="Name" />
                            <p className="pl-3 text-lg font-semibold">{ticket?.name}</p>
                        </div>
                        <div className="mt-4">
                            <InputLabel htmlFor="email" value="Email" />
                            <p className="pl-3 text-lg font-semibold"> {ticket?.email}</p>
                        </div>
                        <div className="mt-4">
                            <InputLabel htmlFor="phone_number" value="Phone Number" />
                            <p className="pl-3 text-lg font-semibold">{ticket?.phone_number}</p>
                        </div>
                        <div className="mt-4">
                            <InputLabel htmlFor="problem_description" value="Problem Description" />
                            <p className="pl-3 ">{ticket?.problem_description}</p>
                        </div>
                        <div className="mt-4">
                            <InputLabel htmlFor="status" value="Status" />
                            <p className="pl-3 text-lg font-semibold uppercase">{ticket?.status}</p>
                        </div>
                        <div className="mt-4">
                            <InputLabel htmlFor="agent" value="Agent" />
                            <p className="pl-3 text-lg font-semibold uppercase">{ticket?.user?.name ?? '-na-'}</p>
                        </div>
                        <div className="mt-4">
                            <InputLabel htmlFor="solution" value="Solution" />
                            <p className="pl-3 text-lg font-semibold uppercase">{ticket?.reply ?? '-na-'}</p>
                        </div>

                    </div>

                </div>

            </div>

        </GuestLayout>
    );
};
