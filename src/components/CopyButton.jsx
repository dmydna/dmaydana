import React, { useState } from "react";
import {Button} from "react-bootstrap";

export default function CopyButton({message}) {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        await navigator.clipboard.writeText(message || '');
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div onClick={handleCopy}>
            {copied ?
                (<i className="bi bi-check-circle ms-2 small bg1-hover p-2 rounded"></i>) :
                (<i className="bi bi-copy  ms-2 small bg1-hover p-2 rounded"></i>)}
        </div>
    );
}