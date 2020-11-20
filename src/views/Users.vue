<template>
	<Table :users="users" />
</template>

<script lang="">
import Vue from 'vue';
import Table from '../components/Table.vue';

export default Vue.extend({
	name: 'Main',
	components: {
		Table
	},
	created() {
		fetch('/api/users')
			.then(res => res.json())
			.then(json => {
				this.users = json.users;
			});
	},
	data() {
		return {
			users: []
		};
	}
});
</script>
