const pedro = new Proxy({"src":"/_astro/pedro.D5h6aKj3.jpeg","width":1600,"height":1066,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/ric/Desktop/porto_abrigo/src/assets/images/equipa/pedro.jpeg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/home/ric/Desktop/porto_abrigo/src/assets/images/equipa/pedro.jpeg");
							return target[name];
						}
					});

export { pedro as default };
