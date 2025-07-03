import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { createUserDocument } from "../services/userService";
import { useAuth } from "../hooks/useAuth";

export default function SignUp() {
  const { signUpWithGoogle } = useAuth();

  const handleGoogleSignUp = async () => {
    try {
      await signUpWithGoogle();
    } catch (error) {
      Alert.alert("Google Sign-In Error", error.message);
    }
  };
  const handleEmailSignUp = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await createUserDocument(userCredential.user);
    } catch (error) {
      Alert.alert("Sign-Up Error", error.message);
    }
  };
  return (
    <ImageBackground
      source={require("../../assets/landingPage.png")}
      style={styles.background}
      resizeMode="cover"
      blurRadius={5}
    >
      <View style={[styles.overlay, { backgroundColor: "rgba(0, 0, 0, 0.5)" }]}>
        <View style={styles.box}>
          <Text style={styles.title}>Welcome</Text>

          <TextInput
            placeholder="Name"
            value={displayName}
            onChangeText={setdisplayName}
            autoCapitalize="none"
            keyboardType="default"
            style={styles.input}
          />
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            keyboardType="email-address"
            style={styles.input}
          />
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            style={styles.input}
          />

          <TouchableOpacity
            style={[styles.button, styles.signUp]}
            onPress={handleEmailSignUp}
          >
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={handleEmailSignIn}>
            <Text style={styles.buttonText}>Sign In</Text>
          </TouchableOpacity>

          <View style={styles.separator}>
            <View style={styles.line} />
            <Text style={styles.orText}>OR</Text>
            <View style={styles.line} />
          </View>

          <TouchableOpacity
            style={[styles.button, styles.googleButton]}
            onPress={handleGoogleSignIn}
          >
            <Text style={styles.buttonText}>Sign in with Google</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    width: "90%",
    backgroundColor: "transparent",
    backdropFilter: "blur(10px)",
    borderRadius: 15,
    padding: 20,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 8,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    alignSelf: "center",
    color: "white",
  },
  input: {
    backgroundColor: "#f0f0f0",
    padding: 12,
    marginBottom: 12,
    borderRadius: 8,
  },
  button: {
    backgroundColor: "#4285F4",
    padding: 14,
    borderRadius: 8,
    marginTop: 10,
    alignItems: "center",
  },
  signUp: {
    backgroundColor: "#34A853",
  },
  googleButton: {
    backgroundColor: "#DB4437",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
  separator: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 15,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#ccc",
  },
  orText: {
    marginHorizontal: 10,
    fontWeight: "bold",
    color: "#666",
  },
});
