import { 음주운전기준 } from '@/domain/lawStandard';
import { Gender } from '@/domain/types';
import { useEffect, useMemo, useState } from 'react';

interface AlcoholGaugeProps {
	estimatedBac: string;
	gender: Gender;
}

const Gauge = ({
	percentage,
	color,
}: {
	percentage: number;
	color: string;
}) => {
	const [value, setValue] = useState(0);

	useEffect(() => {
		let timer: number;
		if (value < percentage) {
			timer = window.setTimeout(() => {
				setValue(value + 1);
			}, 30);
		}
		return () => {
			clearTimeout(timer);
		};
	}, [value, percentage]);

	return (
		<div
			className={`h-2.5 ${color}`}
			style={{ width: `${value % 100}%` }}
		></div>
	);
};

export const AlcoholGauge = ({ estimatedBac }: AlcoholGaugeProps) => {
	const percentage = useMemo(
		() => (+estimatedBac / 음주운전기준) * 100,
		[estimatedBac],
	);
	const idx = useMemo(() => Math.floor(percentage / 100), [percentage]);
	const color = [
		'bg-green-700',
		'bg-yellow-400',
		'bg-yellow-500',
		'bg-red-500',
		'bg-red-600',
		'bg-red-700',
		'bg-red-800',
		'bg-red-900',
		'bg-red-900',
		'bg-gray-900', // 0.3 이상 이면 거의 치사량
	][idx];

	return (
		<div className="flex flex-col items-center justify-center p-4">
			<div className="w-full flex justify-between mb-1">
				<span className="text-base font-medium">Estimated BAC :</span>
				<span className="text-sm font-medium">{estimatedBac}</span>
			</div>
			<div className="w-full bg-gray-200 h-2.5">
				<Gauge percentage={percentage} color={color} />
			</div>
		</div>
	);
};
