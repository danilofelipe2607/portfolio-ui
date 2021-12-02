import "./list-videos.css";

export default function ListVideos() {
  const listUrls = [
    "https://www.youtube.com/embed/NxXPbXMYAe8",
    "https://www.youtube.com/embed/NxXPbXMYAe8",
    "https://www.youtube.com/embed/NxXPbXMYAe8",
    "https://www.youtube.com/embed/NxXPbXMYAe8",
  ];
  return (
    <div className="container-list-videos">
      {listUrls.map((url) => (
        <iframe
          className="iframe-list"
          src={url}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      ))}
    </div>
  );
}
