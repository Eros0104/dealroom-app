interface Props {
  totalJobsAvailable: number;
  name: string;
  imageUrl: string;
}

const IndustryCardItem = ({ totalJobsAvailable, name }: Props) => {
  return (
    <div
      className={`
      flex flex-row gap-2
    `}
    >
      <div></div>
      <div
        className={`
          flex-1
        `}
      >
        {name}
      </div>
      <div>{totalJobsAvailable}</div>
    </div>
  );
};

export default IndustryCardItem;
