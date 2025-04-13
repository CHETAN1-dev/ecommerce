export interface JwtPayload {
    email: string;
    sub: number;  // This is the user ID
    role: string;
  }
  