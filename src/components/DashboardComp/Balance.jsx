import { useExpenceData } from "./../../context/ExpencsContext/ExpenseContext";

const Balance = () => {
  const { expenceData } = useExpenceData();

  return (
    <div className="px-4 sm:px-6 lg:px-8 w-full">
      <main className="w-full max-w-6xl mx-auto px-10 py-10 rounded-xl border border-blue-900 shadow-lg">
        <div className="flex justify-center items-center gap-10 flex-wrap">
          <p className="font-semibold capitalize text-xl md:text-2xl">
            Total balance: ${expenceData.balance}
          </p>
          <p className="font-semibold capitalize text-xl md:text-2xl">
            Total expense: ${expenceData.addexpensesmoney}
          </p>
        </div>
      </main>
    </div>
  );
};

export default Balance;
