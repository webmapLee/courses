
import log4js from "log4js";
const getNodeLogger = () => {
    const logger = log4js.getLogger();
    log4js.configure({
        appenders: { cheese: { type: "file", filename: "logs/cheese.log" } },
        categories: { default: { appenders: ["cheese"], level: "error" } },
    });
    logger.level = "debug";
    return logger;
}

export default getNodeLogger;