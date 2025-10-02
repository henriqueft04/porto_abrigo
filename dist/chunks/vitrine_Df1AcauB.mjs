const vitrine = new Proxy({"src":"/_astro/vitrine.DJPFxXuI.png","width":5965,"height":11243,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/ric/Desktop/porto_abrigo/src/assets/images/elementos/vitrine.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/home/ric/Desktop/porto_abrigo/src/assets/images/elementos/vitrine.png");
							return target[name];
						}
					});

export { vitrine as default };
