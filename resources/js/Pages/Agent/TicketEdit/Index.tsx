import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextArea from "@/Components/TextArea";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import { FormEventHandler } from "react";

export default function Index({ ticket }: any) {
    const { data, setData, post, processing, errors, reset } = useForm({
        reply: ticket?.reply ?? '',
        status: 'replied',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('ticket.update', ticket.id))
    };
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Ticket Edit
                </h2>
            }
        >
            <Head title="Ticket Edit" />

            <div className="py-12">
                <div className="max-w-xl mx-auto sm:px-6 lg:px-8">
                    <div className="overflow-hidden shadow-sm sm:rounded-lg ">

                        <div className="flex flex-col px-6 py-4 mt-6 bg-white rounded-lg shadow-md">
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
                                    <p className="pl-3">{ticket?.problem_description}</p>
                                </div>
                                <div className="mt-4">
                                    <InputLabel htmlFor="status" value="Status" />
                                    <p className="pl-3 text-lg font-semibold uppercase">{ticket?.status}</p>
                                </div>
                            </div>
                            <form onSubmit={submit}>
                                <div className="mt-4">
                                    <InputLabel
                                        htmlFor="reply"
                                        value="Solution"
                                    />

                                    <TextArea
                                        id="problem_description"
                                        name="reply"
                                        value={data.reply}
                                        className="block w-full mt-1"
                                        onChange={(e) =>
                                            setData('reply', e.target.value)
                                        }
                                    />

                                    <InputError
                                        message={errors.reply}
                                        className="mt-2"
                                    />
                                </div>
                                <div className="flex justify-end">
                                    <PrimaryButton className="mt-4" disabled={processing}>
                                        Save
                                    </PrimaryButton>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};
