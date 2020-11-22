<template>
	<div id="app">
		<AppHeader />
		<div class="app__content content">
			<Users />
		</div>
	</div>
</template>

<style lang="scss">
.vue-dialog button {
	letter-spacing: 1px;
	outline: none;
	text-transform: uppercase;
}

.content {
	display: flex;
	flex-direction: column;
	align-items: center;
}
</style>

<script lang="">
import Vue from 'vue';
import AppHeader from '../components/AppHeader.vue';
import Users from './Users.vue';

export default Vue.extend({
	name: 'Main',
	components: {
		AppHeader,
		Users
	},
	data() {
		return {
			isShowUsers: false
		};
	},
	methods: {
		showUsers() {
			this.isShowUsers = true;
		}
	}
});
</script>
