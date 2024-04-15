type Props = {
  params: {
    id: string;
  };
};
// dynamic metadata
export const generateMetadata = ({ params }: Props) => {
  return {
    title: `Hotel administration - ${params.id}`,
    description: `Manage the details of the hotel - ${params.id}`,
  };
};

const Hotel = () => {
  return <div>Hotel</div>;
};

export default Hotel;
