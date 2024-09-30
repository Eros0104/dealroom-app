interface Props {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

const SearchInput = ({ onChange, value }: Props) => {
  return <input type="text" onChange={onChange} value={value} />;
};

export default SearchInput;
