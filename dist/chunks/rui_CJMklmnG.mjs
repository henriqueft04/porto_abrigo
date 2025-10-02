const rui = new Proxy({"src":"/_astro/rui.Cy8Qj2V7.jpeg","width":1600,"height":1066,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/ric/Desktop/porto_abrigo/src/assets/images/equipa/rui.jpeg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/home/ric/Desktop/porto_abrigo/src/assets/images/equipa/rui.jpeg");
							return target[name];
						}
					});

export { rui as default };
