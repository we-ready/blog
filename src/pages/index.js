import React from "react";
import HomeLayout from '../layouts/home';
import '../styles/index.css';

export default function HomePage() {
  return (
    <HomeLayout context={{ head: '首页' }} />
  )
}
