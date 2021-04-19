import { useState } from "react"

export const useImgLoading = (onloaded?: () => void) => {
    const [loaded,setLoaded] = useState(false);

    const handleLoaded = () => {
        setLoaded(true);
        onloaded?.()
    }

    return {loaded, setLoaded, handleLoaded}

}