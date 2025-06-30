import { useState, useEffect } from 'react';
import {
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithCredential, // ✅ This is what you actually need
} from 'firebase/auth';
import { auth } from '../firebase';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import * as AuthSession from 'expo-auth-session';

// Complete the auth session on app load
WebBrowser.maybeCompleteAuthSession();

export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const redirectUri = AuthSession.makeRedirectUri({
    useProxy: true,
  });

  const [request, response, promptAsync] = Google.useAuthRequest({
    webClientId: '949011087583-7lkeig0lkbirjl79uq7tl5el63v9g0p6.apps.googleusercontent.com',
    iosClientId: 'your-ios-client-id.googleusercontent.com',
    androidClientId: '949011087583-cce792pjp0nnocjc5761995trhesfs1s.apps.googleusercontent.com',
    redirectUri,
  });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  // Handle Google Auth response
  useEffect(() => {
    if (response?.type === 'success') {
      const { id_token } = response.params;
      const credential = GoogleAuthProvider.credential(id_token);

      signInWithCredential(auth, credential)
        .catch((error) => {
          console.error('Firebase Auth Error:', error);
        });
    }
  }, [response]);

  const signInWithGoogle = async () => {
    try {
      await promptAsync();
    } catch (error) {
      console.error('Google Sign-In Error:', error);
      throw error;
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Logout Error:', error);
    }
  };

  return {
    user,
    loading,
    signInWithGoogle,
    logout,
  };
};
