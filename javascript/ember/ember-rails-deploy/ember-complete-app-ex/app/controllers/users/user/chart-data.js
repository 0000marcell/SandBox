let chartData = {
	getData() {
		return [
			{label: "Real Assets",
			 value: Math
			 .floor((Math.random() * 100) + 1) * 1000},
			{label: "Fixed Income",
			 value: Math
			 .floor((Math.random() * 100) + 1) * 1000},
			{label: "Cash & Cash Equivalent",
			 value: Math
			 .floor((Math.random() * 100) + 1) * 1000},
			{label: "Hedge Fund",
			 value: Math
			 .floor((Math.random() * 100) + 1) * 1000},
			{label: "Private Equity",
			 value: Math
			.floor((Math.random() * 100) + 1) * 1000}];
	}
}

export default chartData;
