import Article from "./components/article";
import Aside from "./components/aside";
import Hero from "./components/hero";
import Section from "./components/section";

function App() {
  return (
    <div id="App" className="App">
      <Hero />
      <main>
        <Section ifp={"About"} cfp={"bg-blue-500 sm:flex-row"}>
          <Aside cfp={"bg-yellow-500"}>
            aside
          </Aside>
          <Article>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis, nam sit quibusdam iure quod repellendus laboriosam blanditiis inventore veritatis? Distinctio modi minus reprehenderit recusandae fuga et? Illo incidunt eaque maxime.
          </Article>
        </Section>
        <Section ifp={"Gallery"} cfp={"bg-green-500 sm:flex-row-reverse"}>
          <Aside cfp={"bg-yellow-500"}>
            aside
          </Aside>
          <Article>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi quibusdam sint fugiat temporibus obcaecati a sit eligendi iure eaque, in sapiente, ullam iste doloremque dolores excepturi enim. Iste, cupiditate quod!
          </Article>
        </Section>
      </main>
    </div>
  );
}

export default App;
