import React from "react";
import Link from "next/link";

import { Layout } from "../components/layout";

const Homepage: React.FC = () => {
  return <Layout>
    <p><h1>Artciles :</h1></p>
    <ul>
    <li><h3><Link href="/blog/first-article">Epic Fall Find of Yellowfoot Chanterelles</Link></h3></li>
    <li><h3><Link href="/blog/second-article">Of Ramps and Ripeness</Link></h3></li>
    </ul></Layout>;
};

export default Homepage;
