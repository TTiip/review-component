export interface ReviewConfigType {
	reviewApiUrl: string,
	reviewTableHead: {
		[propName: string]: {
			label: string
		}
	},
	reviewTableConfig: {
		[propName: string]: {
			type: 'string' | 'radio'
			format?: (...arg: any) => any
			oldValue?: any
			newValue?: any
			mapData?: any
		}
	}
}
