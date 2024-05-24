import React from 'react'
import Seo from '../../components/common/Seo'
import MainHeader from '../../components/header/main-header'
import Footer from '../../components/footer/footer'
import CallToActions from '../../components/common/CallToActions'
import BlogsList from '../../components/blogs/BlogsList'
function Blogs() {
  return (
    <div className="position-relative   ">
      <Seo pageTitle={"Compare"} />
      <div className="header-margin"></div>
      <MainHeader />
      <BlogsList/>
      <CallToActions />
      <Footer className="text-dark"/>
    </div>
  )
}

export default Blogs