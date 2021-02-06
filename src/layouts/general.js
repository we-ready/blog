import React from 'react';
import { Head, PageTopAnchor, ShortCutToTop } from '../components';
import HeaderSection from './section.header';
import FooterSection from './section.footer';

export default function GeneralLayout ({context, children}) {
  return (
  <>
    <Head context={context} />

    <PageTopAnchor />
    <ShortCutToTop>👍</ShortCutToTop>

    <HeaderSection />
    {children}
    <FooterSection />
  </>  
  )
}
