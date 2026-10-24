interface TicketCardProps {
  ticket: string;
  status: string;
  description: string;
  requester: string;
  createdAt: string;
}

const TicketCard = ({
  ticket,
  status,
  description,
  requester,
  createdAt,
}: TicketCardProps) => {
  return (
    <div className="col-span-4 p-4 m-2 bg-white rounded-xl shadow cursor-pointer hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center mb-2 justify-between">
        <p className="font-bold text-[#466085] select-none">{ticket}</p>
        <p className="ml-auto bg-blue-500 px-2 p-1 text-xs rounded-2xl text-white select-none">
          {status}
        </p>
      </div>
      <p className="select-none">Description: {description}</p>
      <p className="select-none">Requester: {requester}</p>
      <p className="text-sm text-gray-500 select-none">Created: {createdAt}</p>
    </div>
  );
};

export default TicketCard;
