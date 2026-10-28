/**
 * A zoomed-in crop of a real product screenshot, used inside feature cards.
 * `zoom` is the image width relative to the frame (e.g. 170 = 170%);
 * `x`/`y` pick the focal point in percent. Decorative: the card text
 * carries the meaning.
 */
export default function ShotCrop({ src, zoom = 170, x = 50, y = 30 }: { src: string; zoom?: number; x?: number; y?: number }) {
  return (
    <div
      className="v-shot"
      aria-hidden="true"
      style={{ backgroundImage: `url(${src})`, backgroundSize: `${zoom}% auto`, backgroundPosition: `${x}% ${y}%` }}
    />
  );
}
