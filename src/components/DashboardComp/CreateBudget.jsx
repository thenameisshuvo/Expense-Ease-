import { memo, useCallback, useRef } from "react";
import Button from "./../Button";
import { toast, ToastContainer } from "react-toastify";

const CreateBudget = memo(({ setAddIncone, adDates }) => {
  const { adDate, setAddDate } = adDates;
  const addBudget = useRef(null);

  const handleClick = useCallback((e) => {
    e.preventDefault();
    setAddIncone((prev) => ({
      ...prev,
      addIncome: prev.addIncome + Number.parseInt(addBudget.current.value),
      balance: prev.balance + Number.parseInt(addBudget.current.value),
    }));
    const currentAddMoney = new Date().toLocaleDateString();
    setAddDate(currentAddMoney);

    toast("Your budget has been added");
    addBudget.current.value = ""; // Clear input after submission
  });

  return (
    <div className="px-4 sm:px-6 lg:px-8 w-full">
      <main className="w-full max-w-4xl mx-auto px-8 py-10 rounded-xl border border-blue-900 shadow-lg flex flex-col justify-center items-center">
        <ToastContainer
          position="top-left"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-6 pb-6">
          <p className="font-semibold capitalize text-lg md:text-xl">
            Add your budget
          </p>
          <p className="font-semibold flex items-center gap-2 capitalize text-lg">
            Last added date:
            <span
              className={`${
                adDate
                  ? "border px-2 py-1 rounded-xl bg-success"
                  : "text-base"
              }`}
            >
              {adDate ? adDate : "-"}
            </span>
          </p>
        </div>
        <form
          onSubmit={handleClick}
          className="flex flex-col w-full md:w-2/3 items-center gap-6"
        >
          <input
            required
            ref={addBudget}
            type="number"
            placeholder="Enter Budget"
            className="w-full rounded-md py-3 px-4 shadow-md outline-none focus:outline-success focus:outline-2"
          />
          <button type="submit">
            <Button value="Add Budget" />
          </button>
        </form>
      </main>
    </div>
  );
});

export default CreateBudget;
