<template>
	<div style="display:table-cell;min-width:60px;flex:1;padding:10px">
		<div style="width: 100%">
			<div style="margin-top: 10px; box-sizing: border-box">
				<div style="width: 100%; font-size: 0px; box-sizing: border-box">
					<div
						:style="{
							marginLeft: '24px',
							marginRight: '24px',
							borderBottom: `1px solid ${color}`,
							boxSizing: 'border-box',
						}"
					></div>

					<div
						:style="{
							float: 'left',
							marginTop: '-1px',
							boxSizing: 'border-box',
						}"
					>
						<div
							:style="{
								width: '0px',
								height: '8px',
								borderLeft: `1px solid ${color}`,
								marginLeft: '23px',
								boxSizing: 'border-box',
							}"
						></div>

						<div :style="{ width: '16px', marginLeft: '8px', boxSizing: 'border-box' }">
							<div
								:style="{
									width: '16px',
									height: '8px',
									borderLeft: `1px solid ${color}`,
									borderRight: `1px solid ${color}`,
									borderBottom: `1px solid ${color}`,
									boxSizing: 'border-box',
								}"
							></div>

							<div
								:style="{
									width: '8px',
									height: '16px',
									marginTop: '-8px',
									borderTop: `1px solid ${color}`,
									borderRight: `1px solid ${color}`,
									borderBottom: `1px solid ${color}`,
									boxSizing: 'border-box',
								}"
							></div>
						</div>

						<div
							:style="{
								width: '8px',
								height: '0px',
								borderTop: `1px solid ${color}`,
								borderLeft: `1px solid ${color}`,
								marginTop: '-1px',
								boxSizing: 'border-box',
							}"
						></div>
					</div>

					<div
						:style="{
							float: 'right',
							marginTop: '-1px',
							boxSizing: 'border-box',
						}"
					>
						<div
							:style="{
								width: '0px',
								height: '8px',
								borderRight: `1px solid ${color}`,
								marginRight: '8px',
								boxSizing: 'border-box',
							}"
						></div>

						<div :style="{ width: '16px', marginTop: '-1px', boxSizing: 'border-box' }">
							<div
								:style="{
									width: '16px',
									height: '8px',
									borderRight: `1px solid ${color}`,
									borderLeft: `1px solid ${color}`,
									borderBottom: `1px solid ${color}`,
									boxSizing: 'border-box',
								}"
							></div>

							<div
								:style="{
									width: '8px',
									height: '16px',
									marginTop: '-8px',
									marginLeft: '8px',
									borderLeft: `1px solid ${color}`,
									borderBottom: `1px solid ${color}`,
									borderTop: `1px solid ${color}`,
									boxSizing: 'border-box',
								}"
							></div>
						</div>

						<div
							:style="{
								width: '8px',
								height: '0px',
								marginTop: '-1px',
								marginLeft: '16px',
								borderTop: `1px solid ${color}`,
								borderRight: `1px solid ${color}`,
								borderLeftColor: color,
								boxSizing: 'border-box',
							}"
						></div>
					</div>
				</div>

				<div style="clear: both; box-sizing: border-box"></div>
				<div
					:style="{
						width: '100%',
						marginTop: '-12px',
						marginBottom: '-12px',
						paddingRight: '20px',
						paddingLeft: '20px',
						boxSizing: 'border-box',
					}"
				></div>
				<div style="clear: both; box-sizing: border-box"></div>
			</div>
		</div>
		<div :style="{ display: 'flex', justifyContent: 'center', borderLeft: `1px solid ${color}`, borderRight: `1px solid ${color}`, width: '100%', boxSizing: 'border-box' }">
			<slot></slot>
		</div>
		<div style="width: 100%; font-size: 0px; box-sizing: border-box">
			<div
				:style="{
					float: 'left',
					marginTop: '-1px',
					boxSizing: 'border-box',
				}"
			>
				<div
					:style="{
						width: '8px',
						height: '0px',
						borderBottom: `1px solid ${color}`,
						borderLeft: `1px solid ${color}`,
						marginTop: '-1px',
						borderTopColor: color,
						boxSizing: 'border-box',
					}"
				></div>

				<div
					:style="{
						width: '16px',
						marginLeft: '8px',
						marginTop: '-0.5px',
						boxSizing: 'border-box',
					}"
				>
					<div
						:style="{
							width: '8px',
							height: '16px',
							borderBottom: `1px solid ${color}`,
							borderRight: `1px solid ${color}`,
							borderTop: `1px solid ${color}`,
							boxSizing: 'border-box',
						}"
					></div>

					<div
						:style="{
							width: '16px',
							height: '8px',
							marginTop: '-8px',
							borderTop: `1px solid ${color}`,
							borderRight: `1px solid ${color}`,
							borderLeft: `1px solid ${color}`,
							boxSizing: 'border-box',
						}"
					></div>
				</div>

				<div
					:style="{
						width: '0px',
						height: '8px',
						borderLeft: `1px solid ${color}`,
						marginLeft: '23px',
						boxSizing: 'border-box',
					}"
				></div>
			</div>

			<div
				:style="{
					float: 'right',
					marginTop: '-1px',
					boxSizing: 'border-box',
				}"
			>
				<div
					:style="{
						width: '8px',
						height: '0px',
						marginBottom: '1px',
						marginLeft: '16px',
						borderBottom: `1px solid ${color}`,
						borderRight: `1px solid ${color}`,
						boxSizing: 'border-box',
					}"
				></div>

				<div
					:style="{
						width: '16px',
						marginTop: '-2px',
						boxSizing: 'border-box',
					}"
				>
					<div
						:style="{
							width: '8px',
							height: '16px',
							marginLeft: '8px',
							borderTop: `1px solid ${color}`,
							borderLeft: `1px solid ${color}`,
							borderBottom: `1px solid ${color}`,
							boxSizing: 'border-box',
						}"
					></div>

					<div
						:style="{
							width: '16px',
							height: '8px',
							marginTop: '-8px',
							marginRight: '18px',
							borderLeft: `1px solid ${color}`,
							borderRight: `1px solid ${color}`,
							borderTop: `1px solid ${color}`,
							boxSizing: 'border-box',
						}"
					></div>
				</div>

				<div
					:style="{
						width: '0px',
						height: '8px',
						borderRight: `1px solid ${color}`,
						borderLeftColor: color,
						borderBottomColor: color,
						boxSizing: 'border-box',
					}"
				></div>
			</div>

			<div style="clear: both; box-sizing: border-box"></div>

			<div
				:style="{
					marginTop: '-1px',
					marginLeft: '24px',
					marginRight: '24px',
					borderTop: `1px solid ${color}`,
					boxSizing: 'border-box',
				}"
			></div>
		</div>
	</div>
</template>

<script>
import { computed } from 'vue';
export default {
	name: 'CnTd',
	props:{
		isTitle: {
			type: Boolean,
			default: false
		}
	},
	setup(props){
		const color = computed(() => props.isTitle ? '#dc7f7f' : '#7f9bdc')
		return {
			color
		}
	}
}
</script>
