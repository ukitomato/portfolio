import * as React from "react"

import Layout from "@layouts/layout"
import Seo from "@components/seo"

import StyledLanding from "@components/home/landing"
import StyledAbout from "@components/home/about"
import StyledSkill from "@components/home/skill"
import StyledCareer from "@components/home/career"
import StyledResearch from "@components/home/research"
import StyledContact from "@components/home/contact"

const IndexPage = () => (
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
