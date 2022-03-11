import GifLoader from "react-gif-loader";

export default function Gif() {
  return (
    <div id="cont">
      <section id="section">
        <GifLoader
          loading={true}
          imageSrc="/logos/logoGif.gif"
          imageStyle={{
            width: "100%",
            height: "100%",
          }}
          // overlayBackground="rgba(0,0,255,0)"
        />
      </section>
    </div>
  );
}
