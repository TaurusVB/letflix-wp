import useMovie from "@/hooks/useMovie";
import { useRouter } from "next/router";
import { AiOutlineArrowLeft } from "react-icons/ai";

const Watch = () => {
  const router = useRouter();
  const { movieId } = router.query;

  const { data } = useMovie(movieId as string);

  return (
    <div className=" h-screen w-screen bg-black">
      <nav className=" fixed w-full p-4 z-10 flex flex-row items-center gap-8 bg-black/70">
        <AiOutlineArrowLeft
          onClick={() => router.push("/")}
          size={40}
          color="white"
          className=" cursor-pointer"
        />
        <p className=" text-white text-1xl md:text-3xl font-bold">
          <span className=" font-light">Watching: </span>
          {data?.title}
        </p>
      </nav>
      <video
        src={data?.videoUrl}
        className=" h-full w-full"
        autoPlay
        controls
      ></video>
    </div>
  );
};

export default Watch;
