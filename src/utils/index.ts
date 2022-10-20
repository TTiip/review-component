enum RES_CODE {
	status = 200,
	statusText = 'OK',
	ret_code = '25960000'
}

export function coverData (res: any) {
	if (res?.status === RES_CODE.status && res?.data?.ret_code === RES_CODE.ret_code) {
		return res?.data?.ret_data || {}
	} else {
		return {}
	}
}
