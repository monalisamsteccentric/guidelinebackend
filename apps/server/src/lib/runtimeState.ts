let dbReady = false;

export const runtimeState = {
  isDbReady(): boolean {
    return dbReady;
  },
  setDbReady(value: boolean): void {
    dbReady = value;
  }
};
