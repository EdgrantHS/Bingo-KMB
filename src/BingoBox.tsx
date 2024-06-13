export default function BingoBox(props: {
  number: number;
  text: string;
  selected: any;
  handleSelected: any;
}) {
  return (
    <div
      className='group flex justify-center items-center h-full w-1/5 bg-white border-2 border-black rounded md:rounded-lg shadow-md text-wrap break-words
        transition-all duration-200 ease-in-out transform hover:z-10 hover:shadow-lg hover:scale-[102%]'>
      <div className='w-full h-full flex justify-center items-center'>
        <button
          className={`text-sm min-h-full w-full transition-all duration-200 ease-out rounded-lg line-clamp-2 ${
            props.selected ? "text-white bg-black" : "text-black bg-white"
          } w-full h-full`}
          onClick={props.handleSelected}>
          {props.number}
        </button>
      </div>
      {/* <div className='absolute group-hover:block inset-0 hidden text-center transition ease-in-out duration-200'>
          <p>{props.text}</p>
      </div> */}
    </div>
  );
}
