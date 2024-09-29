interface Props {
  title: string;
  totalJobs: number;
  children?: React.ReactNode;
}

const IndustryCard = ({ title, children, totalJobs }: Props) => {
  return (
    <div
      className={`
        rounded-md
        bg-white
        p-4
      `}
    >
      <div
        className={`
          mb-4
          flex items-center justify-between
      `}
      >
        <span>{title}</span>
        <span className={`text-gray-500`}>{totalJobs}</span>
      </div>
      <div
        className={`
          flex items-center justify-between
          text-sm text-gray-400
          border-b
          pb-2
        `}
      >
        <span>Name</span>
        <span>Total jobs available</span>
      </div>
      <div
        className={`
          flex flex-col gap-4
          py-4
        `}
      >
        {children}
      </div>
    </div>
  );
};

export default IndustryCard;
