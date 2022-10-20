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
			oldValue?: any
			newValue?: any
			mapData?: any
		}
	}
}
