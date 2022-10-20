enum RES_CODE {
	status = 200,
	statusText = 'OK',
	ret_code = '25960000'
}

// 处理数据
export function coverData (res: any) {
	if (res?.status === RES_CODE.status && res?.data?.ret_code === RES_CODE.ret_code) {
		return res?.data?.ret_data || {}
	} else {
		return {}
	}
}

export function checkType (data: any, type: string) {
	// 判断传进来的数据类型
	return Object.prototype.toString.call(data).slice(8, -1).toLowerCase() === type
}
