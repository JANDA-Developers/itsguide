import { useRouter } from "next/router";
import { useEffect } from "react";

export const useFragmentMove = () => {
    const router = useRouter();
    let urlFragment = router.asPath.match(/#([a-z0-9]+)/gi);

    useEffect(() => {
        if (typeof urlFragment?.[0] === "string") {
            setTimeout(() => {
                const id = urlFragment?.[0].replace("#", "");
                console.log({ id });
                const target = document.getElementById(id);
                if (target) {
                    target.scrollIntoView({
                        behavior: "smooth",
                        inline: "start",
                        block: "start",
                    });
                }
            }, 700);

            return;
        }
    }, [urlFragment?.[0]]);
};
