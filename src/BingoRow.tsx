import BingoBox from "./BingoBox";

export default function BingoRow(props: {
  numbers: number[],
  texts: string[],
  selected: any,
  handleSelected: any
}) {
  return (
    <div className='flex justify-center items-center h-1/5 w-full'>
      {props.numbers.map((number, index) => (
        <BingoBox
          key={number}
          number={number}
          text={props.texts[index]}
          selected={props.selected[index]}
          handleSelected={() => props.handleSelected(index)}
        />
      ))}
    </div>
  );
}