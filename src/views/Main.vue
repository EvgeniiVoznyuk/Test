<template>
	<div id="app">
		<AppHeader />
		<div class="app__content content">
			<div class="router-link" v-on:click="showUsers" v-if="!isShowUsers">
				<router-link to="/users">
					<!-- Перейти к Table -->
				</router-link>
			</div>
			<router-view />
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

export default Vue.extend({
	name: 'Main',
	components: {
		AppHeader
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
