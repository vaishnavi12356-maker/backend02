//method banyega and export karega



/*const asyncHandler = () => {}
const asyncHandler = (func) => {()=>{}}
const asyncHandler = (func) => async ()=>{} */
//promises
const asyncHandler = (requestHandler)=>{
    (req, res, next) =>{
        Promise.resolve(requestHandler(req, res, next)).
        catch((err) => next(err))
    }
}
export { asyncHandler }

//try catch
/*const asyncHandler = (fn) => async(req, res, next) => {
    try {
        await fn(req,res,next)
    } catch (error) {
        res.status(error.code || 500).json({
            success: false,
            message: err.message
        })
    }
} *///higher order function ,treating function as object