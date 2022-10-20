export interface ReviewConfigType {
	reviewApiUrl: string,
	reviewTableHead: {
		label: string,
		key: string
	}[],
	reviewTableConfig: {
		type: 'string' | 'radio'
		code: string
		oldValue?: any
		newValue?: any
		mapData?: any
	}[]
}
