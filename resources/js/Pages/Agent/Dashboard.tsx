import InputLabel from '@/Components/InputLabel';
import StatusBadge from '@/Components/StatusBadge';
import TextInput from '@/Components/TextInput';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, router } from '@inertiajs/react';
import { useState } from 'react';

export default function Dashboard({ tickets, filters }: any) {

    const [search, setSearch] = useState('');
    const handleSearch = (e: any) => {
        setSearch(e);
        router.get(
            'dashboard',
            {
                page: filters.page,
                perPage: filters.rowPerPage,
                sort: filters.sortBy,
                sortDirection: filters.sortDirection,
                searchValue: e,
            },
            {
                replace: true,
                preserveState: true,
            }
        );
    }
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Tickets
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden shadow-sm sm:rounded-lg">


                        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                            <div className="pb-4 ">
                                <div className="relative mt-1">
                                    <TextInput
                                        onChange={(e) => handleSearch(e.target.value)}
                                        value={search}
                                        type="text" id="table-search" className="block pt-2 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 " placeholder="Search customers" />
                                </div>
                            </div>
                            <table className="w-full text-sm text-left text-gray-500 ">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">
                                            Ref. number
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Name
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Email
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Phone
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Status
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Options
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {tickets?.data?.map((ticket: any) => (
                                        <tr className="bg-white border-b border-gray-200 ">
                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                                {ticket.reference_number}
                                            </th>
                                            <td className="px-6 py-4">
                                                {ticket.name}
                                            </td>
                                            <td className="px-6 py-4">
                                                {ticket.email}
                                            </td>
                                            <td className="px-6 py-4">
                                                {ticket.phone_number}
                                            </td>
                                            <td className="px-6 py-4">
                                                <StatusBadge status={ticket.status} />
                                            </td>
                                            <td className="flex gap-2 px-6 py-4">
                                                <Link href={route('ticket.edit', { id: ticket.id })} className="font-medium text-blue-600 uppercase hover:underline">View</Link>
                                                <Link href={route('ticket.delete', { id: ticket.id })}
                                                    method='delete'
                                                    className="font-medium text-red-600 uppercase hover:underline">Delete</Link>
                                            </td>
                                        </tr>

                                    ))}
                                    {tickets?.data?.length === 0 && (
                                        <tr className="bg-white border-b border-gray-200 ">
                                            <td colSpan={6} className="px-6 py-4 text-center">
                                                No tickets found
                                            </td>
                                        </tr>
                                    )}

                                </tbody>
                            </table>


                            <div className="flex justify-end p-2">
                                {tickets.current_page > 1 ? (
                                    <Link
                                        href={route('dashboard', {
                                            page: tickets.current_page - 1,
                                            perPage: tickets.per_page,
                                            sort: filters.sortBy,
                                            sortDirection: filters.sortDirection,
                                            searchValue: filters.searchValue,
                                        })}
                                        className="flex items-center justify-center h-8 px-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700"
                                    >
                                        Previous
                                    </Link>
                                ) : (
                                    <span className="flex items-center justify-center h-8 px-3 text-sm font-medium text-gray-400 bg-gray-200 border border-gray-300 rounded-lg cursor-not-allowed">
                                        Previous
                                    </span>
                                )}
                                {tickets.current_page < tickets.last_page ? (
                                    <Link
                                        href={route('dashboard', {
                                            page: tickets.current_page + 1,
                                            perPage: tickets.per_page,
                                            sort: filters.sortBy,
                                            sortDirection: filters.sortDirection,
                                            searchValue: filters.searchValue,
                                        })}
                                        className="flex items-center justify-center h-8 px-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg ms-3 hover:bg-gray-100 hover:text-gray-700"
                                    >
                                        Next
                                    </Link>
                                ) : (
                                    <span className="flex items-center justify-center h-8 px-3 text-sm font-medium text-gray-400 bg-gray-200 border border-gray-300 rounded-lg cursor-not-allowed ms-3">
                                        Next
                                    </span>
                                )}
                            </div>


                        </div>

                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
