import './App.css';
import { AlcoholCard } from '@/present/AlcoholCard';
import { Alcohol } from './domain/types';
import { useDrinkAlcohol } from './application/useDrinkAlcohol';
import { AvatarCard } from './present/AvatarCard';
import { AlcoholGauge } from './present/AlcoholGauge';

function App() {
	const selectedAlcohol: Alcohol[] = ['soju', 'beer', 'wine'];
	const { addAlcohol, alcoholConsumed } = useDrinkAlcohol();

	return (
		<main className="w-full h-full flex flex-col justify-center items-center">
			<section className="w-full h-3/5 bg-green-200">
				{<AvatarCard bac={alcoholConsumed} />}
				{<AlcoholGauge bac={alcoholConsumed} />}
			</section>
			<section className="w-full h-2/5 bg-green-400 flex justify-center items-center">
				{selectedAlcohol.map((alcohol) => (
					<AlcoholCard key={alcohol} alcohol={alcohol} onClick={addAlcohol} />
				))}
			</section>
		</main>
	);
}

export default App;
