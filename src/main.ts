import { Event } from "./core/Event";



function init(config: any) {
    console.log(console);
}

function main(event: Event, context: any, config: any): any {
    return "Hello World, config: " + JSON.stringify(config) + ", query: " + JSON.stringify(event.extensions.request.query)
}

export {
    main,
    init
}