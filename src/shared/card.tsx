import Image from "next/image";
import Link from "next/link";
import { IWorkout } from "@/type/type";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faStar } from "@fortawesome/free-regular-svg-icons";
import { faFire } from "@fortawesome/free-solid-svg-icons";

interface CardProps {
  props: IWorkout;
}

const Card = ({ props }: CardProps) => {
  return (
    <Link
      href={`/details/${props.id}`}
      className="block rounded-[20px] overflow-hidden bg-[#20242E] hover:scale-105 transition-transform duration-300"
    >
      <div className="relative w-full aspect-3/2">
        <Image
          src={props.image}
          alt={props.name}
          fill
          className="object-cover"
        />
      </div>

      <div className="px-4 py-3">
        <div>
          <div className="flex gap-3">
            {props.muscleGroups.map((group) => (
              <span
                key={group}
                className="bg-[#C2F800] px-2 py-1 text-black rounded-full text-sm font-bold"
              >
                {group}
              </span>
            ))}
          </div>
          <h1 className="text-white text-xl font-bold mt-2">{props.name}</h1>
          <p className="text-[#9CA3AF]">{props.equipment}</p>
        </div>

        <div className="flex items-center gap-4 mt-3">
          <div className="flex items-center gap-1.5">
            <FontAwesomeIcon icon={faClock} className="h-4 w-4 text-[#9CA3AF]" />
            <span className="text-[#9CA3AF] text-sm font-bold">
              {props.duration} min
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <FontAwesomeIcon icon={faFire} className="h-4 w-4 text-[#9CA3AF]" />
            <span className="text-[#9CA3AF] text-sm font-bold">
              {props.caloriesBurned} kcal
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <FontAwesomeIcon icon={faStar} className="h-4 w-4 text-[#C2F800]" />
            <span className="text-[#9CA3AF] text-sm font-bold">
              {props.rating}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;