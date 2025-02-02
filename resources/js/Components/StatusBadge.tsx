export default function StatusBadge({status}: {status: string}) {
    return (
        <span className={` uppercase px-2 py-1 text-xs font-bold text-black ${status === 'open' ? 'bg-yellow-400' : 'bg-green-400'} rounded-full`}>
            {status}
        </span>
    );
};
