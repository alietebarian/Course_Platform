
interface Props{
    icon: string, 
    title: string,
    desc: string
}

export default function AchievementsCart({ icon, title, desc}: Props) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition flex flex-col gap-4">
      <img src={icon} alt="btn" className="w-10 h-10" />

      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>

      <p className="text-gray-600 text-sm">{desc}</p>
    </div>
  );
}
