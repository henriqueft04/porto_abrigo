const Cristiano = new Proxy({"src":"/_astro/Cristiano.hxnpTaMc.jpeg","width":1280,"height":1280,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/ric/Desktop/porto_abrigo/src/assets/images/profiles/Cristiano.jpeg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/home/ric/Desktop/porto_abrigo/src/assets/images/profiles/Cristiano.jpeg");
							return target[name];
						}
					});

export { Cristiano as default };
