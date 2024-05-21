import { UserData } from '../types/types';

interface fetchUserDataInterface {
  data?: UserData;
  error?: string;
}

export const fetchUserData = async (username: string): Promise<fetchUserDataInterface> => {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();

    if (!response.ok) {
      throw new Error('Failed to fetch user data');
    }

    return { data };
  } catch (error) {
    console.error('Error fetching user data:', error);
    return { error: error.message };
  }
};
