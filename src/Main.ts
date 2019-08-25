import GameConfig from "./GameConfig";
import moment from 'moment';

class Main {
	constructor() {
		//根据IDE设置初始化引擎		
		if (window["Laya3D"]) Laya3D.init(GameConfig.width, GameConfig.height);
		else Laya.init(GameConfig.width, GameConfig.height, Laya["WebGL"]);
		Laya.alertGlobalError = false;

		this.onConfigLoaded();
	}

	onConfigLoaded(): void {
		console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));
		console.log(moment().format('dddd'));
		console.log(moment().format("MMM Do YY"));
		console.log(moment().format('YYYY [escaped] YYYY'));
		console.log(moment().format());
	}
}
//激活启动类
new Main();
