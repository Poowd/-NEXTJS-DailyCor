"use client";

import { Dialog, DialogPanel } from "@headlessui/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {
  const router = useRouter();

  const [modalStatus, setModalStatus] = useState(false);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const storedHistory = JSON.parse(localStorage.getItem("dailyTimeRecord"));
    if (storedHistory) {
      setHistory(storedHistory);
    }
  }, []);

  const timeToMinutes = (time) => {
    const hours = time.substr(0, 2);
    const minutes = time.substr(3, 2);

    let totalMinutes = +hours * 60 + +minutes;
    return totalMinutes;
  };

  const isValid = (timeIn, breakStart, breakEnd, timeOut) => {
    const timeInMin = timeIn;
    const breakStartMin = breakStart;
    const breakEndMin = breakEnd;
    const timeOutMin = timeOut;

    // Check if times are in ascending order
    if (
      timeInMin <= breakStartMin &&
      breakStartMin <= breakEndMin &&
      breakEndMin <= timeOutMin
    ) {
      return true;
    }

    return false;
  };

  const getTotal = () => {
    let total = 0;
    history.forEach((item) => {
      total += item.Total;
    });
    total = total / 60;
    return Number(total.toFixed(2));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const TimeIn = timeToMinutes(document.getElementById("TimeIn").value);
    const BreakStart = timeToMinutes(
      document.getElementById("BreakStart").value
    );
    const BreakEnd = timeToMinutes(document.getElementById("BreakEnd").value);
    const TimeOut = timeToMinutes(document.getElementById("TimeOut").value);

    if (!isValid(TimeIn, BreakStart, BreakEnd, TimeOut)) {
      setModalStatus(true);
      return;
    }

    // Create a new object with the  input values and calculated TimeOut
    const newEntry = {
      TimeIn: TimeIn,
      BreakStart: BreakStart,
      BreakEnd: BreakEnd,
      TimeOut: TimeOut,
      Total: BreakStart - TimeIn + TimeOut - BreakEnd,
    };

    // Add the new entry to the history array
    const newHistory = [...history, newEntry];
    setHistory(newHistory);

    localStorage.setItem("dailyTimeRecord", JSON.stringify(newHistory));

    // Reset the form
    e.target.reset();
  };

  const resetRecords = () => {
    localStorage.removeItem("dailyTimeRecord");
    setHistory([]);
    router.refresh();
  };

  return (
    <main className={`h-full w-full p-10`}>
      <header className="text-center flex flex-col justify-center">
        <h1 className="text-neutral-300">
          Welcome to Online Daily-Time Record
        </h1>
        <h1 className="text-yellow-600 font-semibold text-4xl">DailyCor</h1>
      </header>
      <section className="flex justify-center">
        <main className="w-3/5 my-10">
          <form
            onSubmit={handleSubmit}
            className="w-full flex flex-col lg:flex-row gap-3"
          >
            <input
              required
              type="time"
              id="TimeIn"
              name="TimeIn"
              className="w-full p-2 border rounded outline-none bg-neutral-900 border-neutral-800 text-neutral-300"
            />
            <input
              required
              type="time"
              id="BreakStart"
              name="BreakStart"
              className="w-full p-2 border rounded outline-none bg-neutral-900 border-neutral-800 text-neutral-300"
            />
            <input
              required
              type="time"
              id="BreakEnd"
              name="BreakEnd"
              className="w-full p-2 border rounded outline-none bg-neutral-900 border-neutral-800 text-neutral-300"
            />
            <input
              required
              type="time"
              id="TimeOut"
              name="TimeOut"
              className="w-full p-2 border rounded outline-none bg-neutral-900 border-neutral-800 text-neutral-300"
            />
            <button
              type="submit"
              className="py-2 px-4 bg-yellow-600 text-neutral-900 border border-neutral-800 rounded outline-none"
            >
              Submit
            </button>
          </form>
          <section className="w-full my-10 text-center">
            <table className="w-full table-fixed">
              <tbody>
                {history &&
                  history.map((item, i) => (
                    <tr key={i}>
                      <td className="border p-2 border-neutral-800">
                        {item.TimeIn}
                      </td>
                      <td className="border p-2 border-neutral-800">
                        {item.BreakStart}
                      </td>
                      <td className="border p-2 border-neutral-800">
                        {item.BreakEnd}
                      </td>
                      <td className="border p-2 border-neutral-800">
                        {item.TimeOut}
                      </td>
                      <td className="border p-2 border-neutral-800">
                        {item.Total}
                      </td>
                    </tr>
                  ))}
                <tr>
                  <td className="border p-2 border-neutral-800" colSpan={4}>
                    {"Total"}
                  </td>
                  <td className="border p-2 border-neutral-800 text-yellow-600">{`${getTotal()} Hours`}</td>
                </tr>
              </tbody>
            </table>
          </section>
          <section>
            <button
              type="button"
              onClick={() => resetRecords()}
              className="w-full py-2 px-4 text-neutral-300 border border-neutral-800 rounded outline-none"
            >
              Reset
            </button>
          </section>
          <footer className="w-full mt-10">
            <hr className="border-neutral-800" />
            <main className="flex justify-center p-5 text-neutral-800">
              <section className="text-center">
                <h1 className="text-lg">PowdTech PH</h1>
                <h1 className="text-xs">Lape &copy; 2025</h1>
              </section>
            </main>
          </footer>
        </main>
      </section>

      <Dialog
        open={modalStatus}
        onClose={() => setModalStatus(false)}
        className="relative z-50"
      >
        <DialogPanel className="fixed inset-0 flex w-screen h-screen items-center justify-center p-4 backdrop-blur bg-black bg-opacity-65">
          <div className="h-full lg:h-fit w-full md:w-10/12 lg:w-fit space-y-4  border rounded-lg bg-neutral-900 border-neutral-800 p-12 overflow-y-auto scale-in-center">
            <main className="h-full flex flex-col text-center min-w-96 relative">
              <header className="absolute top-0 right-0">
                <button onClick={() => setModalStatus(false)}>-</button>
              </header>
              <section className="flex-1 mb-5 text-center">
                <h3 className="text-xl text-yellow-600">Invalid Time</h3>
                <p>You encountered an error!</p>
              </section>
              <section className="flex justify-center">
                <p className="w-3/5 text-neutral-500">
                  Please make sure that the time you set does not conflict from
                  one another, or results into negative value.
                </p>
              </section>
            </main>
          </div>
        </DialogPanel>
      </Dialog>
    </main>
  );
}
