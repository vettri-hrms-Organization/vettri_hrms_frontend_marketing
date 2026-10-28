import Image from "next/image";

/** A real product screenshot (2720x1700, captured with sample data) in a browser window. */
export default function BrowserFrame({ src, alt, path = "app.vettrihrms.in", priority = false }: { src: string; alt: string; path?: string; priority?: boolean }) {
  const [host, ...rest] = path.split("/");
  return (
    <div className="v-browser">
      <div className="v-browser__bar" aria-hidden="true">
        <span className="v-browser__dots"><i /><i /><i /></span>
        <span className="v-browser__url"><b>{host}</b>{rest.length ? `/${rest.join("/")}` : ""}</span>
      </div>
      <Image src={src} alt={alt} width={2720} height={1700} sizes="(max-width: 1200px) 100vw, 1120px" priority={priority} />
    </div>
  );
}
