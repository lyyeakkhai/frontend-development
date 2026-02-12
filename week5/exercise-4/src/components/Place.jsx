export default function Place({ id, title, image }) {
  const { src, alt } = image;
  return (
    <li key={id} className="place-item">
      <button>
        <img src={src} alt={alt} />
        <h3>{title}</h3>
      </button>
    </li>
  );
}
