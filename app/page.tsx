import TicketCard from "./components/TicketCard/TicketCard";

export default function Home() {
  return (
    <>
      <h1 className="text-2xl font-bold text-[#466085] select-none">
        Tickets are you allocated
      </h1>

      <section className="m-4 grid grid-cols-12">
        <TicketCard
          ticket="Ticket 1"
          status="Open"
          description="This is a sample ticket description."
          requester="John Doe"
          createdAt="2023-01-01"
        />
        <TicketCard
          ticket="Ticket 2"
          status="In Progress"
          description="This is another sample ticket description."
          requester="Jane Smith"
          createdAt="2023-01-02"
        />
        <TicketCard
          ticket="Ticket 3"
          status="Open"
          description="This is yet another sample ticket description."
          requester="Bob Johnson"
          createdAt="2023-01-03"
        />
      </section>

      <h1 className="text-2xl font-bold text-[#466085] select-none">
        Unread Messages
      </h1>
      <section className="flex flex-col gap-4 m-4">
        <div className="flex items-center gap-2">
          <img
            src="https://via.placeholder.com/40"
            className="w-10 h-10 rounded-full bg-gray-300"
          />
          <div className="flex flex-col text-xs">
            <p className="select-none font-bold">Pedro</p>
            <p className="select-none">This is a sample message.</p>
          </div>
        </div>
      </section>
    </>
  );
}
