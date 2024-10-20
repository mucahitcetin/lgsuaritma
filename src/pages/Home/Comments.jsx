import comments from "../../data/comments";

const Comments = () => {
  return (
    <section className="container mx-auto px-4 py-8">
        <h1 className="text-3xl lg:text-4xl font-semibold mt-6 mb-8 text-center text-blue-600">
        YORUMLAR
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {comments.map((item) => (
          <div
            key={item.id}
            className="bg-gray-200 rounded-lg shadow-lg p-6 flex flex-col items-center justify-between h-full"
          >
            <div className="flex flex-col items-center">
              <img
                src={item.avatar}
                alt={item.name}
                className="w-16 h-16 rounded-full "
              />
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <div className="flex ">
              {Array.from({ length: item.rating }).map((_, index) => (
                <span key={index} className="text-yellow-400 text-xl">
                  ★
                </span>
              ))}
            </div>
              <p className="mt-2 text-center text-gray-700">{item.comment}</p>
            </div>
           
          </div>
        ))}
      </div>
    </section>
  );
};

export default Comments;
