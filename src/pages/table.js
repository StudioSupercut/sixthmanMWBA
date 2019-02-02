import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const TablePage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Table page created</h1>
    <p>Welcome to Table</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default TablePage
