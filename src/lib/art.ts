/**
 * Engraved-style inline SVG artwork for the Illustrated Heritage design.
 *
 * Every export is a raw SVG fragment string, injected with Astro's `set:html`.
 * Motifs are drawn centred on (0,0) so they can be reused at different scales
 * inside vignettes (product-card scenes) and medallion emblems (product pages,
 * hero seal, coming-soon page). Palette mirrors src/styles/global.css.
 */

export const C = {
  gold: '#a8853b',
  goldBright: '#c9a44d',
  goldPale: '#d9b96a',
  olive: '#4a5d33',
  oliveDark: '#37461f',
  bronze: '#7a5a2e',
  ink: '#2e2a20',
  charcoal: '#1d1a14',
  charcoalSoft: '#2b251b',
  night: '#23201a',
  red: '#8a3324',
  redDark: '#5e2117',
  parchment: '#f0e6cf',
  parchmentCard: '#f7efdd',
  amber: '#c98a2d',
  amberDeep: '#9a651a',
  honeyDark: '#7a4e12',
} as const;

const P = (n: number) => (Math.round(n * 10) / 10).toString();

/* ---------------- generators ---------------- */

/** Engraved sun: disc + ring + 12 rays. */
export function sun(cx: number, cy: number, r: number, stroke = C.gold, fill = C.goldBright): string {
  const rays: string[] = [];
  for (let i = 0; i < 12; i++) {
    const a = (Math.PI * 2 * i) / 12;
    const r1 = r + 8;
    const r2 = r + 15;
    rays.push(
      `<line x1="${P(cx + r1 * Math.cos(a))}" y1="${P(cy + r1 * Math.sin(a))}" x2="${P(cx + r2 * Math.cos(a))}" y2="${P(cy + r2 * Math.sin(a))}"/>`,
    );
  }
  return `<g stroke="${stroke}" stroke-width="1.3" fill="none">
<circle cx="${cx}" cy="${cy}" r="${r}" fill="${fill}" fill-opacity="0.8"/>
<circle cx="${cx}" cy="${cy}" r="${r + 4.5}" opacity="0.7"/>
${rays.join('')}
</g>`;
}

/** Radial tick marks between two radii (medallion ring detail). */
export function ringTicks(cx: number, cy: number, r1: number, r2: number, n: number, stroke: string, opacity = 1): string {
  const t: string[] = [];
  for (let i = 0; i < n; i++) {
    const a = (Math.PI * 2 * i) / n;
    t.push(
      `<line x1="${P(cx + r1 * Math.cos(a))}" y1="${P(cy + r1 * Math.sin(a))}" x2="${P(cx + r2 * Math.cos(a))}" y2="${P(cy + r2 * Math.sin(a))}"/>`,
    );
  }
  return `<g stroke="${stroke}" stroke-width="1" opacity="${opacity}">${t.join('')}</g>`;
}

/** Faint radiating light lines (behind the mystery amphora). */
function rays(cx: number, cy: number, r1: number, r2: number, n: number, stroke: string, opacity: number): string {
  const out: string[] = [];
  for (let i = 0; i < n; i++) {
    const a = (Math.PI * 2 * i) / n + Math.PI / n;
    out.push(
      `<line x1="${P(cx + r1 * Math.cos(a))}" y1="${P(cy + r1 * Math.sin(a))}" x2="${P(cx + r2 * Math.cos(a))}" y2="${P(cy + r2 * Math.sin(a))}"/>`,
    );
  }
  return `<g stroke="${stroke}" stroke-width="1" opacity="${opacity}">${out.join('')}</g>`;
}

const stars = (pts: Array<[number, number]>, color = C.goldBright) =>
  `<g fill="${color}" opacity="0.7">${pts.map(([x, y]) => `<circle cx="${x}" cy="${y}" r="1"/>`).join('')}</g>`;

const sparkle = (x: number, y: number, s: number, color = C.goldBright) =>
  `<path transform="translate(${x} ${y}) scale(${s})" d="M0 -6 L1.4 -1.4 L6 0 L1.4 1.4 L0 6 L-1.4 1.4 L-6 0 L-1.4 -1.4 Z" fill="${color}"/>`;

/** Double engraving frame with corner ticks, for a 400x230 vignette. */
const frame = (color: string) => `<g fill="none" stroke="${color}">
<rect x="7" y="7" width="386" height="216" stroke-width="1" opacity="0.55"/>
<path d="M7 21 V7 H21 M379 7 H393 V21 M393 209 V223 H379 M21 223 H7 V209" stroke-width="2.2" opacity="0.9"/>
</g>`;

/* ---------------- shared motifs (centred on 0,0) ---------------- */

/** Corinthian helmet in profile (facing left) with tall horsehair crest.
 *  Spans x -33..46, y -66..42. */
export const helmetMotif = `<g>
<path d="M-30 -22 C -24 -54 8 -70 32 -50 C 46 -38 50 -18 44 6 C 42 16 38 26 32 34 L 24 28 C 30 20 34 10 35 0 C 38 -20 30 -38 14 -46 C -2 -54 -20 -44 -30 -22 Z" fill="${C.red}" stroke="${C.redDark}" stroke-width="1.4"/>
<g stroke="${C.redDark}" stroke-width="1" fill="none">
<path d="M-20 -40 L -14 -32"/><path d="M-8 -54 L -4 -44"/><path d="M6 -62 L 8 -50"/><path d="M18 -58 L 17 -47"/><path d="M29 -49 L 25 -38"/><path d="M39 -33 L 32 -26"/><path d="M44 -12 L 36 -9"/><path d="M42 8 L 34 8"/><path d="M37 22 L 30 19"/>
</g>
<path d="M-2 -44 C -18 -42 -28 -30 -29 -12 C -29 -3 -28 6 -27 14 L -19 16 C -18 26 -16 34 -13 42 C -7 40 -1 38 3 36 C 7 30 9 24 10 16 L 16 18 C 22 22 26 26 28 30 C 30 20 30 10 28 2 C 30 -20 18 -42 -2 -44 Z" fill="${C.night}" stroke="${C.goldBright}" stroke-width="1.6"/>
<path d="M-26 -26 C -12 -42 12 -46 28 -34" fill="none" stroke="${C.redDark}" stroke-width="1.1" opacity="0.75"/>
<path d="M-25 -7 C -22 -11 -14 -11 -12 -7 L -14 -3 C -19 -1 -23 -3 -25 -7 Z" fill="${C.charcoal}" stroke="${C.gold}" stroke-width="1"/>
<path d="M-12 -7 C -13 0 -14 6 -16 10" fill="none" stroke="${C.gold}" stroke-width="0.9" opacity="0.8"/>
<path d="M-28 -13 C -20 -17 -10 -17 -3 -15" fill="none" stroke="${C.gold}" stroke-width="1" opacity="0.9"/>
<path d="M-19 16 C -8 9 2 9 10 16" fill="none" stroke="${C.gold}" stroke-width="1" opacity="0.85"/>
<g fill="none" stroke="${C.gold}" stroke-width="0.8" opacity="0.5">
<path d="M-20 -28 C -10 -36 6 -38 16 -30"/>
<path d="M-24 -18 C -12 -28 8 -30 22 -20"/>
</g>
<g fill="${C.gold}" opacity="0.9">
<circle cx="-23" cy="5" r="1"/><circle cx="-17" cy="28" r="1"/><circle cx="0" cy="30" r="1"/><circle cx="22" cy="24" r="1"/>
</g>
</g>`;

/** Owl of Athena, front view (tetradrachm style). Spans y -43..44. */
export const owlMotif = `<g>
<path d="M0 -38 C -17 -38 -26 -24 -26 -3 C -26 20 -16 36 0 38 C 16 36 26 20 26 -3 C 26 -24 17 -38 0 -38 Z" fill="${C.night}" stroke="${C.goldBright}" stroke-width="1.6"/>
<path d="M-17 -33 L -23 -43 L -9 -37 Z" fill="${C.night}" stroke="${C.goldBright}" stroke-width="1.3"/>
<path d="M17 -33 L 23 -43 L 9 -37 Z" fill="${C.night}" stroke="${C.goldBright}" stroke-width="1.3"/>
<path d="M-20 -23 C -14 -30 -4 -28 0 -21 C 4 -28 14 -30 20 -23" fill="none" stroke="${C.gold}" stroke-width="1.2"/>
<circle cx="-11" cy="-13" r="7.4" fill="${C.charcoal}" stroke="${C.goldBright}" stroke-width="1.2"/>
<circle cx="11" cy="-13" r="7.4" fill="${C.charcoal}" stroke="${C.goldBright}" stroke-width="1.2"/>
<circle cx="-11" cy="-13" r="5.2" fill="none" stroke="${C.gold}" stroke-width="0.7" opacity="0.6"/>
<circle cx="11" cy="-13" r="5.2" fill="none" stroke="${C.gold}" stroke-width="0.7" opacity="0.6"/>
<circle cx="-11" cy="-13" r="2.2" fill="${C.goldBright}"/>
<circle cx="11" cy="-13" r="2.2" fill="${C.goldBright}"/>
<g stroke="${C.gold}" stroke-width="0.7" fill="none" opacity="0.55">
<path d="M-21 -20 L -17 -17"/><path d="M-24 -13 L -20 -12"/><path d="M21 -20 L 17 -17"/><path d="M24 -13 L 20 -12"/>
</g>
<path d="M0 -8 L -4 -2 L 0 5 L 4 -2 Z" fill="${C.goldBright}"/>
<g fill="none" stroke="${C.gold}" stroke-width="1" opacity="0.7">
<path d="M-16 9 Q 0 19 16 9"/><path d="M-14 17 Q 0 26 14 17"/><path d="M-11 25 Q 0 33 11 25"/>
</g>
<g stroke="${C.goldBright}" stroke-width="1.2" fill="none">
<path d="M-8 38 L -8 43 M-11 43 L -5 43"/><path d="M8 38 L 8 43 M5 43 L 11 43"/>
</g>
</g>`;

/** Olive branch with leaves and fruit. Spans x -45..46, y -28..31. */
export const oliveBranchMotif = `<g>
<path d="M-36 28 C -20 12 4 -4 38 -24" fill="none" stroke="${C.olive}" stroke-width="2.4" stroke-linecap="round"/>
<g fill="${C.olive}">
<ellipse cx="-29" cy="17" rx="8.5" ry="2.7" transform="rotate(-38 -29 17)"/>
<ellipse cx="-22" cy="25" rx="8.5" ry="2.7" transform="rotate(8 -22 25)"/>
<ellipse cx="-13" cy="9" rx="8.5" ry="2.7" transform="rotate(-44 -13 9)"/>
<ellipse cx="-5" cy="16" rx="8.5" ry="2.7" transform="rotate(6 -5 16)"/>
<ellipse cx="3" cy="0" rx="8.5" ry="2.7" transform="rotate(-46 3 0)"/>
<ellipse cx="12" cy="6" rx="8.5" ry="2.7" transform="rotate(2 12 6)"/>
<ellipse cx="19" cy="-10" rx="8.5" ry="2.7" transform="rotate(-46 19 -10)"/>
<ellipse cx="28" cy="-6" rx="8.5" ry="2.7" transform="rotate(-4 28 -6)"/>
<ellipse cx="38" cy="-25" rx="8.5" ry="2.7" transform="rotate(-32 38 -25)"/>
</g>
<path d="M-14 16 q-2 6 -4 8 M2 6 q-1 6 -3 9 M18 -6 q0 6 -2 9" fill="none" stroke="${C.olive}" stroke-width="1.2"/>
<circle cx="-18" cy="27" r="4.4" fill="${C.oliveDark}"/>
<circle cx="-1" cy="18" r="4.4" fill="${C.oliveDark}"/>
<circle cx="16" cy="8" r="4.4" fill="${C.oliveDark}"/>
<circle cx="-19.4" cy="25.6" r="1.2" fill="${C.goldBright}" opacity="0.9"/>
<circle cx="-2.4" cy="16.6" r="1.2" fill="${C.goldBright}" opacity="0.9"/>
<circle cx="14.6" cy="6.6" r="1.2" fill="${C.goldBright}" opacity="0.9"/>
</g>`;

/** Traditional skep beehive on a stone slab. Spans x -40..40, y -26..29. */
export const hiveMotif = `<g>
<path d="M-40 28 L 40 28" stroke="${C.honeyDark}" stroke-width="2.2" stroke-linecap="round"/>
<path d="M-31 22 C -31 2 -25 -26 0 -26 C 25 -26 31 2 31 22 Q 0 32 -31 22 Z" fill="#e8bd6e" stroke="${C.honeyDark}" stroke-width="1.6"/>
<g fill="none" stroke="${C.honeyDark}" stroke-width="1.2">
<path d="M-30 12 A 30 7 0 0 0 30 12"/>
<path d="M-28 1 A 28 6.5 0 0 0 28 1"/>
<path d="M-24 -10 A 24 6 0 0 0 24 -10"/>
<path d="M-17 -19 A 17 5 0 0 0 17 -19"/>
</g>
<path d="M-7 25 Q 0 11 7 25 L 7 26 Q 0 30 -7 26 Z" fill="#4a2f0e"/>
</g>`;

/** Honeybee with translucent wings; rotate via wrapper transform. */
export const bee = (x: number, y: number, rot = 0) => `<g transform="translate(${x} ${y}) rotate(${rot})">
<ellipse cx="-1.2" cy="-4.4" rx="3.4" ry="1.8" transform="rotate(-26 -1.2 -4.4)" fill="${C.parchmentCard}" fill-opacity="0.85" stroke="${C.honeyDark}" stroke-width="0.7"/>
<ellipse cx="2.2" cy="-4.2" rx="2.9" ry="1.5" transform="rotate(-8 2.2 -4.2)" fill="${C.parchmentCard}" fill-opacity="0.85" stroke="${C.honeyDark}" stroke-width="0.7"/>
<ellipse cx="0" cy="0" rx="4.8" ry="3" fill="#e2b563" stroke="${C.honeyDark}" stroke-width="1"/>
<path d="M-1.6 -2.8 L -1.6 2.8 M0.9 -2.9 L 0.9 2.9" stroke="${C.honeyDark}" stroke-width="0.9"/>
<circle cx="5" cy="-0.4" r="1.1" fill="${C.honeyDark}"/>
</g>`;

/** Wild thyme sprig with flower-head dots. Spans y -27..30. */
export const thymeSprig = `<g stroke="${C.honeyDark}" fill="none" stroke-width="1.2">
<path d="M0 30 C -2 14 -1 0 2 -18"/>
<path d="M0 16 C -6 12 -10 6 -12 0"/>
<path d="M1 4 C 7 0 10 -4 11 -10"/>
<g fill="${C.amberDeep}" stroke="none">
<circle cx="2" cy="-20" r="1.7"/><circle cx="-1" cy="-23" r="1.7"/><circle cx="5" cy="-23" r="1.7"/><circle cx="2" cy="-26" r="1.7"/>
<circle cx="-12" cy="-2" r="1.5"/><circle cx="-15" cy="-4" r="1.5"/><circle cx="-11" cy="-6" r="1.5"/>
<circle cx="11" cy="-12" r="1.5"/><circle cx="14" cy="-13" r="1.5"/><circle cx="11" cy="-16" r="1.5"/>
</g>
</g>`;

/** Two-handled amphora, engraved. Spans x -34..34, y -55..45. */
export const amphoraMotif = `<g>
<path d="M-14 -44 C -27 -44 -31 -32 -25 -24" fill="none" stroke="${C.goldBright}" stroke-width="2.4"/>
<path d="M14 -44 C 27 -44 31 -32 25 -24" fill="none" stroke="${C.goldBright}" stroke-width="2.4"/>
<path d="M-14 -36 C -28 -28 -34 -14 -32 0 C -30 18 -18 30 0 32 C 18 30 30 18 32 0 C 34 -14 28 -28 14 -36 L 14 -50 L -14 -50 Z" fill="#221c12" stroke="${C.goldBright}" stroke-width="1.6"/>
<ellipse cx="0" cy="-51" rx="16" ry="4" fill="#221c12" stroke="${C.goldBright}" stroke-width="1.4"/>
<path d="M-8 32 L -10 40 L 10 40 L 8 32 Z" fill="#221c12" stroke="${C.goldBright}" stroke-width="1.3"/>
<ellipse cx="0" cy="41.5" rx="13" ry="3" fill="#221c12" stroke="${C.goldBright}" stroke-width="1.3"/>
<g fill="none" stroke="${C.gold}" stroke-width="0.9" opacity="0.65">
<path d="M-24 -16 C -27 -6 -25 10 -15 20"/>
<path d="M-29 -6 C -30 4 -27 12 -21 18"/>
<path d="M-27 -13 Q 0 -7 27 -13"/>
<path d="M-28 -6 Q 0 0 28 -6"/>
</g>
</g>`;

/** Cluster of olive leaves used to build the tree canopy. */
const leafCluster = (x: number, y: number, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})" fill="${C.olive}">
<ellipse cx="-6" cy="-2" rx="7" ry="2.2" transform="rotate(-30 -6 -2)"/>
<ellipse cx="6" cy="-3" rx="7" ry="2.2" transform="rotate(24 6 -3)"/>
<ellipse cx="0" cy="-7" rx="7" ry="2.2" transform="rotate(-6 0 -7)"/>
<ellipse cx="-4" cy="-10" rx="6" ry="2" transform="rotate(-40 -4 -10)"/>
<ellipse cx="5" cy="-10" rx="6" ry="2" transform="rotate(36 5 -10)"/>
</g>`;

/** Family olive tree (hero seal). Spans roughly x -30..30, y -28..38. */
export const oliveTreeMotif = `<g>
<path d="M-24 34 Q 0 40 24 34" fill="none" stroke="${C.bronze}" stroke-width="1.6"/>
<path d="M-14 34 Q 0 30 14 34" fill="none" stroke="${C.bronze}" stroke-width="1.2" opacity="0.7"/>
<path d="M0 33 C -1 22 -2 14 -5 6 M0 33 C 2 24 3 14 6 7 M-5 6 C -10 0 -15 -3 -20 -5 M6 7 C 11 1 16 -2 21 -4 M-2 12 C -2 4 -1 -4 1 -10" fill="none" stroke="${C.oliveDark}" stroke-width="2.2" stroke-linecap="round"/>
${leafCluster(-22, -6, 1)}
${leafCluster(1, -12, 1.15)}
${leafCluster(23, -5, 1)}
${leafCluster(-10, -16, 0.9)}
${leafCluster(13, -17, 0.9)}
${leafCluster(-14, -2, 0.8)}
${leafCluster(8, -3, 0.8)}
${leafCluster(-2, -22, 0.85)}
<circle cx="-13" cy="1" r="2.2" fill="${C.oliveDark}"/>
<circle cx="15" cy="2" r="2.2" fill="${C.oliveDark}"/>
</g>`;

/** One arm of a laurel wreath following a circle around (cx,cy) at radius r,
 *  from angle a0 to a1 (degrees, SVG orientation: 90 = straight down). */
function wreathArm(cx: number, cy: number, r: number, a0: number, a1: number, n: number, color: string): string {
  const rad = (d: number) => (d * Math.PI) / 180;
  const p0x = cx + r * Math.cos(rad(a0));
  const p0y = cy + r * Math.sin(rad(a0));
  const p1x = cx + r * Math.cos(rad(a1));
  const p1y = cy + r * Math.sin(rad(a1));
  const sweep = a1 > a0 ? 1 : 0;
  const leaves: string[] = [];
  for (let i = 0; i < n; i++) {
    const a = a0 + ((a1 - a0) * (i + 0.5)) / n;
    const tangent = a + (a1 > a0 ? 90 : -90);
    const tilt = i % 2 === 0 ? -13 : 13;
    const rr = i % 2 === 0 ? r - 2.5 : r + 2.5;
    const lx2 = cx + rr * Math.cos(rad(a));
    const ly2 = cy + rr * Math.sin(rad(a));
    leaves.push(
      `<ellipse cx="${P(lx2)}" cy="${P(ly2)}" rx="8" ry="2.5" transform="rotate(${P(tangent + tilt)} ${P(lx2)} ${P(ly2)})" fill="${color}"/>`,
    );
  }
  return `<path d="M${P(p0x)} ${P(p0y)} A ${r} ${r} 0 0 ${sweep} ${P(p1x)} ${P(p1y)}" fill="none" stroke="${color}" stroke-width="1.5"/>${leaves.join('')}`;
}

/** Laurel wreath cradling the lower half of a medallion, tied at the bottom. */
function medallionWreath(cx: number, cy: number, r: number, color: string): string {
  return `<g opacity="0.95">
${wreathArm(cx, cy, r, 97, 168, 9, color)}
${wreathArm(cx, cy, r, 83, 12, 9, color)}
<circle cx="${cx}" cy="${P(cy + r)}" r="2.6" fill="${color}"/>
<path d="M${P(cx - 5)} ${P(cy + r + 6)} L ${cx} ${P(cy + r + 1)} L ${P(cx + 5)} ${P(cy + r + 6)}" fill="none" stroke="${color}" stroke-width="1.3"/>
</g>`;
}

/** Small gold olive twig (coin detail beside the owl). */
const goldTwig = `<g stroke="${C.goldBright}" fill="${C.goldBright}">
<path d="M0 14 C 1 6 2 -2 6 -12" fill="none" stroke-width="1.3"/>
<ellipse cx="1" cy="4" rx="5" ry="1.7" transform="rotate(-60 1 4)"/>
<ellipse cx="5" cy="6" rx="5" ry="1.7" transform="rotate(-8 5 6)"/>
<ellipse cx="4" cy="-5" rx="5" ry="1.7" transform="rotate(-62 4 -5)"/>
<ellipse cx="8" cy="-3" rx="5" ry="1.7" transform="rotate(-14 8 -3)"/>
<circle cx="7" cy="-12" r="2.4"/>
</g>`;

/** Minoan column (wider at the top), capital and abacus. y 93..148. */
const minoanColumn = (x: number) => `<g transform="translate(${x} 0)">
<path d="M-6 148 L -8.5 104 L 8.5 104 L 6 148 Z" fill="#9a3b2b" stroke="#5e2117" stroke-width="1"/>
<path d="M-3 107 L -1.8 146" stroke="#d98a6a" stroke-width="1.1" opacity="0.8" fill="none"/>
<ellipse cx="0" cy="101.5" rx="11" ry="4" fill="#2b251b"/>
<rect x="-9.5" y="93" width="19" height="5.5" fill="#2b251b"/>
</g>`;

/* ---------------- night-scene shared base ---------------- */

function nightBase(id: string, warm = false): string {
  const top = warm ? '#2c2415' : '#2b251b';
  const bottom = warm ? '#151009' : '#171310';
  return `<defs>
<linearGradient id="v-${id}-sky" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stop-color="${top}"/><stop offset="1" stop-color="${bottom}"/>
</linearGradient>
<radialGradient id="v-${id}-glow" cx="0.5" cy="0.38" r="0.62">
<stop offset="0" stop-color="#c9a44d" stop-opacity="0.3"/><stop offset="1" stop-color="#c9a44d" stop-opacity="0"/>
</radialGradient>
<pattern id="v-${id}-meander" width="14" height="14" patternUnits="userSpaceOnUse">
<path d="M1 13 V1 H13 V9 H6 V6 H9" fill="none" stroke="${C.gold}" stroke-width="1.6"/>
</pattern>
</defs>
<rect width="400" height="230" fill="url(#v-${id}-sky)"/>
<rect width="400" height="230" fill="url(#v-${id}-glow)"/>`;
}

/** Taygetus-like double ridge with a hint of olive groves. */
const taygetus = `<path d="M0 152 L46 128 L92 144 L138 116 L184 138 L232 110 L278 134 L326 120 L366 138 L400 126 L400 230 L0 230 Z" fill="#211b12" stroke="${C.gold}" stroke-width="1" stroke-opacity="0.75"/>
<path d="M0 176 L58 156 L112 170 L164 150 L216 168 L268 152 L322 170 L400 158 L400 230 L0 230 Z" fill="#140f0a" stroke="${C.bronze}" stroke-width="1"/>
<g stroke="${C.gold}" stroke-width="1" fill="none" opacity="0.45">
<path d="M40 190 q4 -7 8 0 M62 195 q4 -7 8 0 M330 192 q4 -7 8 0 M352 197 q4 -7 8 0 M88 199 q4 -7 8 0 M310 201 q4 -7 8 0"/>
</g>`;

const meanderBand = (id: string) => `<path d="M28 199 H372 M28 219 H372" stroke="${C.gold}" stroke-width="1" opacity="0.7"/>
<rect x="30" y="202" width="340" height="14" fill="url(#v-${id}-meander)" opacity="0.9"/>`;

/* ---------------- vignette scenes (400 x 230) ---------------- */

function creteScene(): string {
  return `<defs>
<linearGradient id="v-crete-sky" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stop-color="#f6eed9"/><stop offset="0.6" stop-color="#ecdfbf"/><stop offset="1" stop-color="#e0d1a8"/>
</linearGradient>
<linearGradient id="v-crete-sea" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stop-color="#c9cfa5"/><stop offset="1" stop-color="#aab784"/>
</linearGradient>
</defs>
<rect width="400" height="230" fill="url(#v-crete-sky)"/>
${sun(318, 48, 14)}
<g fill="none" stroke="${C.bronze}" stroke-width="1.1" opacity="0.6">
<path d="M120 40 q5 -5 10 0 q5 5 10 0"/>
<path d="M152 56 q4 -4 8 0 q4 4 8 0"/>
</g>
<path d="M0 116 L42 88 L74 104 L118 76 L158 100 L204 70 L244 94 L292 80 L338 98 L400 84 L400 134 L0 134 Z" fill="#d6d3b0" stroke="#a3a37e" stroke-width="1"/>
<path d="M111 81 L118 76 L126 81 L118 80 Z M197 75 L204 70 L212 75 L204 74 Z M285 84 L292 80 L299 84 L292 83 Z" fill="#f6eed9"/>
<path d="M0 126 L54 104 L96 118 L148 100 L198 116 L254 102 L306 118 L356 108 L400 118 L400 138 L0 138 Z" fill="#b9c39a" stroke="#8fa072" stroke-width="1"/>
<rect x="0" y="131" width="400" height="99" fill="url(#v-crete-sea)"/>
<path d="M0 131 H400" stroke="${C.gold}" stroke-width="1.1" opacity="0.8"/>
<g fill="none" stroke="#6f8155" stroke-width="1.1" opacity="0.8">
<path d="M210 142 q9 -4 18 0 t18 0 t18 0 t18 0 t18 0 t18 0 t18 0 t18 0 t18 0"/>
<path d="M232 152 q9 -4 18 0 t18 0 t18 0 t18 0 t18 0 t18 0 t18 0"/>
<path d="M246 163 q9 -4 18 0 t18 0 t18 0 t18 0 t18 0"/>
<path d="M228 176 H 384" stroke-dasharray="8 12"/>
<path d="M240 190 H 384" stroke-dasharray="5 14"/>
</g>
<g transform="translate(302 118)">
<path d="M-15 4 Q 0 11 15 4 L 11 0 L -13 0 Z" fill="${C.bronze}" stroke="#5e4620" stroke-width="1"/>
<line x1="1" y1="0" x2="1" y2="-17" stroke="#5e4620" stroke-width="1.2"/>
<path d="M1 -17 C 8 -14 12 -7 13 -1 L 2 -1 Z" fill="${C.parchmentCard}" stroke="${C.bronze}" stroke-width="1"/>
<path d="M1 -17 L -4 -13" stroke="${C.bronze}" stroke-width="1"/>
</g>
<path d="M0 138 C 66 136 140 146 204 162 L 204 230 L 0 230 Z" fill="#d8cba0" stroke="#b1a274" stroke-width="1"/>
<g>
<rect x="34" y="154" width="132" height="7" fill="#c3ab74" stroke="#8a744a" stroke-width="1"/>
<rect x="42" y="147" width="116" height="7" fill="#cdb67f" stroke="#8a744a" stroke-width="1"/>
<rect x="46" y="84" width="108" height="9" fill="#8a5a2b" stroke="#5e3d1c" stroke-width="1"/>
<rect x="50" y="79" width="100" height="5" fill="#a8763c" stroke="#5e3d1c" stroke-width="1"/>
<g fill="${C.goldBright}" opacity="0.9">
<circle cx="66" cy="88.5" r="2"/><circle cx="88" cy="88.5" r="2"/><circle cx="110" cy="88.5" r="2"/><circle cx="132" cy="88.5" r="2"/>
</g>
${minoanColumn(64)}${minoanColumn(100)}${minoanColumn(136)}
</g>
<g fill="none" stroke="#a3906a" stroke-width="1" opacity="0.7">
<path d="M40 170 q30 6 60 8 M60 182 q40 6 80 6 M36 194 q50 8 100 6"/>
</g>
<g transform="translate(338 198) rotate(-8)">${oliveBranchMotif}</g>
<g transform="translate(52 212) rotate(6) scale(0.7)">${oliveBranchMotif}</g>
${frame(C.gold)}`;
}

function lakoniaScene(): string {
  return `${nightBase('lak')}
${stars([[38, 30], [74, 52], [120, 24], [300, 36], [344, 58], [368, 26], [262, 20], [160, 40]])}
${taygetus}
<circle cx="200" cy="102" r="64" fill="#191510"/>
<circle cx="200" cy="102" r="64" fill="none" stroke="${C.goldBright}" stroke-width="1.6"/>
<circle cx="200" cy="102" r="56" fill="none" stroke="${C.gold}" stroke-width="1"/>
${ringTicks(200, 102, 56.5, 63.5, 36, C.gold, 0.8)}
<g transform="translate(196 104) scale(0.78)">${helmetMotif}</g>
${medallionWreath(200, 102, 73, C.gold)}
${meanderBand('lak')}
${frame(C.gold)}`;
}

function athenaScene(): string {
  return `${nightBase('ath', true)}
${stars([[46, 34], [92, 24], [140, 46], [258, 24], [306, 44], [354, 30], [200, 18]])}
${taygetus}
<circle cx="200" cy="102" r="64" fill="#1b150c"/>
<circle cx="200" cy="102" r="64" fill="none" stroke="${C.goldBright}" stroke-width="1.6"/>
<circle cx="200" cy="102" r="56" fill="none" stroke="${C.gold}" stroke-width="1" stroke-dasharray="1 4"/>
${ringTicks(200, 102, 57, 63.5, 36, C.gold, 0.8)}
<g transform="translate(200 104) scale(0.88)">${owlMotif}</g>
<g transform="translate(162 96) scale(0.9)">${goldTwig}</g>
<path d="M240 62 a 9 9 0 1 0 9 13 a 7.2 7.2 0 1 1 -9 -13 Z" fill="${C.goldBright}" opacity="0.85"/>
${medallionWreath(200, 102, 73, C.gold)}
${meanderBand('ath')}
${frame(C.gold)}`;
}

function honeyScene(): string {
  return `<defs>
<linearGradient id="v-honey-sky" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stop-color="#f7e6c0"/><stop offset="0.55" stop-color="#eccb87"/><stop offset="1" stop-color="#e4b465"/>
</linearGradient>
</defs>
<rect width="400" height="230" fill="url(#v-honey-sky)"/>
${sun(76, 50, 15, C.amberDeep, '#e9c06a')}
<path d="M0 132 C 70 112 150 124 226 116 C 300 108 352 120 400 110 L400 230 0 230Z" fill="#e0af5c" stroke="#b98432" stroke-width="1"/>
<path d="M0 162 C 90 142 190 156 272 148 C 330 143 372 152 400 146 L400 230 0 230Z" fill="#d09c3f" stroke="#a5762c" stroke-width="1"/>
<path d="M0 186 C 90 176 300 182 400 172 L 400 230 0 230 Z" fill="#c8943a"/>
<path d="M136 88 C 160 66 196 60 232 66 C 250 69 262 78 268 92" fill="none" stroke="${C.honeyDark}" stroke-width="1.1" stroke-dasharray="2 5" opacity="0.7"/>
${bee(136, 88, -20)}${bee(232, 64, 8)}${bee(268, 94, 24)}
<g transform="translate(202 140) scale(1.15)">${hiveMotif}</g>
<g transform="translate(56 172)">${thymeSprig}</g>
<g transform="translate(88 184) scale(-0.9 0.9)">${thymeSprig}</g>
<g transform="translate(330 176)">${thymeSprig}</g>
<g transform="translate(356 190) scale(-0.8 0.8)">${thymeSprig}</g>
<g stroke="#8a5a17" stroke-width="1" opacity="0.6" fill="none">
<path d="M120 196 l3 -8 M128 198 l2 -7 M282 196 l3 -8 M292 200 l2 -7 M170 204 l3 -8 M240 206 l2 -7"/>
</g>
${frame(C.amberDeep)}`;
}

function mysteryScene(): string {
  return `${nightBase('myst')}
${stars([[60, 36], [104, 60], [150, 28], [250, 30], [296, 54], [340, 32], [200, 18]])}
${rays(200, 110, 78, 152, 18, C.goldBright, 0.14)}
<rect x="166" y="168" width="68" height="8" fill="#241d12" stroke="${C.gold}" stroke-width="1" stroke-opacity="0.7"/>
<rect x="174" y="176" width="52" height="24" fill="#1b150d" stroke="${C.gold}" stroke-width="1" stroke-opacity="0.5"/>
<rect x="160" y="200" width="80" height="8" fill="#241d12" stroke="${C.gold}" stroke-width="1" stroke-opacity="0.7"/>
<g transform="translate(200 122) scale(1.05)">${amphoraMotif}</g>
<path d="M200 50 C 214 52 224 60 228 72 C 236 78 240 88 238 96 C 242 110 244 126 246 138 Q 238 132 234 142 Q 226 134 222 146 Q 212 136 208 148 Q 200 138 192 148 Q 186 136 178 144 Q 172 132 164 138 Q 160 126 154 130 C 156 118 158 106 162 96 C 160 88 164 78 172 72 C 176 60 186 52 200 50 Z" fill="#3a3120" stroke="${C.goldBright}" stroke-width="1.1"/>
<g fill="none" stroke="${C.goldBright}" stroke-width="0.9" opacity="0.45">
<path d="M196 56 C 186 80 178 106 172 132"/>
<path d="M204 58 C 202 86 200 112 200 138"/>
<path d="M212 60 C 220 86 226 110 232 136"/>
<path d="M190 60 C 180 78 170 100 163 124"/>
<path d="M218 66 C 228 88 236 108 242 130"/>
</g>
<g stroke="#171310" stroke-width="1.6" opacity="0.4" fill="none">
<path d="M222 82 L 231 104 M228 98 L 235 118 M217 108 L 224 132"/>
</g>
${sparkle(152, 78, 1)}${sparkle(250, 66, 0.8)}${sparkle(240, 158, 0.7)}
${frame(C.gold)}`;
}

export type VignetteScene = 'crete' | 'lakonia' | 'athena' | 'honey' | 'mystery';

export type EmblemKind = 'olive' | 'helmet' | 'owl' | 'hive' | 'amphora' | 'seal';

export function vignetteScene(scene: VignetteScene): string {
  switch (scene) {
    case 'crete':
      return creteScene();
    case 'lakonia':
      return lakoniaScene();
    case 'athena':
      return athenaScene();
    case 'honey':
      return honeyScene();
    case 'mystery':
      return mysteryScene();
  }
}
