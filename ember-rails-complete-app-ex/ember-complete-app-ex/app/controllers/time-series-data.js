let timeSeriesData = {
	getBarContent(year){
		let data = [];
		let month = 0;
		for (var i = 0; i < 5; i++) {
			month += 2;
			let obj = {time: d3.time.format('%Y-%m-%d')
				.parse(`${year}-${month}-15`),
				label: "Financial analytics software",
				value: Math.floor((Math.random() * 100) + 1) * 1000,
				type: "money"}; 
			data.push(obj);
		}
		console.log(data);
		return data;
	},
	getLineContent(){
		let data = [];
		let month = 0;
		for (var i = 0; i < 5; i++) {
			month += 2;
			let obj1 = {time: d3.time.format('%Y-%m-%d').parse("2013-05-15"),
								 label: "Software & Programming",
								 value: 17326,
								 type: "money"};
			let obj2 = {time: d3.time.format('%Y-%m-%d').parse("2013-05-15"),
								 label: "Telecommunication",
								 value: 4515,
								 type: "money"};
			data.push(obj1);
			data.push(obj2);
		}
	}
}
export default timeSeriesData;
