import GifLoader from "react-gif-loader";

export default function Gif() {
  return (
    <div className="h-full w-full bg-transparent">
      <GifLoader
        loading={true}
        imageSrc="/logos/logoGif.gif"
        imageStyle={{
          width: "100%",
          height: "100%",
          backgroundColor: "transparent",
        }}
        overlayBackground="rgba(0,0,0,0.5)"
      />
    </div>
  );
}
