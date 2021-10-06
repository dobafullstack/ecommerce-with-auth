import chalk from 'chalk'

export default class Logger{
    public static success(content: any){
        console.log(chalk.white.bgGreen(` ${content} `));
    }

    public static error(content: any){
        console.log(chalk.white.bgRed(` ${content} `));
    }
}