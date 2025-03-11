import { Model, Types } from 'mongoose';

export type INotification = {
    text: string;
    receiver?: Types.ObjectId;
    read?: boolean;
    referenceId: Types.ObjectId;
    screen: "INQUIRY" | "SELLER" | "BUSINESS";
    type?: "ADMIN";
};

export type NotificationModel = Model<INotification>;