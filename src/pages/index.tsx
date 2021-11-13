// If you don't want to use TypeScript you can delete this file!
import * as React from "react"
import { PageProps } from "gatsby"
import Layout from "../layouts/layout"
import Seo from "../components/seo"
import StyledLanding from "../components/home/landing"
import StyledSkill from "../components/home/skill"
import StyledCareer from "../components/home/career"
import StyledResearch from "../components/home/research"
import StyledAbout from "../components/home/about"
import StyledContact from "../components/home/contact"

const IndexPage: React.FC<PageProps> = ({ data, path }) => (
  <Layout>
      <Seo title="Home" />
      <StyledLanding />
      <StyledAbout />
      <StyledSkill />
      <StyledCareer />
      <StyledResearch />
      <StyledContact />
  </Layout>
)

export default IndexPage
