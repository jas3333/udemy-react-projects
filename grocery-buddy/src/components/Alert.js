import { useEffect } from 'react';
const Alert = ({ type, message, showAlert }) => {
    useEffect(() => {
        const timeout = setTimeout(() => {
            showAlert();
        }, 3000);
        return () => clearTimeout(timeout);
    }, [showAlert]);

    return (
        <div className={`container-row alert alert-${type}`}>
            <p>{message}</p>
        </div>
    );
};

export default Alert;
