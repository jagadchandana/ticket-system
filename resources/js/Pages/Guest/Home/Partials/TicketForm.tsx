import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextArea from "@/Components/TextArea";
import TextInput from "@/Components/TextInput";
import { useForm, Head, Link } from "@inertiajs/react";
import { FormEventHandler, useState } from "react";

export default function TicketForm({setForm}:any) {

    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        phone_number: '',
        problem_description: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('ticket.open'), {
            onSuccess: () => {
                reset();
            },
        });
    };
    const formHandler = () => {
        setForm('check');
    }

    return (
         <div className="px-6 py-4 mt-6 bg-white rounded-lg shadow-md">
                    <h1 className="text-3xl font-bold">Open a new Ticket</h1>
                    <p className="pb-4 mt-1 text-sm text-gray-600">
                        Fill in the form below to open a new ticket.
                    </p>
                    <form onSubmit={submit}>
                        <div>
                            <InputLabel htmlFor="name" value="Name" />

                            <TextInput
                                id="name"
                                name="name"
                                value={data.name}
                                className="block w-full mt-1"
                                autoComplete="name"
                                isFocused={true}
                                onChange={(e) => setData('name', e.target.value)}
                            />

                            <InputError message={errors.name} className="mt-2" />
                        </div>

                        <div className="mt-4">
                            <InputLabel htmlFor="email" value="Email" />

                            <TextInput
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                className="block w-full mt-1"
                                autoComplete="username"
                                onChange={(e) => setData('email', e.target.value)}
                            />

                            <InputError message={errors.email} className="mt-2" />
                        </div>

                        <div className="mt-4">
                            <InputLabel htmlFor="phone_number" value="Phone number" />

                            <TextInput
                                id="phone_number"
                                type="text"
                                name="phone_number"
                                value={data.phone_number}
                                className="block w-full mt-1"
                                onChange={(e) => setData('phone_number', e.target.value)}
                            />

                            <InputError message={errors.phone_number} className="mt-2" />
                        </div>

                        <div className="mt-4">
                            <InputLabel
                                htmlFor="problem_description"
                                value="Problem description"
                            />

                            <TextArea
                                id="problem_description"
                                name="password_confirmation"
                                value={data.problem_description}
                                className="block w-full mt-1"
                                onChange={(e) =>
                                    setData('problem_description', e.target.value)
                                }
                            />

                            <InputError
                                message={errors.problem_description}
                                className="mt-2"
                            />
                        </div>

                        <div className="flex items-center justify-between mt-4">
                            <h5
                        onClick={() => formHandler()}
                            className="text-sm text-gray-600 underline hover:cursor-pointer">I want check Ticket Status</h5>
                            <PrimaryButton className="ms-4" disabled={processing}>
                                Open ticket
                            </PrimaryButton>
                        </div>
                    </form>
                </div>
    );
};
