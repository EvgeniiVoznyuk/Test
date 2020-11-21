<template>
	<div class="container">
		<Toolbar v-on:add-user="addUser" v-on:set-query="setQuery" />
		<Table :users="users" />
	</div>
</template>

<script lang="">
import Vue from 'vue';
import Toolbar from '../components/Toolbar.vue';
import Table from '../components/Table.vue';

export default Vue.extend({
	name: 'Users',
	components: {
		Table,
		Toolbar
	},
	created() {
		fetch('/api/users')
			.then(res => res.json())
			.then(json => {
				this.users = json.users;
			});
		this.$emit('show-users');
	},
	data() {
		return {
			users: [],
			searchQuery: ''
		};
	},
	methods: {
		addUser(user) {
			const newUser = {
				...user,
				role: user.role.name,
				id: this.users.length + 1
			};
			this.users.unshift(newUser);
		}
	},
	setQuery(query) {
		this.searchQuery = query;
		console.log(this.searchQuery);
	}
});
</script>
