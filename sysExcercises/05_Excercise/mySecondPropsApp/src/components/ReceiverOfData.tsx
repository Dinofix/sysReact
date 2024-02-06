interface IReceiveDataProps {
  qwerty: string;
  positive: number;
  answer: boolean;
}

export const ReceiverOfData = (props: IReceiveDataProps) => {
  return (
    <div>
      <input type="text" />
      <input type="text" />
      <h4>
        {" "}
        <input type="checkbox" checked={props.answer} />
      </h4>
    </div>
  );
};
