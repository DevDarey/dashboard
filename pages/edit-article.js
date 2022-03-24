import React from "react";
import Link from "next/link";

function EditArticle(props) {
  return (
    <div>
      <div className="mx-10 my-8">
        <h1 className=" font-bold text-4xl">Quartenion</h1>
        <Link href="/edit-article">
          <img src="/icons/back.svg" className="mt-14 cursor-pointer" />
        </Link>
        <div className="ml-4">
          <div className="text-primary text-2xl font-bold  ">
            Perform Graphql Mutation And Query On The Same Screen/Page
          </div>
          <div className="flex items-center  ">
            <img className="mr-2" src="/icons/history.svg" />
            <p className="mr-4">Posted on:Feb 2, 2021</p>
            <img className="mr-2" src="/icons/history.svg" />
            <p className="mr-4">Deadline:Feb 2, 2021</p>
          </div>
          <div>
            <p>
              At mauris diam neque massa. Malesuada velit diam, aliquam amet,
              bibendum facilisis est nec. Ac vestibulum, nulla gravida facilisi
              nunc urna rhoncus, quis sit. Nam commodo placerat gravida lacus.
              Eget vel vitae urna gravida lorem malesuada cursus quam neque.
              Amet nulla sit risus, tortor morbi vel, imperdiet. Dignissim
              tellus augue ultricies in ac tortor. Nec ac velit, scelerisque
              elementum. Odio egestas consequat odio tortor sit aenean sapien.
              Natoque ac cras scelerisque diam. Viverra porttitor amet tellus
              non in aenean consectetur tempor. In diam suscipit quam arcu
              condimentum purus. Sed ac rhoncus donec a quam nunc nisl quam. In
              tincidunt neque ante sagittis. Diam malesuada elementum aenean sit
              pellentesque. Nunc tristique nisi elementum venenatis senectus
              enim ut pretium lectus. Enim tellus vulputate mus maecenas mollis
              turpis tellus. Laoreet nec varius nec ac risus habitasse
              ullamcorper ut. Amet, tortor sem tristique in. Ultrices sapien,
              urna interdum nulla nibh at ut enim. Suscipit eu ac odio nibh
              vitae vitae faucibus. Lacus et imperdiet massa viverra cursus
              tellus fusce et vitae. Consectetur erat eu eget ut vel, non risus
              interdum. Cras nisi leo massa quis scelerisque turpis in. Tellus
              cras consequat ante posuere maecenas eu sed. Congue amet hendrerit
              ultricies pharetra interdum enim habitant suspendisse. Orci etiam
              nullam risus gravida orci. Tempus, sollicitudin fringilla nibh
              nisl. Et diam, suspendisse sit nibh aliquam enim commodo, elit
              tortor. Massa mauris scelerisque fermentum tincidunt at sed
              turpis. Aenean nisi dignissim enim aliquet feugiat ac felis quam
              cursus. Aliquam amet turpis ut gravida ac, nulla. Ullamcorper
              consectetur dignissim vitae ipsum ac molestie commodo. Nulla
              tempor libero netus sed sed.
            </p>
            <p>
              At mauris diam neque massa. Malesuada velit diam, aliquam amet,
              bibendum facilisis est nec. Ac vestibulum, nulla gravida facilisi
              nunc urna rhoncus, quis sit. Nam commodo placerat gravida lacus.
              Eget vel vitae urna gravida lorem malesuada cursus quam neque.
              Amet nulla sit risus, tortor morbi vel, imperdiet. Dignissim
              tellus augue ultricies in ac tortor. Nec ac velit, scelerisque
              elementum.
            </p>
          </div>
          <div className="mt-10">
            <h1 className="font-bold text-4xl text-primary">Your Summary</h1>
            <p>
              At mauris diam neque massa. Malesuada velit diam, aliquam amet,
              bibendum facilisis est nec. Ac vestibulum, nulla gravida facilisi
              nunc urna rhoncus, quis sit. Nam commodo placerat gravida lacus.
              Eget vel vitae urna gravida lorem malesuada cursus quam neque.
              Amet nulla sit risus, tortor morbi vel, imperdiet. Dignissim
              tellus augue ultricies in ac tortor. Nec ac velit, scelerisque
              elementum.
            </p>
            <p>Copy this link to share</p>
            <div className=" flex items-center bg-primary w-9/12 rounded-md px-4 py-4">
              <img src="/icons/link.svg" />
              <p className="text-white text-xl ml-8">
                http://emmanuel.com/dfjaienun9fvaeijsdfsj
              </p>
            </div>
            <div>
              <p>or you can share via social media</p>
              <div className="flex items-center   ">
                <div className="bg-primary p-8 m-2 ">
                  <Link href="#">
                    <a>
                      <img src="/icons/fb.svg" />
                    </a>
                  </Link>
                </div>
                <div className="bg-primary p-8 m-2 ">
                  <Link href="#">
                    <a>
                      <img src="/icons/tweet.svg" />
                    </a>
                  </Link>
                </div>
                <div className="bg-primary p-8 m-2">
                  <Link href="#">
                    <a>
                      <img src="/icons/linked.svg" />
                    </a>
                  </Link>
                </div>
                <div className="bg-primary p-8 m-2">
                  <Link href="#">
                    <a>
                      <img src="/icons/insta.svg" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-20">
              <Link href="">
                <a className=" p-4 px-28 rounded-md border-2  border-black">
                  Edit this article
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditArticle;
