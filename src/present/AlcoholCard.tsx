import { Alcohol } from '@/domain/types';

interface AlcoholCardProps {
	alcohol: Alcohol;
	disabled?: boolean;
	onClick: (alcohol: Alcohol) => void;
}

const 비활성화뷰 = 'bg-slate-500 opacity-50';

export const AlcoholCard = ({
	alcohol,
	disabled,
	onClick,
}: AlcoholCardProps) => {
	const imgUrl = new URL(`/src/assets/${alcohol}.svg`, import.meta.url);

	const 비활성화로직 = (disabled?: boolean) => {
		return disabled ? 비활성화뷰 : '';
	};

	return (
		<button
			className={`w-1/3 h-full flex flex-col justify-center items-center ${비활성화로직(disabled)}`}
			disabled={disabled}
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
