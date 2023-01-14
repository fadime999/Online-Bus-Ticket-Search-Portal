const {createLogger,transports,format} =require("winston");

const dataFormat = format.combine(format.timestamp({
      format: "MMM-DD-YYYY HH:mm:ss",
    }),format.colorize(),format.printf(info=>{
    return `${info.timestamp} [${info.level.toUpperCase().padEnd(4)}] ${info.message}`
    
 }) );

exports.logger = createLogger({
        format : dataFormat,
        transports:[
          //  new transports.Console({level:'silly'}),
            new transports.File({filename: 'log_operations.log',level:'info',maxFiles:2,colorize:false}),        
        ]   
});


