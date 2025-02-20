export const Toast = ({
  title,
  message,
}: {
  title: string;
  message: string;
}) => {
  return (
    <div className="bg-dark-300 text-white p-3 rounded-md fixed bottom-5 right-5 z-50 border-secondary-500 border transition ease-in-out duration-300 transform hover:scale-105">
      <div className="font-bold capitalize text-lg text-primary-500">
        {title}
      </div>
      <div className=" text-white">{message}</div>
    </div>
  );
};
