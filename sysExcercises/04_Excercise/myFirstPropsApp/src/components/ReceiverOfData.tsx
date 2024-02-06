interface IReceiveDataProps {
  qwerty: string;
  positive: number;
  answer: boolean;
}

export const ReceiverOfData = (props: IReceiveDataProps) => {
  return (
    <div>
      <q>{props.qwerty}</q>
      <p>{props.positive}</p>
      <h4>
        {" "}
        <input type="checkbox" checked={props.answer} />
      </h4>
    </div>
  );
};
