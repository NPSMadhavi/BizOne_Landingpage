export default function ProductScreenshot({ src, alt, className, style }) {
  return (
    <div className="product-screenshot">
      <img src={src} alt={alt} className={className}
        style={style} draggable={false} decoding="async" />
    </div>
  );
}
