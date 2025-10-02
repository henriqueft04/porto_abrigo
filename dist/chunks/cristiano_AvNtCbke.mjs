const cristiano = new Proxy({"src":"/_astro/cristiano.BHjQ4z8u.jpeg","width":1600,"height":1066,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/ric/Desktop/porto_abrigo/src/assets/images/equipa/cristiano.jpeg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/home/ric/Desktop/porto_abrigo/src/assets/images/equipa/cristiano.jpeg");
							return target[name];
						}
					});

export { cristiano as default };
