import { Check } from "lucide-react";

/** Infinite capability ticker. The list is rendered twice so the CSS loop is
 *  seamless; the duplicate is hidden from assistive technology. */
export default function Marquee({ items }: { items: string[] }) {
  const row = (hidden: boolean) => (
    <ul className="v-marquee__row" aria-hidden={hidden || undefined}>
      {items.map((item) => (
        <li key={item}><Check size={15} aria-hidden="true" />{item}</li>
      ))}
    </ul>
  );
  return (
    <div className="v-marquee" aria-label="Included capabilities">
      <div className="v-marquee__track">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
