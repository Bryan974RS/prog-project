// src/components/PlaceholderScreen.tsx
//
// Composant générique utilisé par tous les écrans "pas encore construits".
// Il prend juste un texte en props et l'affiche centré.
// Plus tard, on remplacera le contenu de CHAQUE écran par son vrai design,
// mais ce composant nous sert de base pendant qu'on construit la navigation.

import { View, Text, StyleSheet } from "react-native";
import { theme } from "../theme/theme";

// On définit le "type" des props attendues : un objet avec une propriété
// "label" qui doit être une chaîne de caractères (string).
type Props = {
  label: string;
};

// Props est déstructuré directement dans les paramètres de la fonction :
// ça évite d'écrire "props.label" partout, on écrit juste "label".
export default function PlaceholderScreen({ label }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{label}</Text>
      <Text style={styles.subtext}>Écran à construire</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    alignItems: "center",
    justifyContent: "center",
    gap: theme.spacing.sm,
  },
  text: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSize.lg,
    fontWeight: "bold",
  },
  subtext: {
    color: theme.colors.textSecondary,
    fontSize: theme.fontSize.sm,
  },
});
