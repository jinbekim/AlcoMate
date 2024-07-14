import { 음주운전기준 } from '@/domain/lawStandard';
import { Gender } from '@/domain/types';

interface AlcoholGaugeProps {
	estimatedBac: string;
	gender: Gender;
}

export const AlcoholGauge = ({ estimatedBac }: AlcoholGaugeProps) => {
	const value = +estimatedBac % 음주운전기준;
	const idx = Math.floor(+estimatedBac / 음주운전기준);
	const color = ['bg-green-500', 'bg-yellow-500', 'bg-red-500'][idx]; // TODO: 최소 10개

	return (
		<div className="flex flex-col items-center justify-center p-4">
			<div className="w-full flex justify-between mb-1">
				<span className="text-base font-medium">Estimated BAC :</span>
				<span className="text-sm font-medium">{estimatedBac}</span>
			</div>
			<div className="w-full bg-gray-200 h-2.5">
				<div
					className={`h-2.5 ${color} transition-transform`}
					style={{ width: `${(value / 음주운전기준) * 100}%` }}
				></div>
			</div>
		</div>
	);
};
