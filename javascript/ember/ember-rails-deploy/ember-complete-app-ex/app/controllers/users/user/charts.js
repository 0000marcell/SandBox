import Ember from 'ember';
import timeSeriesData from './time-series-data';
import chartData from './chart-data';
import scatterData from './scatter-data';

export default Ember.Controller.extend({
	dotRadius: 7,
	pieSlices: 5,
	period: 2015,
	yAxisFromZero: true,
	selectedInterval: 'M',
	barPadding: 0.5,
	data: [{"label": "Equity", "value": 12935781.176999997},
						{"label": "Real Assets",
			 		   "value": 10475849.276172025},
						{"label": "Fixed Income",
			 			 "value": 8231078.16438347},
						{"label": "Cash & Cash Equivalent",
						 "value": 5403418.115000006},
						{"label": "Hedge Fund",
						 "value": 1621341.246006786},
						{"label": "Private Equity",
						 "value": 1574677.59}],
  scatterData: [{"group": "Energy",
			              "xValue": 0.017440569068138557,
			 		          "yValue": 0.029481600786463634},
			 						 {"group": "Energy",
			              "xValue": -0.28908275497440244,
									  "yValue": -0.08083803288141521},
									 {"group": "Industrial Metals",
			              "xValue": 0.14072400896070691,
									  "yValue": 0.04008348814566197},
										{"group": "Municipal Bonds",
										 "xValue": -0.2712097037294005,
										 "yValue": -0.11227088454416446},
										{"group": "Precious Metals",
										 "xValue": -0.1728403500715051,
										 "yValue": -0.04917117591842082},
										{"group": "Real Estate",
										 "xValue": -0.06466537726032852,
										 "yValue": -0.03309230484591455}],
	timeSeriesBarContent: [{time: d3.time.format('%Y-%m-%d').parse("2013-05-15"),
													label: "Financial analytics software",
													value: 49668,
													type: "money"}, 
												 {time: d3.time.format('%Y-%m-%d').parse("2013-06-15"),
													label: "Financial analytics software",
													value: 68344,
													type: "money"}, 
												 {time: d3.time.format('%Y-%m-%d').parse("2013-07-16"),
													label: "Financial analytics software",
													value: 60654,
													type: "money"}, 
												 {time: d3.time.format('%Y-%m-%d').parse("2013-08-16"),
													label: "Financial analytics software",
													value: 48240,
													type: "money"}, 
												 {time: d3.time.format('%Y-%m-%d').parse("2013-09-16"),
													label: "Financial analytics software",
													value: 62074,
													type: "money"}],
	timeSeriesLineContent: [{time: d3.time.format('%Y-%m-%d').parse("2013-05-15"),
													 label: "Software & Programming",
													 value: 17326,
													 type: "money"}, {
													 time: d3.time.format('%Y-%m-%d').parse("2013-05-15"),
													 label: "Telecommunication",
													 value: 4515,
													 type: "money"}, 
													{time: d3.time.format('%Y-%m-%d').parse("2013-06-15"),
													 label: "Software & Programming",
													 value: 15326,
													 type: "money"}, 
													{time: d3.time.format('%Y-%m-%d').parse("2013-06-15"),
													 label: "Telecommunication",
													 value: 1515,
													 type: "money"}, 
													{time: d3.time.format('%Y-%m-%d').parse("2013-07-16"),
													 label: "Software & Programming",
													 value: 14326,
													 type: "money"}, 
													{time: d3.time.format('%Y-%m-%d').parse("2013-07-16"),
													 label: "Telecommunication",
													 value: 8518,
													 type: "money"}, {
													 time: d3.time.format('%Y-%m-%d').parse("2013-08-16"),
													 label: "Software & Programming",
													 value: 42301,
													 type: "money"}, 
													 {time: d3.time.format('%Y-%m-%d').parse("2013-08-16"),														label: "Telecommunication",
														value: 90191,
														type: "money"}, 
													 {time: d3.time.format('%Y-%m-%d').parse("2013-09-16"),														label: "Software & Programming",
														value: 57326,
														type: "money"}, {
													  time: d3.time.format('%Y-%m-%d').parse("2013-09-16"),
														label: "Telecommunication",
														value: 39544,
														type: "money"}],
	actions: {
		getTimeSeriesData(year){
			this.set('period', year);
			this.set('timeSeriesBarContent', timeSeriesData.getBarContent(year));
			this.set('timeSeriesLineContent', timeSeriesData.getLineContent(year));
		},
		getData(year){
			this.set('period', year);
			this.set('data', chartData.getData());
		},
		getScatterData(year){
			this.set('period', year);
			this.set('scatterData', scatterData.getData());
		}
	}
});
