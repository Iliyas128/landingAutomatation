import React from 'react';
import CardSwap, { Card } from './CardSwap'
import { useLanguage } from '@/locales/LanguageContext';

const Services: React.FC = () => {
	const { t } = useLanguage();
	
	return (
		<section className="py-12 sm:py-16 md:py-20 mt-16 sm:mt-20 md:mt-28">
			<div className="container mx-auto px-4 sm:px-6">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
					<div>
						<h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
							{t.services.title} <span className="text-cyan-400">{t.services.titleHighlight}</span>
						</h2>
						<p className="text-base sm:text-lg md:text-xl text-slate-300 mt-4 sm:mt-6">{t.services.subtitle}</p>
					</div>

					<div className="hidden md:block" style={{ height: '500px', position: 'relative' }}>
						<CardSwap
							width={500}
							height={400}
							cardDistance={60}
							verticalDistance={70}
							delay={3000}
							pauseOnHover={false}
							easing="elastic"
						>
							<Card>
								<div className="card-badge">
									<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"></path></svg>
									
								</div>
								<img className="card-image" src="Rivs.png" alt="Smooth" loading="lazy" decoding="async" />
							</Card>
							<Card>
								<div className="card-badge">
									<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 640 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"></path></svg>
									
								</div>
								<img className="card-image" src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1600&q=60&auto=format&fit=crop" alt="Reliable" loading="lazy" decoding="async" />
							</Card>
							<Card>
								<div className="card-badge">
									<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M0 416c0 17.7 14.3 32 32 32l54.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 448c17.7 0 32-14.3 32-32s-14.3-32-32-32l-246.7 0c-12.3-28.3-40.5-48-73.3-48s-61 19.7-73.3 48L32 384c-17.7 0-32 14.3-32 32zm128 0a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM320 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm32-80c-32.8 0-61 19.7-73.3 48L32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l246.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48l54.7 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-54.7 0c-12.3-28.3-40.5-48-73.3-48zM192 128a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm73.3-64C253 35.7 224.8 16 192 16s-61 19.7-73.3 48L32 64C14.3 64 0 78.3 0 96s14.3 32 32 32l86.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 128c17.7 0 32-14.3 32-32s-14.3-32-32-32L265.3 64z"></path></svg>
								</div>
								<img className="card-image" src="/ilyuha.png" alt="Customizable" loading="lazy" decoding="async" />
							</Card>
						</CardSwap>
					</div>
					{/* Mobile view - show cards in a simpler way */}
					<div className="md:hidden mt-8">
						<div className="space-y-4">
							<div className="bg-slate-800/50 rounded-lg p-4">
								<img src="Rivs.png" alt="Smooth" className="w-full h-auto rounded" loading="lazy" decoding="async" />
							</div>
							<div className="bg-slate-800/50 rounded-lg p-4">
								<img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1600&q=60&auto=format&fit=crop" alt="Reliable" className="w-full h-auto rounded" loading="lazy" decoding="async" />
							</div>
							<div className="bg-slate-800/50 rounded-lg p-4">
								<img src="/ilyuha.png" alt="Customizable" className="w-full h-auto rounded" loading="lazy" decoding="async" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
	};

export default Services;
