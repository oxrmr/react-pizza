/** Type of error received after the request. */
export interface ErrorType {
  readonly message: string;
  readonly response: {
    readonly status?: string;
  };
}

/** Type of error sent to the storage. */
export interface RejectedDataType {
  readonly messageError: string;
  readonly status?: string;
}
