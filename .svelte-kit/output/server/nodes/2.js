import * as universal from '../entries/pages/_page.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.js";
export const imports = ["_app/immutable/nodes/2.CmpCMY0M.js","_app/immutable/chunks/DptCN1eL.js","_app/immutable/chunks/92oxic9D.js","_app/immutable/chunks/DKYBWXuD.js","_app/immutable/chunks/Cy3-0ISO.js","_app/immutable/chunks/DdwJhmqI.js","_app/immutable/chunks/GOTcNiBf.js","_app/immutable/chunks/D6YF6ztN.js"];
export const stylesheets = ["_app/immutable/assets/2.-Wp2IN-G.css","_app/immutable/assets/Environment.v7xTj5jM.css"];
export const fonts = [];
