import React, { useEffect } from "react";

import { Fancybox as NativeFancybox } from "@fancyapps/ui/dist/fancybox.esm.js";
import "@fancyapps/ui/dist/fancybox.css";

const Fancybox = (props) => {
    const delegate = props.delegate || "[data-fancybox]";
    const openHandle = props.openHandle || {};

    NativeFancybox.bind(delegate, {
        groupAttr: false,
        on: {
            ready: (fancybox) => {

            },
            shouldClose: (fancybox) => {
                openHandle(false)
            }

        }
    });


    useEffect(() => {
        const opts = props.options || {};

        NativeFancybox.bind(delegate, opts);
        return () => {
            NativeFancybox.destroy();
        };
    }, []);

    return <>
        {props.children}

    </>;
}

export default Fancybox;
