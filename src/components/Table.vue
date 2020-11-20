<template>
	<DataTable :value="users">
		<Column
			v-for="col of columns"
			:field="col.field"
			:header="col.header"
			:key="col.field"
		>
		</Column>
	</DataTable>
</template>

<script lang="">
import Vue from 'vue';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

export default Vue.extend({
	name: 'Table',
	props: ['users'],
	components: {
		DataTable,
		Column
	},
	data() {
		return {
			columns: [
				{ field: 'name', header: 'Name' },
				{ field: 'userName', header: 'UserName' },
				{ field: 'email', header: 'Email' },
				{ field: 'role', header: 'Role(s)' }
			]
		};
	}
});
</script>
