import React, { useEffect } from 'react';
import './Alert.css';

interface AlertProps {
    onClose: () => void;
}

const Alert: React.FC<AlertProps> = ({ onClose }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, 3000); // 3 seconds

        return () => clearTimeout(timer); // Cleanup timer on component unmount
    }, [onClose]);

    return (
        <div className="alert alert-danger alert-overlay" role="alert">
            Cannot Divide By Zero
        </div>
    );
}

export default Alert;
