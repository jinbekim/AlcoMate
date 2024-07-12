interface AlcoholGaugeProps {
	bac: number;
}

export const AlcoholGauge = ({ bac }: AlcoholGaugeProps) => {
	return (
		<figure className="w-1/2 h-1/2">
			<figcaption>{`BAC: ${bac}`}</figcaption>
		</figure>
	);
};
