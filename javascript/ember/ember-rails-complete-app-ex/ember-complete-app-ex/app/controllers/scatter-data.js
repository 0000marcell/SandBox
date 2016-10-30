let scatterData = {
	getData(){
		let data = [];
		let labels = ["Energy", "Industrial Metals", 
									"Municipal Bonds", "Precious Metals",
									"Real Estate", "Solar", "Renewable", "Software"];
		for (var i = 0; i < 8; i++) {
			let obj = {group: labels[i],
								 xValue: Math
									 .floor((Math.random() * 100) + 1) * 1000,
								 yValue: Math
									 .floor((Math.random() * 100) + 1) * 1000};
			data.push(obj);
		}
		return data;
	}
}

export default scatterData;
