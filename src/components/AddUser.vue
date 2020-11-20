<template>
	<div class="add-user">
		<SplitButton
			label="Add User"
			v-model="button"
			icon="pi pi-plus"
			class="p-mr-2"
		>
		</SplitButton>
	</div>
</template>

<script>
import SplitButton from 'primevue/splitbutton';

export default {
	name: 'AddUser',
	components: {
		SplitButton
	},
	data() {
		return {
			button: null
		};
	}
};
</script>
