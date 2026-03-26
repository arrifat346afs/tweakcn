"use server";

import { logError } from "@/lib/shared";

type CheckoutResult = { url: string } | { error: string };

export const createCheckout = async (): Promise<CheckoutResult> => {
  return { error: "Checkout is not configured" };
};
