const logoImage = new Proxy({"src":"/_astro/simbolo porto de abrigo.B8CZfzKu.png","width":1758,"height":1060,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/ric/Desktop/porto_abrigo/src/assets/images/elementos/simbolo porto de abrigo.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/home/ric/Desktop/porto_abrigo/src/assets/images/elementos/simbolo porto de abrigo.png");
							return target[name];
						}
					});

export { logoImage as default };
