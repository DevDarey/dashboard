import Link from "next/link";
const SingleArticle = () => {
  const data = [
    {
      heading: " Rhoncus arcu massa",
      para: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae amet,
          enim consectetur sagittis vitae. Amet nascetur eu, iaculis ullamcorper
          fermentum aliquam..`,
    },
    {
      heading: " Rhoncus arcu massa",
      para: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae amet,
          enim consectetur sagittis vitae. Amet nascetur eu, iaculis ullamcorper
          fermentum aliquam..`,
    },
    {
      heading: " Rhoncus arcu massa",
      para: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae amet,
          enim consectetur sagittis vitae. Amet nascetur eu, iaculis ullamcorper
          fermentum aliquam..`,
    },
    {
      heading: " Rhoncus arcu massa",
      para: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae amet,
          enim consectetur sagittis vitae. Amet nascetur eu, iaculis ullamcorper
          fermentum aliquam..`,
    },
    {
      heading: " Rhoncus arcu massa",
      para: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae amet,
          enim consectetur sagittis vitae. Amet nascetur eu, iaculis ullamcorper
          fermentum aliquam..`,
    },
    {
      heading: " Rhoncus arcu massa",
      para: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae amet,
          enim consectetur sagittis vitae. Amet nascetur eu, iaculis ullamcorper
          fermentum aliquam..`,
    },
    {
      heading: " Rhoncus arcu massa",
      para: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae amet,
          enim consectetur sagittis vitae. Amet nascetur eu, iaculis ullamcorper
          fermentum aliquam..`,
    },
    {
      heading: " Rhoncus arcu massa",
      para: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae amet,
          enim consectetur sagittis vitae. Amet nascetur eu, iaculis ullamcorper
          fermentum aliquam..`,
    },
    {
      heading: " Rhoncus arcu massa",
      para: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae amet,
          enim consectetur sagittis vitae. Amet nascetur eu, iaculis ullamcorper
          fermentum aliquam..`,
    },
  ];
  return (
    <>
      <div className="flex flex-wrap justify-between xs:flex-col ">
        {data.map((name, index) => (
          <div className="article__card  xs:w-full mb-10 p-5" key={index}>
            <h1 className="font-bold text-3xl text-primary mb-6">
              {name.heading}
            </h1>
            <p className="text-lg mb-3">{name.para}</p>
            <Link href="/article-page">
              <button className="w-full bg-article py-3 rounded-md text-white text-base  mt-6">
                Read Article
              </button>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default SingleArticle;
