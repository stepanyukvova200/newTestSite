import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

type Bar = {
  o: number;
  h: number;
  l: number;
  c: number;
  v: number;
  t: number;
};

type Props = {
  bars: Bar[];
};

const formatTime = (timestamp: number) => {
  const date = new Date(timestamp * 1000);
  return `${date.getHours()}:${String(date.getMinutes()).padStart(2, '0')}`;
};

const Chart = ({ bars }: Props) => {
  const data = bars.map(bar => ({
    time: formatTime(bar.t),
    close: bar.c,
  }));

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data}>
        <Tooltip />
        <Line type="monotone" dataKey="close" stroke="#8884d8" dot={false} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Chart;