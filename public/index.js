import { hydrate, prerender as ssr } from 'preact-iso';
import './foo.css';


export function App() {
	return (
        <>
            <h1>Should be red</h1>
            <h2>Should be blue</h2>
        </>
    );
}

hydrate(<App />);

export async function prerender() {
	return await ssr(<App />);
}
