import { Event } from "./core/Event";

/**
 * 初始化钩子
 * 
 * @param config 配置
 */
function init(config: any) {
    console.log(config);
}

/**
 * 函数入口
 * 
 * @param event 事件
 * @param context 上下文
 * @param config 配置
 * @returns 
 */
function main(event: Event, context: any, config: any): any {
    return "Hello World, config: " + JSON.stringify(config) + ", query: " + JSON.stringify(event.extensions.request.query)
}

export {
    main,
    init
}