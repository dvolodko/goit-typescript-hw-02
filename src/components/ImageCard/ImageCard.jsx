export default function ImageCard({ urls: { small }, altDescription }) {
  return <img src={small} alt={altDescription}></img>;
}
