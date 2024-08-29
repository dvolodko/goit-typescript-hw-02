export default function ImageCard({ urls: { small }, altDescription }) {
  return (
    <div>
      <img src={small} alt={altDescription}></img>
    </div>
  );
}
