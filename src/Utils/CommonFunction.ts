export default class CommonFunction {
    public static GetActionResult(
        code: number,
        result: any,
        error: any = null
    ) {
        return {
            code,
            result,
            error,
        };
    }
}
