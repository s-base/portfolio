/**
 * Icons adapted from https://phosphoricons.com/
 *
 * Want to add more?
 * 1. Find the icon you want on Phosphor Icons.
 * 2. Click “Copy SVG”.
 * 3. Paste the SVG code in your editor.
 * 4. Remove the `<svg>` wrapper so you only have elements like `<path>`, `<circle>`, `<rect>` etc.
 * 5. Remove any `stroke="#000000"` attributes
 * 6. Replace any `fill="#000000"` attributes with `stroke="none"`
 *    (or add `stroke="none"` on shapes with no `fill` or `stroke` specified).
 */

const baseSvgStyle = `fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"`

export const iconPaths = {
  arrowLeft: `<path ${baseSvgStyle} d="M216 128H40m72-72-72 72 72 72"/>`,
  arrowRight: `<path ${baseSvgStyle} d="M40 128h176m-72-72 72 72-72 72"/>`,
  feather: `<line x1="184" y1="72" x2="32" y2="224" ${baseSvgStyle}/><path d="M146.34,189.66a8,8,0,0,1-5.65,2.34H64V115.31a8,8,0,0,1,2.34-5.65L136.4,40.4a56,56,0,0,1,79.2,79.2Z" ${baseSvgStyle}/><line x1="112" y1="64.52" x2="112" y2="144" ${baseSvgStyle}/><line x1="136" y1="120" x2="215.2" y2="120" ${baseSvgStyle}/>`,
  heart: `<path ${baseSvgStyle} d="M128 216S28 160 28 92a52 52 0 0 1 100-20h0a52 52 0 0 1 100 20c0 68-100 124-100 124Z"/>`,
  instagramLogo: `<circle cx="128" cy="128" r="40" fill="none" stroke-miterlimit="10" stroke-width="16"/><rect width="184" height="184" x="36" y="36" ${baseSvgStyle} rx="48"/><circle cx="180" cy="76" r="12" stroke="none" />`,
  linkedinLogo: `<rect width="184" height="184" x="36" y="36" ${baseSvgStyle} rx="8"/><path ${baseSvgStyle} d="M120 112v64m-32-64v64m32-36a28 28 0 0 1 56 0v36"/><circle stroke="none" cx="88" cy="80" r="12"/>`,
  list: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M40 128h176M40 64h176M40 192h176"/>`,
  moonStars: `<path ${baseSvgStyle} d="M216 112V64m24 24h-48m-24-64v32m16-16h-32m65 113A92 92 0 0 1 103 39h0a92 92 0 1 0 114 114Z"/>`,
  palette: `<path  ${baseSvgStyle} d="M128,192a24,24,0,0,1,24-24h46.21a24,24,0,0,0,23.4-18.65A96.48,96.48,0,0,0,224,127.17c-.45-52.82-44.16-95.7-97-95.17a96,96,0,0,0-95,96c0,41.81,26.73,73.44,64,86.61A24,24,0,0,0,128,192Z"/><circle cx="128" cy="76" r="12"/><circle cx="84" cy="100" r="12"/><circle cx="84" cy="156" r="12"/><circle cx="172" cy="100" r="12"/>`,
  paperPlane: `<path ${baseSvgStyle} d="M210.3 35.9 23.9 88.4a8 8 0 0 0-1.2 15l85.6 40.5a7.8 7.8 0 0 1 3.8 3.8l40.5 85.6a8 8 0 0 0 15-1.2l52.5-186.4a7.9 7.9 0 0 0-9.8-9.8Zm-99.4 109.2 45.2-45.2"/>`,
  pencilLine: `<path ${baseSvgStyle} d="M96 216H48a8 8 0 0 1-8-8v-44.7a7.9 7.9 0 0 1 2.3-5.6l120-120a8 8 0 0 1 11.4 0l44.6 44.6a8 8 0 0 1 0 11.4Zm40-152 56 56"/><path ${baseSvgStyle} d="M216 216H96l-55.5-55.5M164 92l-96 96"/>`,
  rocketLaunch: `<path ${baseSvgStyle} d="M94.1 184.6c-11.4 33.9-56.6 33.9-56.6 33.9s0-45.2 33.9-56.6m124.5-56.5L128 173.3 82.7 128l67.9-67.9C176.3 34.4 202 34.7 213 36.3a7.8 7.8 0 0 1 6.7 6.7c1.6 11 1.9 36.7-23.8 62.4Z"/><path ${baseSvgStyle} d="M184.6 116.7v64.6a8 8 0 0 1-2.4 5.6l-32.3 32.4a8 8 0 0 1-13.5-4.1l-8.4-41.9m11.3-101.9H74.7a8 8 0 0 0-5.6 2.4l-32.4 32.3a8 8 0 0 0 4.1 13.5l41.9 8.4"/>`,
  strategy: `<circle cx="68" cy="188" r="28" ${baseSvgStyle}/><path ${baseSvgStyle} d="m40 72 40 40m0-40-40 40m136 56 40 40m0-40-40 40M136 80V40h40"/><path ${baseSvgStyle} d="m136 40 16 16c40 40 8 88-24 96"/>`,
  sun: `<circle cx="128" cy="128" r="60" ${baseSvgStyle}/><path ${baseSvgStyle} d="M128 36V16M63 63 49 49m-13 79H16m47 65-14 14m79 13v20m65-47 14 14m13-79h20m-47-65 14-14"/>`,
  terminalWindow: `<path ${baseSvgStyle} d="m80 96 40 32-40 32m56 0h40"/><rect width="192" height="160" x="32" y="48" ${baseSvgStyle} rx="8.5"/>`,
  trophy: `<path ${baseSvgStyle} d="M56 56v55.1c0 39.7 31.8 72.6 71.5 72.9a72 72 0 0 0 72.5-72V56a8 8 0 0 0-8-8H64a8 8 0 0 0-8 8Zm40 168h64m-32-40v40"/><path ${baseSvgStyle} d="M198.2 128h9.8a32 32 0 0 0 32-32V80a8 8 0 0 0-8-8h-32M58 128H47.9a32 32 0 0 1-32-32V80a8 8 0 0 1 8-8h32"/>`,
}
