import Image from "next/image";

type BrandMarkProps = Readonly<{
  compact: boolean;
  inverse: boolean;
}>;

export function BrandMark({ compact, inverse }: BrandMarkProps) {
  return (
    <span className="brand-mark">
      <span className="brand-mark__icon" aria-hidden="true">
        <Image
          src="/images/voxa-app-icon.png"
          alt=""
          width={36}
          height={36}
          priority
        />
      </span>
      {!compact && (
        <span className={inverse ? "brand-mark__name is-inverse" : "brand-mark__name"}>
          Voxa Cue
        </span>
      )}
    </span>
  );
}
