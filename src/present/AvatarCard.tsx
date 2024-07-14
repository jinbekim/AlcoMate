interface AvatarCardProps {
	estimatedBac: string;
}

export const AvatarCard = ({ estimatedBac }: AvatarCardProps) => {
	const imgUrl = new URL('/src/assets/image.png', import.meta.url);

	return (
		<figure className="rounded-md h-5/6">
			<img
				className="object-contain w-full h-full"
				src={imgUrl.toString()}
				alt={`bac: ${estimatedBac} image`}
			/>
		</figure>
	);
};
