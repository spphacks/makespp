import React from "react";
// import { Link } from "gatsby";
import Header from "../components/smallheader";
import RegisterComponent from "../components/register";

import Landing from "../components/landing";
import Layout from "../components/layout";
import SEO from "../components/seo";

const Register = () => (
  <Layout>
    <Header />
    <div className="center">
      <h2>
        {" "}
        <a href="https://hackcodeofconduct.org/676-makespp">
          MakeSPP Code of Conduct
        </a>{" "}
      </h2>
    </div>
  </Layout>
);

export default Register;
