type YouTubeVideoProps = {
  videoId: string;
  title: string;
  className?: string;
};

export default function YouTubeVideo({
  videoId,
  title,
  className = "",
}: YouTubeVideoProps) {
  return (
    <iframe
      className={className}
      src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&rel=0&modestbranding=1&playsinline=1`}
      title={title}
      allow="autoplay; encrypted-media; picture-in-picture"
      allowFullScreen
    />
  );
}