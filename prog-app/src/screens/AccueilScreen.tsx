// src/screens/AccueilScreen.tsx

import { View, Text, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../navigation/types";
import { theme } from "../theme/theme";

// Type du hook de navigation : on précise qu'il connaît RootStackParamList,
// pour avoir l'autocomplétion des noms d'écrans dans navigation.navigate(...).
type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export default function AccueilScreen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Accueil</Text>

      {/* Bouton TEMPORAIRE juste pour tester la navigation vers un écran
          empilé par-dessus les onglets. À remplacer par les vraies cartes. */}
      <Pressable
        style={styles.testButton}
        onPress={() => navigation.navigate("Historique")}
      >
        <Text style={styles.testButtonText}>Test → Historique</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    alignItems: "center",
    justifyContent: "center",
    gap: theme.spacing.md,
  },
  title: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSize.xl,
    fontWeight: "bold",
  },
  testButton: {
    backgroundColor: theme.colors.primary,
    paddingVertical: theme.spacing.sm,
    paddingHorizontal: theme.spacing.lg,
    borderRadius: theme.borderRadius.md,
  },
  testButtonText: {
    color: theme.colors.textPrimary,
    fontWeight: "bold",
  },
});
