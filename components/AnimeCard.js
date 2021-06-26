import Image from "next/image";

function AnimeCard({ image, rank, title, score }) {
  return (
    // <div className="p-7 mx-auto my-5 shadow-xl transition duration-300 ease-out transform hover:shadow-2xl hover:scale-105 bg-an_theme-dark flex flex-col">
    //   {/* Individial card goes here! */}
    //   <div className=" border-2">
    //     <Image src={image} width={200} height={250} objectFit="cover" alt="" />
    //   </div>
    //   <h1 className="text-center text-lg mt-3 flex-wrap">{title}</h1>
    // </div>
    <div className="bg-an_theme-dark p-10 sm:p-6 m-5 ">
      <div className="flex flex-wrap border-2 border-an_theme-light">
        <Image
          src={image}
          width={300}
          height={400}
          objectFit="cover"
          alt=""
          className=""
        />
      </div>
      <div>
        <h1 className="text-3xl mt-5 sm:text-xl text-center">{title}</h1>
      </div>
    </div>
  );
}

export default AnimeCard;
