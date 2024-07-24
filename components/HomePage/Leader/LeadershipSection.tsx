import { Reveal } from '@/components/Framer/Reveal';
import LeadershipCard from './LeadershipCard';
import { RevealFromLeft } from '@/components/Framer/RevealFromLeft';
import ven from "@/public/vennela.png"
import vis from "@/public/Vishnu.png"
import ak from "@/public/Akhil.png"
const leadershipData = [
  {
    name: 'Akhil Donthula',
    role: 'CEO & software developmnent',
    imageSrc: ak,
  },
  {
    name: 'Kattula Vennela',
    role: 'UI/UX and operations',
    imageSrc: ven,
  },
  {
    name: 'Vishnu Vardhan Maripalli',
    role: 'Data scientist',
    imageSrc:vis,
  },
];

const LeadershipSection = () => {
  return (
    <div className=" py-24 sm:py-32 bg-green-200 relative top-20">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <RevealFromLeft>
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our leadership</h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae elementum enim vitae ullamcorper suspendisse.</p>
            </div>
          </RevealFromLeft>
        </div>
        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
          {leadershipData.map((person) => (
            <Reveal>
              <LeadershipCard
                key={person.name}
                name={person.name}
                role={person.role}
                imageSrc={person.imageSrc}
              />
            </Reveal>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LeadershipSection;
