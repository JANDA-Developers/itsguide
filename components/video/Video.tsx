import React, { useEffect, useRef } from "react";

interface IProp extends React.VideoHTMLAttributes<HTMLVideoElement> {}

export const Video = React.forwardRef<HTMLVideoElement, IProp>(
    ({ ...props }, ref) => {
        return <video ref={ref} className="JDvideo" {...props} />;
    }
);
