import { COMMON_MESSAGES } from "../modules/markdown/constant";

type ConfirmationHandler = (...args: any[]) => void | Promise<void>;

export const withConfirmation = async (
  handler: ConfirmationHandler,
  message?: string
): Promise<void> => {
  const userConfirmed = window.confirm(message || COMMON_MESSAGES.UNSAVED_CHANGES);
  if (userConfirmed) {
    await handler();
  }
};

