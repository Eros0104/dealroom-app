interface Props {
  title: string;
  children?: React.ReactNode;
}

const IndustryCard = ({ title, children }: Props) => {
  return (
    <div
      className={`
        rounded-md
        bg-white
        p-4
      `}
    >
      {title}
      <div>{children}</div>
    </div>
  );
};

export default IndustryCard;
