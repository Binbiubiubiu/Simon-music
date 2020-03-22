import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { NextPage } from 'next';
import Layout from '@/layout';

const AboutPage: NextPage = () => {
  const router = useRouter();
  return <Layout></Layout>;
};

AboutPage.getInitialProps = async () => {
  return {};
};

export default AboutPage;
