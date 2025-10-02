const Mapa_JRP04 = new Proxy({"src":"/_astro/Mapa JRP-04.uf8xEDPi.png","width":3544,"height":3544,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/ric/Desktop/porto_abrigo/src/assets/images/elementos/Mapa JRP-04.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/home/ric/Desktop/porto_abrigo/src/assets/images/elementos/Mapa JRP-04.png");
							return target[name];
						}
					});

export { Mapa_JRP04 as default };
