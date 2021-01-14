export const defaultIfNull = <T>(value: T | undefined, defaultValue: T): T => (value == null ? defaultValue : value);
