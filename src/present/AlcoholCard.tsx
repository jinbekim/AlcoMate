import { Alcohol } from '@/domain/types';

interface AlcoholCardProps {
	alcohol: Alcohol;
	onClick: (alcohol: Alcohol) => void;
}

export const AlcoholCard = ({ alcohol, onClick }: AlcoholCardProps) => {
	const imgUrl = new URL(`/src/assets/${alcohol}.svg`, import.meta.url);
	return (
		<button
			className="w-1/3 h-full flex flex-col justify-center items-center"
			onClick={() => onClick(alcohol)}
		>
			<figure className="w-1/2 h-1/2">
				<img
					className="object-cover w-full h-full"
					src={imgUrl.toString()}
					alt={alcohol}
				/>
				<figcaption> {alcohol}</figcaption>
			</figure>
		</button>
	);
};
