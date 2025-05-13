import { memo, useCallback, useRef } from "react";
import ExpenceButton from "./ExpenceButton";

const Addexpenses = memo(({ setAddexpenses, expDates }) => {
  const { expDate, setExpDate } = expDates;
  const addExpence = useRef(null);
  const addExpenceTitle = useRef(null);

  const handleExpanceClick = useCallback((e) => {
    e.preventDefault();
    if (addExpence.current.value === null) return;
    setAddexpenses((prev) => ({
      ...prev,
      addexpensesmoney:
        prev.addexpensesmoney + Number.parseInt(addExpence.current.value),
      balance: prev.balance - Number.parseInt(addExpence.current.value),
      addIncome: prev.addIncome - Number.parseInt(addExpence.current.value),
      title: addExpenceTitle.current.value,
    }));
    const currentExpenceData = new Date().toLocaleDateString();
    setExpDate(currentExpenceData);
  });

  return (
    <div className="px-4 sm:px-6 lg:px-8 w-full">
      <main className="w-full max-w-4xl mx-auto px-8 py-10 rounded-xl border border-blue-900 shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-6">
          <p className="font-semibold capitalize text-lg md:text-xl">
            Add new expense
          </p>
          <p className="font-semibold capitalize text-lg flex items-center gap-2">
            Last expense date:
            <span
              className={`${
                expDate
                  ? "border px-2 py-1 rounded-xl bg-warning"
                  : "text-base"
              }`}
            >
              {expDate ? expDate : "-"}
            </span>
          </p>
        </div>
        <form
          onSubmit={handleExpanceClick}
          className="flex flex-col items-center gap-6"
        >
          <div className="flex flex-col md:flex-row gap-4 w-full justify-center">
            <input
              type="number"
              required
              ref={addExpence}
              placeholder="Add expenses amount"
              className="w-full md:w-1/2 rounded-md py-3 px-4 shadow-md outline-none focus:outline-warning focus:outline-2"
            />
            <input
              type="text"
              required
              ref={addExpenceTitle}
              placeholder="Add title of expense"
              className="w-full md:w-1/2 rounded-md py-3 px-4 shadow-md outline-none focus:outline-warning focus:outline-2"
            />
          </div>
          <button type="submit">
            <ExpenceButton value="Add Expense" />
          </button>
        </form>
      </main>
    </div>
  );
});

export default Addexpenses;
