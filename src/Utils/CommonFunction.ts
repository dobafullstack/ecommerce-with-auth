export interface ActionResult{
    code: number;
    result: {} | [];
    error?: {
        message: string
    }
}

export default class CommonFunction {
    public static GetActionResult(
        code: number,
        result: any,
        error: any = null
    ) : ActionResult {
        return {
            code,
            result,
            error,
        };
    }
}
