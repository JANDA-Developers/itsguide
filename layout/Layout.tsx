import $ from "jquery";
import Head from "next/head";
import React from "react";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import dynamic from "next/dynamic";
// const ReactTooltip = dynamic(() => import('react-tooltip'), { ssr: false });

interface IProp {}

export const Layout: React.FC<IProp> = ({ children }) => {
    return (
        <div className="container">
            <Head>
                <script
                    src="https://code.jquery.com/jquery-3.5.1.js"
                    integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc="
                    crossOrigin="anonymous"
                ></script>
                <script src="/normal.js"></script>
            </Head>
            <Header />
            <div>{children}</div>
            <Footer />
            {/* <ReactTooltip effect="solid" type="info" /> */}
        </div>
    );
};

export default Layout;
