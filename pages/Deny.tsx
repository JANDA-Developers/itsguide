import { useRouter } from "next/router";
import { useEffect } from "react";


interface Iprops {
    msg?: string
    redirect?: string
}

const PageDeny: React.FC<Iprops> = ({ msg = "해당 페이지에 대한 접근 권한이 없습니다.", redirect }) => {
    const router = useRouter();

    useEffect(() => {
        if (redirect)
            router.push(redirect)
    }, [redirect])
    if (redirect) return null;
    return (
        <div style={{ color: '#000', background: '#fff', fontFamily: '-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif', height: '100vh', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}><div><style dangerouslySetInnerHTML={{ __html: "body { margin: 0 }" }} /><h1 style={{ display: 'inline-block', borderRight: '1px solid rgba(0, 0, 0,.3)', margin: 0, marginRight: '20px', padding: '10px 23px 10px 0', fontSize: '24px', fontWeight: 500, verticalAlign: 'top' }}>권한없음</h1><div style={{ display: 'inline-block', textAlign: 'left', lineHeight: '49px', height: '49px', verticalAlign: 'middle' }}><h2 style={{ fontSize: '14px', fontWeight: 'normal', lineHeight: 'inherit', margin: 0, padding: 0 }}>{msg}</h2></div></div></div>
    );
}

export default PageDeny
