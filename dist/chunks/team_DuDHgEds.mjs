const team = new Proxy({"src":"/_astro/team.DIYVF2DH.jpeg","width":1599,"height":1188,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/ric/Desktop/porto_abrigo/src/assets/images/equipa/team.jpeg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/home/ric/Desktop/porto_abrigo/src/assets/images/equipa/team.jpeg");
							return target[name];
						}
					});

export { team as default };
