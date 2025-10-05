export default function VideoBackground() {
  return (
    <div
      className="absolute top-0 left-0 h-screen w-screen z-0
    bg-gradient-to-b from-[#000000] to-[#D5FFC4] 
    "
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="video-element h-full w-full object-cover"
      >
        <source src="/videos/lunbi-background-gradient.mp4" type="video/mp4" />
        Twoja przeglądarka nie obsługuje tagu wideo.
      </video>
    </div>
  );
}
