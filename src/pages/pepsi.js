import React, { useState } from "react";
import styled from 'styled-components';
import { Head, NavMenu, PopMenu } from '../components';
import '../styles/index.css';

const OPTIONS = [
  { bg: '#0062be', img: "http://qiniuargus.weready.online/storybooks/pepsi/pepsi001.png"},
  { bg: '#e60c2c', img: "http://qiniuargus.weready.online/storybooks/pepsi/pepsi002.png"},
  { bg: '#1e1e1e', img: "http://qiniuargus.weready.online/storybooks/pepsi/pepsi003.png"},
];
const SETTING = {
  distanceSide: '6em',
}
const Section = styled.section`
  position: relative;
  min-height: 100vh;

  font-size: 16px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (max-width: 500px) {
    font-size: 10px;
  }

`;
const HeaderBar = styled.div`
  padding: 1em ${SETTING.distanceSide};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Jumbotron = styled.div`
  position: relative;
  margin: 0 ${SETTING.distanceSide};

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 500px) {
    width: 100%;
    flex-direction: column-reverse;
    margin: .6em 0;
  }

`;
const Selector = styled.ul`
  list-style-type: none;

  display: flex;
  justify-content: center;

  & li {
    margin: 1em;
    transition: .5s;
  }
  & li:hover {
    transform: translateY(-20%);
  }
  & img {
    height: 6em;
  }
`;

const Logo = styled.div`
  & img {
    width: 5em;
    height: 5em;
  }
`;
const Menu = styled.ul`
`;

const TextArea = styled.div`
  width: 50%;
  color: #fff;

  & h1, h2 {
    text-transform: uppercase;
  }
  & h2 {
    font-size: 3.6em;
    line-height: 1em;
  }
  & h1 {
    font-size: 7.2em;
    line-height: 1em;
  }
  & p {
    margin: 0;
    letter-spacing: .06em;
    line-height: 1.4em;
    text-align: justify;
    text-justify: inter-ideograph;/*IE*/
  }
  @media screen and (max-width: 500px) {
    width: 100%;
    padding: 0 3.6em;
  }
`;
const Image = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 500px) {
    width: 100%;
    margin: 3.2em;
  }
`;
const Contact = styled.ul`
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%); */

  list-style: none;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & li {
    padding: 1em 0;
    list-style: none;
    cursor: pointer;
    transition: .5s;
  }
  & li:hover {
    transform: scale(1.1);
  }
  & img {
    filter: invert(1);
  }

  @media screen and (max-width: 500px) {
    display: none;
  }
`;

const navItems = [
  { key: 'home',      url: '/#', text: 'Home' },
  { key: 'products',  url: '/#', text: 'Products' },
  { key: 'whatisnew', url: '/#', text: "What's New" },
  { key: 'newsletter',url: '/#', text: 'Newsletter' },
  { key: 'contact',   url: '/#', text: 'Contact' },
];

export default function LandingPage() {
  const [index, setIndex] = useState(0);

  return (
    <>
      <Head context={{ head: '百事可乐' }} />
      <Section style={{ background: OPTIONS[index].bg }}>
        
        <PopMenu color='#999' items={navItems} />
        <HeaderBar>
          
          <Logo>
            <img src="http://qiniuargus.weready.online/storybooks/pepsi/logo.png" />
          </Logo>

          <Menu>
            <NavMenu items={navItems} />
          </Menu>

        </HeaderBar>
        
        <Jumbotron className="jumbotron">
          
          <TextArea>
            <h2>That's what</h2>
            <h1>I like</h1>
            <p>It is not the critic who counts; not the man who points out how the strong man stumbles, or where the doer of deeds could have done them better. The credit belongs to the man who is actually in the arena, whose face is marred by dust and sweat and blood; who strives valiantly; who errs, who comes short again and again, because there is no effort without error and shortcoming; but who does actually strive to do the deeds; who knows great enthusiasms, the great devotions; who spends himself in a worthy cause; who at the best knows in the end the triumph of high achievement, and who at the worst, if he fails, at least fails while daring greatly, so that his place shall never be with those cold and timid souls who neither know victory nor defeat.</p>
          </TextArea>

          <Image>
            <img src={OPTIONS[index].img} />
          </Image>

        </Jumbotron>
        
        <Selector>
        { OPTIONS.map((op, id) => (
          <li onClick={() => setIndex(id)}><img src={op.img} /></li>
        ))}
        </Selector>

        <Contact>
          <li><img src='http://qiniuargus.weready.online/icons/facebook.png' /></li>
          <li><img src='http://qiniuargus.weready.online/icons/instagram.png'/></li>
          <li><img src='http://qiniuargus.weready.online/icons/twitter.png' /></li>
        </Contact>

      </Section>

    </>
  )
}
