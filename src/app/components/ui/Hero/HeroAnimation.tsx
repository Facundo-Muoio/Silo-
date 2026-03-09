"use client";

import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";

const VIEWBOX = { w: 1000, h: 280 };
const CENTER = { x: 500, y: 140 };
const R = 70;
const BASELINE = 200;

// Línea continua: izquierda → S → arco inferior del círculo → S → derecha
function getLinePath() {
	const xLeft = 0;
	const xRight = VIEWBOX.w - 12;
	const circleLeft = CENTER.x - R;
	const circleRight = CENTER.x + R;
	const circleBottom = CENTER.y + R;

	return [
		`M ${xLeft} ${BASELINE}`,
		`L 260 ${BASELINE}`,
		`C 320 260 400 180 ${circleLeft} ${circleBottom}`,
		`A ${R} ${R} 0 0 1 ${circleRight} ${circleBottom}`,
		`C 600 180 680 260 ${xRight} ${BASELINE}`,
	].join(" ");
}

// Varias circunferencias con pequeño offset para efecto sketchy
function getSketchyCircles() {
	return [
		{ r: R, o: 0 },
		{ r: R - 1.5, o: 0.15 },
		{ r: R + 1.2, o: 0.25 },
		{ r: R - 0.8, o: 0.35 },
	];
}

export default function HeroAnimation() {
	const t = useTranslations("Hero");
	const lineRef = useRef<SVGPathElement>(null);
	const [lineLength, setLineLength] = useState(1200);

	useEffect(() => {
		if (lineRef.current) {
			setLineLength(lineRef.current.getTotalLength());
		}
	}, []);

	return (
		<section
			className="relative flex min-h-[60dvh] w-full items-center justify-center overflow-hidden bg-white px-4 py-12"
			aria-label="SILO Arquitectura y Visualización"
		>
			<svg
				className="h-auto w-full max-w-4xl"
				viewBox={`0 0 ${VIEWBOX.w} ${VIEWBOX.h}`}
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<defs>
					{/* Flecha/teardrop al final de la línea */}
					<marker
						id="line-end"
						markerWidth="12"
						markerHeight="12"
						refX="10"
						refY="6"
						orient="auto"
					>
						<path d="M 0 0 L 12 6 L 0 12 Z" fill="var(--foreground, #171717)" />
					</marker>
				</defs>

				{/* Línea horizontal con curvas en S */}
				<path
					ref={lineRef}
					d={getLinePath()}
					stroke="var(--foreground, #171717)"
					strokeWidth="1.2"
					strokeLinecap="butt"
					strokeLinejoin="round"
					markerEnd="url(#line-end)"
					className="animate-draw-line"
					style={
						{
							"--path-length": lineLength,
						} as React.CSSProperties
					}
				/>

				{/* Círculo con efecto sketchy (múltiples trazos) */}
				<g transform={`translate(${CENTER.x}, ${CENTER.y})`}>
					{getSketchyCircles().map(({ r, o }, i) => (
						<circle
							key={i}
							cx={0}
							cy={0}
							r={r}
							stroke="var(--foreground, #171717)"
							strokeWidth={i === 0 ? 1.8 : 0.9}
							fill="none"
							className="animate-draw-circle"
							style={
								{
									"--circle-length": 2 * Math.PI * r,
									"--delay": `${0.6 + o}s`,
								} as React.CSSProperties
							}
						/>
					))}
				</g>

				{/* Texto izquierda: Arquitectura */}
				<text
					x="130"
					y={BASELINE - 14}
					className="animate-fade-in-up font-mono text-[11px] font-normal uppercase tracking-wide text-[#171717]"
					style={{ animationDelay: "0.4s", animationFillMode: "backwards" }}
				>
					{t("architecture")}
				</text>

				{/* Texto centro: SILO. */}
				<text
					x={CENTER.x}
					y={CENTER.y + 6}
					textAnchor="middle"
					className="animate-fade-in font-mono text-[14px] font-normal uppercase tracking-wide text-[#171717]"
					style={{ animationDelay: "0.9s", animationFillMode: "backwards" }}
				>
					SILO.
				</text>

				{/* Texto derecha: Visualización */}
				<text
					x="870"
					y={BASELINE - 14}
					className="animate-fade-in-up font-mono text-[11px] font-normal uppercase tracking-wide text-[#171717]"
					style={{ animationDelay: "1.2s", animationFillMode: "backwards" }}
				>
					{t("visualization")}
				</text>
			</svg>
		</section>
	);
}
