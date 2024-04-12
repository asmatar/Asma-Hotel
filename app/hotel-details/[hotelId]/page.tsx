// dynamic metadata
type Props = {
  params: {
    hotelId: string;
  };
};
export const generateMetadata = ({ params }: Props) => {
  return {
    title: `Hotel Details - ${params.hotelId}`,
    description: `Details about the hotel: ${params.hotelId}`,
  };
};

const HotelId = () => {
  return <div>HotelId ,kuhl</div>;
};

export default HotelId;
