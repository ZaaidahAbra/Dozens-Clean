import { Clock } from "lucide-react";

const hours = [
  { day: "Monday – Thursday", time: "8:00 AM – 4:00 PM", closed: false },
  { day: "Friday", time: "8:00 AM – 4:30 PM", closed: false },
  { day: "Saturday", time: "8:30 AM – 12:00 PM", closed: false },
  { day: "Sunday", time: "Closed", closed: true },
  { day: "Public Holidays", time: "Closed", closed: true },
];

function isCurrentlyOpen(): boolean {
  const now = new Date();
  const day = now.getDay();
  const hour = now.getHours();
  const min = now.getMinutes();
  const time = hour * 60 + min;

  // Sunday = 0, Saturday = 6
  if (day === 0) return false;
  if (day === 6) return time >= 8 * 60 + 30 && time < 12 * 60;
  if (day === 5) return time >= 8 * 60 && time < 16 * 60 + 30;
  // Mon–Thu
  if (day >= 1 && day <= 4) return time >= 8 * 60 && time < 16 * 60;
  return false;
}

export default function HoursSection() {
  const open = isCurrentlyOpen();

  return (
    <section
      id="hours"
      className="py-20 bg-[#FDF5E6]"
      aria-label="Opening hours"
    >
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 mb-3">
            <div className="h-px w-10 bg-[#FBB03B]" />
            <span className="font-heading text-[#FBB03B] text-sm font-bold tracking-[0.2em] uppercase">
              When We're Open
            </span>
            <div className="h-px w-10 bg-[#FBB03B]" />
          </div>
          <h2 className="font-heading font-black text-[#3C2415] text-5xl sm:text-6xl uppercase mb-4">
            Opening Hours
          </h2>

          {/* Current status badge */}
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold ${
              open
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-700"
            }`}
          >
            <span
              className={`w-2 h-2 rounded-full ${open ? "bg-green-500 animate-pulse" : "bg-red-400"}`}
            />
            {open ? "We're Open Now" : "Currently Closed"}
          </div>
        </div>

        {/* Hours card */}
        <div className="bg-white rounded-2xl border border-amber-100 shadow-md overflow-hidden">
          <div className="bg-[#3C2415] px-6 py-4 flex items-center gap-2">
            <Clock className="w-5 h-5 text-[#FBB03B]" />
            <span className="font-heading font-bold text-white text-lg uppercase tracking-wide">
              Trading Hours
            </span>
          </div>

          <div className="divide-y divide-amber-50">
            {hours.map((row) => (
              <div
                key={row.day}
                className={`flex items-center justify-between px-6 py-4 ${
                  row.closed ? "opacity-50" : ""
                }`}
              >
                <span className="font-medium text-gray-700">{row.day}</span>
                <span
                  className={`font-heading font-bold text-lg ${
                    row.closed ? "text-gray-400" : "text-[#3C2415]"
                  }`}
                >
                  {row.time}
                </span>
              </div>
            ))}
          </div>
        </div>

        <p className="text-center text-sm text-gray-500 mt-4">
          * Subject to change on public holidays. Contact us to confirm.
        </p>
      </div>
    </section>
  );
}
