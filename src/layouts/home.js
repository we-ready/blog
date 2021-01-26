import React from 'react';
import { Head, PageTopAnchor, ShortCutToTop } from '../components';
import JumbotronSection from './section.jumbotron';
import BlogListSection from './section.bloglist';
import FooterSection from './section.footer'; 

export default function HomeLayout ({context}) {
  return (
  <>
    <Head context={context} />

    <PageTopAnchor />
    <ShortCutToTop />

    <JumbotronSection />
    <BlogListSection />
    <FooterSection />
  </>
  )
}
