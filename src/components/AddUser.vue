<template>
	<div class="add-user">
		<SplitButton
			label="Add User"
			v-model="button"
			icon="pi pi-plus"
			class="p-mr-2"
			@click="toggleModal"
		>
		</SplitButton>
		<Dialog
			:showHeader="false"
			:visible="displayModal"
			:style="{ width: '40vw' }"
			:modal="true"
		>
			<div class="modal">
				<div class="modal__header p-mb-4">
					<h1 class="modal__title">New User</h1>
					<Button
						icon="pi pi-times"
						class="modal__close-button"
						@click="toggleModal"
					/>
				</div>
				<div class="modal__body p-m-2">
					<form>
						<span class="modal__span">
							<label for="username">Username</label>
							<InputText id="username" type="text" v-model="value" />
						</span>
					</form>
				</div>
			</div>
		</Dialog>
	</div>
</template>

<script>
import SplitButton from 'primevue/splitbutton';
import Dialog from 'primevue/dialog';
import InputText from 'primevue/inputtext';

export default {
	name: 'AddUser',
	components: {
		SplitButton,
		Dialog,
		InputText
	},
	data() {
		return {
			button: null,
			displayModal: false
		};
	},
	methods: {
		toggleModal() {
			this.displayModal = !this.displayModal;
		}
	}
};
</script>

<style lang="scss" scoped>
.modal {
	&__header {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	&__title {
		font-size: 22px;
		font-weight: bold;
		text-transform: uppercase;
		letter-spacing: -2px;
	}
	&__close-button {
		background: none;
		border: none;
		color: #000;
	}
	&__body {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	&__span {
		display: flex;
		gap: 10px;
		flex-direction: column;
	}
}
</style>
