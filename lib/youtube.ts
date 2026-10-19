export type ThumbnailQuality = "maxresdefault" | "sddefault" | "hqdefault";

export function youtubeThumbnail(
  videoId: string,
  quality: ThumbnailQuality = "maxresdefault",
) {
  return `https://i.ytimg.com/vi/${videoId}/${quality}.jpg`;
}

export function youtubeWatchUrl(videoId: string) {
  return `https://youtu.be/${videoId}`;
}

/** Muted, looping, chrome-less embed for ambient background playback. */
export function youtubeBackgroundEmbed(videoId: string) {
  const params = new URLSearchParams({
    autoplay: "1",
    mute: "1",
    loop: "1",
    // `loop` only works when the playlist contains the same video.
    playlist: videoId,
    controls: "0",
    disablekb: "1",
    fs: "0",
    rel: "0",
    modestbranding: "1",
    iv_load_policy: "3",
    playsinline: "1",
    enablejsapi: "1",
  });
  return `https://www.youtube-nocookie.com/embed/${videoId}?${params}`;
}

/** Full player with controls and sound, opened on user click. */
export function youtubePlayerEmbed(videoId: string) {
  const params = new URLSearchParams({
    autoplay: "1",
    rel: "0",
    modestbranding: "1",
    playsinline: "1",
  });
  return `https://www.youtube-nocookie.com/embed/${videoId}?${params}`;
}
