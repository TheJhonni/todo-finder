import GifLoader from "react-gif-loader";

export default function Gif({ src, style }) {
  return (
    <div className="img-textLeft h-screen">
      <img src="/logos/logoGif.gif" alt="" />
      {/* <section id="section" className="w-[250px]">
        <GifLoader
          loading={true}
          imageSrc={src || "/logos/logoGif.gif"}
          imageStyle={
            style || {
              width: "100%",
              height: "100%",
            }
          }
        />
      </section> */}
    </div>
  );
}
