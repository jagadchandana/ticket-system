import FlashAlerts from '@/Components/alerts/FlashAlerts';
import ApplicationLogo from '@/Components/ApplicationLogo';
import { PageProps } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import { PropsWithChildren } from 'react';

export default function Guest({ children }: PropsWithChildren) {
    const { flash } = usePage<PageProps>().props;
    return (
        <>
            <div className="flex min-h-[100vh] flex-1">

                <div className="relative flex-1 hidden w-0 lg:block">
                    <img
                        className="absolute inset-0 object-cover w-full h-full"
                        src="/assets/banner.webp"
                        alt="banner"
                    />
                </div>
                <div className="flex flex-col justify-center flex-1 px-4 py-8 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
                    <div className="">{children}</div>

                </div>
                <FlashAlerts flash={flash} />
            </div>
        </>

    );
}
