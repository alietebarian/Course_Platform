interface Feature {
  title: string;
  isTrue: boolean;
}

interface PriceProps {
  PlanType: string;
  Price: number;
  features: Feature[];
}

export default function PriceCart({ PlanType, Price, features }: PriceProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-lg font-bold text-center">{PlanType}</h3>
      <p className="text-xl font-semibold">${Price}/month</p>

      <div className="mt-4">
        <span className="block font-medium mb-2">Available Features</span>
        <ul className="space-y-2 py-5">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-center gap-2 py-2">
              <img
                src={feature.isTrue ? "/tik.png" : "/cross.png"}
                alt={feature.isTrue ? "Available" : "Unavailable"}
                className="w-4 h-4"
              />
              <span>{feature.title}</span>
            </li>
          ))}
        </ul>
      </div>

      <button className="mt-4 w-full bg-orange-500 cursor-pointer text-white py-2 rounded hover:bg-orange-600 transition">
        Get Started
      </button>
    </div>
  );
}
