<template>
	<div class="container">
		<Toolbar v-on:add-user="addUser" />
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
	},
	data() {
		return {
			users: []
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
	}
});
</script>
