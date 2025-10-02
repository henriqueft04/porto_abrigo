const logo_explain = new Proxy({"src":"/_astro/logo_explain.BWQ_uHAc.png","width":18517,"height":4725,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/ric/Desktop/porto_abrigo/src/assets/images/elementos/logo_explain.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/home/ric/Desktop/porto_abrigo/src/assets/images/elementos/logo_explain.png");
							return target[name];
						}
					});

export { logo_explain as default };
