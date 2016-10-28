let timeSeriesData = {
	getBarContent(year){
		let data = [];
		let month = 0;
		for (var i = 0; i < 5; i++) {
			month += 1;
			let obj = {time: d3.time.format('%Y-%m-%d')
				.parse(`${year}-${month}-15`),
				label: "Financial analytics software",
				value: Math.floor((Math.random() * 100) + 1) * 1000,
				type: "money"}; 
			data.push(obj);
		}
		return data;
	},
	getLineContent(year){
		let data = [];
		let month = 0;
		for (var i = 0; i < 5; i++) {
			month += 1;
			let obj1 = {time: d3.time.format('%Y-%m-%d')
									.parse(`${year}-${month}-15`),
								 label: "Software & Programming",
								 value: Math.floor((Math.random() * 100) + 1) * 1000,
								 type: "money"};
			let obj2 = {time: d3.time.format('%Y-%m-%d')
								  .parse(`${year}-${month}-15`),
								 label: "Telecommunication",
								 value: Math.floor((Math.random() * 100) + 1) * 1000,
								 type: "money"};
			data.push(obj1);
			data.push(obj2);
		}
		console.log(data);
		return data;
	}
}

export default timeSeriesData;
