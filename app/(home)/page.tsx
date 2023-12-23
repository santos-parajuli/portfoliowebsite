import { ModeToggle } from '@/components/mode-toggle';
export default function Home() {
	return (
		<main className='flex min-h-screen flex-col items-center justify-between p-24'>
			Next Js
			<div className='p-4 border'></div>
			<ModeToggle />
		</main>
	);
}
