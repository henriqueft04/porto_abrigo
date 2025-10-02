const Vera = new Proxy({"src":"/_astro/Vera.CHDahRwu.png","width":3544,"height":3544,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/ric/Desktop/porto_abrigo/src/assets/images/profiles/Vera.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/home/ric/Desktop/porto_abrigo/src/assets/images/profiles/Vera.png");
							return target[name];
						}
					});

export { Vera as default };
