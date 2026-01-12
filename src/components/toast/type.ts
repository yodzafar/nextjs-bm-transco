// toast.ts
export type ToastType = "success" | "error";

export type ToastItem = {
  id: string;
  type: ToastType;
  title?: string;
  message: string;
  duration?: number; // ms
};
