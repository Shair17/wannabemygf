import { useState, useRef, useEffect } from 'react';
import { Close } from '../wailsjs/go/main/App';

function App() {
	const [coords, setCoords] = useState<{ x: number; y: number }>();
	const ref = useRef<HTMLButtonElement>(null);

	useEffect(() => {
		const onMouseMove = (event: MouseEvent) => {
			const x = Math.random() * (904 - 1) + 1;
			const y = Math.random() * (608 - 1) + 1;

			setCoords({
				x,
				y,
			});
		};

		ref.current?.addEventListener('mousemove', onMouseMove);

		return () => {
			ref.current?.removeEventListener('mousemove', onMouseMove);
		};
	}, [ref]);

	return (
		<div id="app">
			<h1>¿Quieres ser mi novia? :3</h1>
			<div style={{ display: 'inline-flex' }}>
				<button
					className="button"
					onClick={() => {
						alert('Sabía que dirías que si 7u7');
						Close();
					}}
				>
					Joder, pero claro que sí!
				</button>
				<div style={{ margin: '0rem 0.5rem' }}></div>
				<button
					className="button"
					ref={ref}
					style={{
						left: coords?.x,
						top: coords?.y,
						position: coords ? 'absolute' : undefined,
					}}
				>
					No
				</button>
			</div>
		</div>
	);
}

export default App;
