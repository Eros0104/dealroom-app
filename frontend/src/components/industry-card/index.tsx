interface Props {
  title: string;
}

const IndustryCard = ({ title }: Props) => {
  return (
    <div
      className={`
        rounded-md
        bg-white
        p-4
      `}
    >
      {title}
    </div>
  );
};

export default IndustryCard;
