interface AvatarCardProps {
	bac: number;
}

export const AvatarCard = ({ bac }: AvatarCardProps) => {
	const imgUrl = new URL('/src/assets/image.png', import.meta.url);

	return (
		<figure className="rounded-md">
			<img
				className="object-cover w-full h-full"
				src={imgUrl.toString()}
				alt={`bac: ${bac} image`}
			/>
		</figure>
	);
};
