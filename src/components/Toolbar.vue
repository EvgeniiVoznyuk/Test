<template>
	<Toolbar class="p-mb-4 p-mt-4">
		<template slot="left">
			<AddUser v-on:add-user="addUser" />
		</template>
		<template slot="right">
			<Button icon="pi pi-times" class="p-button-danger" />
		</template>
	</Toolbar>
</template>

<script>
import Toolbar from 'primevue/toolbar';
import AddUser from './AddUser.vue';

export default {
	name: 'Tool',
	components: {
		Toolbar,
		AddUser
	},
	data() {
		return {
			button: null,
			displayModal: false
		};
	},
	methods: {
		addUser(user) {
			this.$emit('add-user', user);
		}
	}
};
</script>
