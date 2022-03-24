import { Header, Footer, singleArticle } from "components";
import { setTitle } from "utils/setTitle";
import SingleArticle from "../components/SingleArticle";
const Articles = () => {
  return (
    <div className="">
      <Header />
      {setTitle("Article")}

      <div className="   w-32 m-auto text-2xl text-primary pt-14 text-center border-b-2 border-solid border-primary">
        All Articles
      </div>
      <div className="flex  px-40 py-8 xs:px-2 xs:w-full">
        <SingleArticle />
      </div>
      <Footer />
    </div>
  );
};

export default Articles;
