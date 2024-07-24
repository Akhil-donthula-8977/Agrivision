import Image from 'next/image';
import { StaticImageData } from "next/image"
interface props{
    name:string,
    role:string,
    imageSrc:string|StaticImageData
}
const LeadershipCard = ({ name, role, imageSrc }:props) => {
  return (
    <li>
      <div className="flex items-center gap-x-6">
        <Image className="h-16 w-16 rounded-full" src={imageSrc} alt={name} width={64} height={64} />
        <div>
          <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{name}</h3>
          <p className="text-sm font-semibold leading-6 text-indigo-600">{role}</p>
        </div>
      </div>
    </li>
  );
};

export default LeadershipCard;
