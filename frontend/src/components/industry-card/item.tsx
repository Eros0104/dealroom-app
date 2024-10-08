import { useState } from "react";

interface Props {
  totalJobsAvailable: number;
  name: string;
  imageUrl: string;
}

const IndustryCardItem = ({ totalJobsAvailable, name, imageUrl }: Props) => {
  const [fallbackImageCalled, setFallbackImageCalled] = useState(false);

  const handleImageError = ({
    currentTarget,
  }: React.SyntheticEvent<HTMLImageElement, Event>) => {
    setFallbackImageCalled(true); // to prevent infinite loop
    currentTarget.src = "/images/default-company-icon.svg";
  };

  return (
    <div
      className={`
        flex flex-row gap-2 items-center
        text-sm font
    `}
    >
      <div>
        <img
          src={imageUrl}
          className="rounded-sm"
          alt={`${name} logo`}
          width={24}
          height={24}
          loading="lazy"
          onError={fallbackImageCalled ? undefined : handleImageError}
        />
      </div>
      <div
        className={`
          flex-1
        `}
      >
        {name}
      </div>
      <div className="text-neutral-500">{totalJobsAvailable}</div>
    </div>
  );
};

export default IndustryCardItem;
