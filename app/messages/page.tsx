const MessagesPage = () => {
  return (
    <>
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
};

export default MessagesPage;
