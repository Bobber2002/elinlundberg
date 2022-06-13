const Article = ({ cfp, children }) => {
  return (
    <article className={`${cfp} h-[100vh] w-full sm:w-1/2 p-3 text-2xl flex flex-col align-center justify-center text-center`}>
      <p>{children}</p>
    </article>
  );
};

export default Article;
