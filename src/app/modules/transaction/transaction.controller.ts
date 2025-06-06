import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { TransactionService } from "./transaction.service";
import sendResponse from "../../../shared/sendResponse";
import { StatusCodes } from "http-status-codes";
import { JwtPayload } from "jsonwebtoken";

const makePayment = catchAsync(async (req: Request, res: Response) => {

    const result = await TransactionService.makePayment(req.user as JwtPayload, req.body);

    sendResponse(res, {
        statusCode: StatusCodes.CREATED,
        success: true,
        message: 'Payment made successfully',
        data: result
    });
});

const transactions = catchAsync(async (req: Request, res: Response) => {

    const result = await TransactionService.transactionsFromDB(req.user as JwtPayload, req.query);

    sendResponse(res, {
        statusCode: StatusCodes.CREATED,
        success: true,
        message: 'Payment made successfully',
        data: result.transactions,
        pagination: result.pagination
    });
});

const createAccountToStripe = catchAsync(async(req: Request, res: Response)=>{
    const result = await TransactionService.createAccountToStripe(req.user as JwtPayload);
    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: "Connected account created successfully",
        data: result
    })
});


export const TransactionController = {
    makePayment,
    transactions,
    createAccountToStripe
}