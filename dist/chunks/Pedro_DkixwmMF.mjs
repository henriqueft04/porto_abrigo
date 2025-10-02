const Pedro = new Proxy({"src":"/_astro/Pedro.BTuhxjs4.png","width":3544,"height":3544,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/ric/Desktop/porto_abrigo/src/assets/images/profiles/Pedro.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/home/ric/Desktop/porto_abrigo/src/assets/images/profiles/Pedro.png");
							return target[name];
						}
					});

export { Pedro as default };
