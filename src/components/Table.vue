<template>
	<DataTable
		:value="users"
		:paginator="true"
		:rows="10"
		dataKey="id"
		:rowsPerPageOptions="[10, 20, 50, 100]"
	>
		<Column
			v-model="selectedUser"
			selectionMode="multiple"
			headerStyle="width: 3em"
			@click="console.log(selectedUser)"
		>
		</Column>
		<Column
			v-for="col of columns"
			:field="col.field"
			:header="col.header"
			:key="col.field"
		>
		</Column>
		<Column
			headerStyle="width: 8rem; text-align: center"
			bodyStyle="text-align: center; overflow: visible"
		>
			<template #body>
				<Button type="button" icon="pi pi-cog" class="p-button-secondary">
				</Button>
			</template>
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
			selectedUser: null,
			columns: [
				{ field: 'name', header: 'Name' },
				{ field: 'userName', header: 'UserName' },
				{ field: 'email', header: 'Email' },
				{ field: 'role', header: 'Role(s)' }
			]
		};
	},
	methods: {
		onRowSelect(event) {
			this.$toast.add({
				severity: 'info',
				detail: `Name: ' + ${event.data.name}`,
				life: 3000
			});
		},
		onRowUnselect(event) {
			this.$toast.add({
				severity: 'warn',
				detail: `Name: ' + ${event.data.name}`,
				life: 3000
			});
		}
	}
});
</script>
