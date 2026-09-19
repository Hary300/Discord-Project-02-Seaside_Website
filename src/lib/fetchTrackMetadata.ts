export async function fetchTrackMetadata(url: string) {
  const response = await fetch(
    `https://soundcloud.com/oembed?format=json&url=${encodeURIComponent(url)}`
  );

  const data = await response.json();
  return {
    url,
    title: data.title,
    artist: data.author_name,
    thumbnail: data.thumbnail_url,
  };
}
