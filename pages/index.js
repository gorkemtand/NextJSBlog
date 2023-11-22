import { Fragment } from "react";
import Hero from "../components/home-page/hero";
import FeaturedPosts from "../components/home-page/featured-posts";
import Head from "next/head";
import { getFeaturedPosts } from "../lib/posts-util";

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>Görkem' Blog</title>
        <meta
          name="description"
          content="I post about programing and web development"
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.post} />
    </Fragment>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      post: featuredPosts,
    },
    revalidate: 1800,
  };
}

export default HomePage;
