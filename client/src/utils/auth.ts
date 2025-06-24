
export interface User {
  email: string;
  name: string;
  isVerified: boolean;
}

export const authUtils = {
  // Check if user is authenticated
  isAuthenticated(): boolean {
    const user = localStorage.getItem('user');
    return user !== null;
  },

  // Check if user is verified
  isVerified(): boolean {
    const user = this.getUser();
    return user?.isVerified || false;
  },

  // Get current user
  getUser(): User | null {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  },

  // Set user after login/signup
  setUser(user: User): void {
    localStorage.setItem('user', JSON.stringify(user));
  },

  // Update user verification status
  verifyUser(): void {
    const user = this.getUser();
    if (user) {
      user.isVerified = true;
      this.setUser(user);
    }
  },

  // Clear user data on logout
  logout(): void {
    localStorage.removeItem('user');
    localStorage.removeItem('otpTimestamp');
  },

  // Check if user should be redirected from auth pages
  shouldRedirectFromAuth(): boolean {
    return this.isAuthenticated() && this.isVerified();
  }
};