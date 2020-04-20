<template>
	<radio-svg-map v-model="selectedState" :map="map"/>
</template>

<script>
import { RadioSvgMap } from "vue-svg-map";
import map from "@svg-maps/usa";
import EB from "../EB";

export default {
	name: "BrewMap",
	components: {
		RadioSvgMap
	},
	data() {
		return {
			map,
			selectedState: null,
			stateAcronym: { "AL": "Alabama", "AK": "Alaska", "AS": "American Samoa", "AZ": "Arizona", "AR": "Arkansas", "CA": "California", "CO": "Colorado", "CT": "Connecticut", "DE": "Delaware", "DC": "District Of Columbia", "FM": "Federated States Of Micronesia", "FL": "Florida", "GA": "Georgia", "GU": "Guam", "HI": "Hawaii", "ID": "Idaho", "IL": "Illinois", "IN": "Indiana", "IA": "Iowa", "KS": "Kansas", "KY": "Kentucky", "LA": "Louisiana", "ME": "Maine", "MH": "Marshall Islands", "MD": "Maryland", "MA": "Massachusetts", "MI": "Michigan", "MN": "Minnesota", "MS": "Mississippi", "MO": "Missouri", "MT": "Montana", "NE": "Nebraska", "NV": "Nevada", "NH": "New Hampshire", "NJ": "New Jersey", "NM": "New Mexico", "NY": "New York", "NC": "North Carolina", "ND": "North Dakota", "MP": "Northern Mariana Islands", "OH": "Ohio", "OK": "Oklahoma", "OR": "Oregon", "PW": "Palau", "PA": "Pennsylvania", "PR": "Puerto Rico", "RI": "Rhode Island", "SC": "South Carolina", "SD": "South Dakota", "TN": "Tennessee", "TX": "Texas", "UT": "Utah", "VT": "Vermont", "VI": "Virgin Islands", "VA": "Virginia", "WA": "Washington", "WV": "West Virginia", "WI": "Wisconsin", "WY": "Wyoming" }
		};
	},
	watch: {
		selectedState: function(abriv){
			console.log(abriv.toUpperCase(), this.stateAcronym[abriv.toUpperCase()].toLowerCase().replace(/\s/g, '_'));
			EB.$emit('load-breweries-by-state',
					this.stateAcronym[abriv.toUpperCase()].toLowerCase().replace(/\s/g, '_'));
		}
	}
};
</script>

<style src="vue-svg-map/dist/index.css"></style>