import SuccessAlert from "./SuccessAlert";

export default function FlashAlerts({ flash }:{flash:any}) {
    let isSuccessArray = Array.isArray(flash?.success) ? true : false;
    let isErrorArray = Array.isArray(flash?.error) ? true : false;
    return (
        <>
            {flash?.success && (
                <SuccessAlert
                    key={ flash?.success}
                    title="Success"
                    message={ flash?.success}
                />
            )}

        </>
    );
}
