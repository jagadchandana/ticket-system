import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { useForm, Head, Link } from "@inertiajs/react";
import { FormEventHandler, useState } from "react";

export default function StatusCheck({setForm}:any) {

    const { data, setData, post, processing, errors, reset } = useForm({
        reference_number: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('ticket.check'));
    };
    const formHandler = () => {
        setForm('open');
    }
    return (
        <div className="px-6 py-4 mt-6 bg-white rounded-lg shadow-md">
            <h1 className="text-3xl font-bold">Check my Ticket Status</h1>
            <p className="pb-4 mt-1 text-sm text-gray-600">
                Enter your reference number to check the status of your ticket.
            </p>
            <form onSubmit={submit}>
                <div>
                    <InputLabel htmlFor="reference_number" value="Reference number" />

                    <TextInput
                        id="reference_number"
                        name="reference_number"
                        value={data.reference_number}
                        className="block w-full mt-1"
                        isFocused={true}
                        onChange={(e) => setData('reference_number', e.target.value)}
                    />

                    <InputError message={errors.reference_number} className="mt-2" />
                </div>
                <div className="flex items-center justify-between mt-4">
                    <h5
                        onClick={() => formHandler()}
                        className="text-sm text-gray-600 underline hover:cursor-pointer">I want open Ticket</h5>
                    <PrimaryButton className="ms-4" disabled={processing}>
                        Check Status
                    </PrimaryButton>
                </div>
            </form>
        </div>
    );

};
