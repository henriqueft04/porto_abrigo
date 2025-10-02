const Carla = new Proxy({"src":"/_astro/Carla.DDdIzFW8.png","width":3544,"height":3544,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/ric/Desktop/porto_abrigo/src/assets/images/profiles/Carla.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/home/ric/Desktop/porto_abrigo/src/assets/images/profiles/Carla.png");
							return target[name];
						}
					});

export { Carla as default };
