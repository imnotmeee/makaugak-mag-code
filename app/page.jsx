import Feed from "@components/Feed";

const fetchPosts = async () => {
  const response = await fetch(`${process.env.HOST}/api/prompt`, {
    cache: "no-store",
    next: {
      revalidate: 20,
    },
  });
  return await response.json();
};

const Home = async () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center"> AI-Powered Prompts</span>
      </h1>
      <p className="desc text-center">
        Promptopia is an open-source AI prompting tool for modern world to
        discover, create and share creative prompts
      </p>

      <Feed allPosts={await fetchPosts()} />
    </section>
  );
};

export default Home;
