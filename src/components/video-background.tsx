export default function VideoBackground() {
  return (
    <div
      className="absolute top-0 left-0 h-screen w-screen z-0
    bg-gradient-to-b from-[#000000] to-[#D5FFC4] 
    "
    >
      <video
        autoPlay // Uruchamia wideo automatycznie
        loop // Powtarza wideo w pętli
        muted // Wycisza wideo (wymagane do autoPlay w wielu przeglądarkach)
        playsInline // Ważne dla odtwarzania wideo na urządzeniach mobilnych
        className="video-element"
      >
        {/* WebM jako preferowany format */}
        <source src="/videos/lunbi-background-gradient.mp4" type="video/mp4" />
        {/* Warto dodać fallback w postaci MP4 dla lepszej kompatybilności */}
        {/* <source src="/videos/tlo.mp4" type="video/mp4" /> */}
        Twoja przeglądarka nie obsługuje tagu wideo.
      </video>
    </div>
  );
}
