const Fatima_1 = new Proxy({"src":"/_astro/Fatima 1.CNAGn8st.jpeg","width":1600,"height":1600,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/ric/Desktop/porto_abrigo/src/assets/images/profiles/Fatima 1.jpeg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/home/ric/Desktop/porto_abrigo/src/assets/images/profiles/Fatima 1.jpeg");
							return target[name];
						}
					});

export { Fatima_1 as default };
