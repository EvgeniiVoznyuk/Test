<template>
	<DataTable
		:value="users"
		:paginator="true"
		:rows="10"
		dataKey="id"
		:rowsPerPageOptions="[10, 20, 50, 100]"
		:resizableColumns="true"
		columnResizeMode="expand"
	>
		<Column headerStyle="width: 3em">
			<template #header>
				<input
					type="checkbox"
					:value="'allUsers'"
					v-model="selectedUsers"
					@click="selectAllUsers"
				/>
			</template>
			<template #body="slotProps">
				<input
					type="checkbox"
					:value="slotProps.data.id"
					v-model="selectedUsers"
				/>
			</template>
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
			selectedUsers: [],
			columns: [
				{ field: 'name', header: 'Name' },
				{ field: 'userName', header: 'UserName' },
				{ field: 'email', header: 'Email' },
				{ field: 'role', header: 'Role(s)' }
			]
		};
	},
	methods: {
		selectAllUsers() {
			if (!this.selectedUsers.includes('allUsers')) {
				this.selectedUsers = this.users.map(user => user.id);
			} else {
				this.selectedUsers = [];
			}
		}
	}
});
</script>
