// src/screens/AccueilScreen.tsx
//
// Écran affiché sur l'onglet "Accueil".
// Pour l'instant c'est un écran minimal, juste pour vérifier que la navigation
// fonctionne. On le remplira avec le vrai design (bannière "SURPASSE TOI",
// cartes Calendrier/Progression/Historique/Objectifs, stats du bas) juste après.

import { View, Text, StyleSheet } from "react-native";
import { theme } from "../theme/theme";

// En React Native, un "composant" est une fonction qui retourne du JSX
// (une syntaxe qui ressemble à du HTML mais qui décrit l'interface).
export default function AccueilScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Séances</Text>
    </View>
  );
}

// StyleSheet.create() : la façon "React Native" d'écrire du CSS.
// Contrairement au web, il n'y a pas de fichiers .css : chaque style est
// un objet JavaScript avec des propriétés proches du CSS (camelCase).
const styles = StyleSheet.create({
  container: {
    flex: 1, // prend tout l'espace disponible à l'écran
    backgroundColor: theme.colors.background,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSize.xl,
    fontWeight: "bold",
  },
});
