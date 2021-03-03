
export const getBrowserVersion = (agent) => {
	let Browser = '';
	//IE
	if (agent.indexOf('msie') > 0) {
		let regStr_ie = /msie [\d.]+;/gi
		Browser = 'Ie'
	}
	//firefox
	else if (agent.indexOf('firefox') > 0) {
		let regStr_ff = /firefox\/[\d.]+/gi;
		Browser = 'Firefox';
	}
	//Chrome
	else if (agent.indexOf('chrome') > 0) {
		let regStr_chrome = /chrome\/[\d.]+/gi;
		Browser = "Chrome";
	}
	// Safari
	else if (agent.indexOf('safari') > 0 && agent.indexOf
('chrome') < 0) {
		let regStr_saf = /version\/[\d.]+/gi;
		Browser = 'Safari'
	} else {
		Browser = 'Chrome'
	}
	return Browser;
}

export const currentSystem = (str) => {
	const reg = /mac/ig
	return reg.test(str) ? 'Mac' : 'Window'
}

export const avarterArr = [
	'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=353868547,2822233069&fm=27&gp=0.jpg',
	'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1178011732,3353631614&fm=27&gp=0.jpg',
	'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=128013007,1946750280&fm=27&gp=0.jpg',
	'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=600840806,2113634000&fm=27&gp=0.jpg',
	'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1478849654,1851926890&fm=27&gp=0.jpg',
	'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1067594990,1110172622&fm=27&gp=0.jpg',
]

