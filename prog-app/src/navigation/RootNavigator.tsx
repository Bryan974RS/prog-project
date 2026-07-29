// src/navigation/RootNavigator.tsx
//
// Le navigateur racine de l'app. Il contient :
// - "Tabs" -> nos 5 onglets du bas (écran par défaut au lancement)
// - tous les écrans secondaires, qui viennent se superposer par-dessus
//   les onglets avec un bouton retour automatique.

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { theme } from "../theme/theme";
import type { RootStackParamList } from "./types";

import MainTabs from "./MainTabs";
import DemarrerSeanceScreen from "../screens/DemarrerSeanceScreen";
import SeanceFormScreen from "../screens/SeanceFormScreen";
import SeanceEnCoursScreen from "../screens/SeanceEnCoursScreen";
import SeanceLibreScreen from "../screens/SeanceLibreScreen";
import StatistiquesSeanceScreen from "../screens/StatistiquesSeanceScreen";
import HistoriqueScreen from "../screens/HistoriqueScreen";
import DetailSeanceScreen from "../screens/DetailSeanceScreen";
import ObjectifsScreen from "../screens/ObjectifsScreen";
import DetailObjectifScreen from "../screens/DetailObjectifScreen";
import StreetWorkoutScreen from "../screens/StreetWorkoutScreen";
import FicheFigureScreen from "../screens/FicheFigureScreen";
import EtirementsScreen from "../screens/EtirementsScreen";
import FicheEtirementScreen from "../screens/FicheEtirementScreen";
import ReglagesScreen from "../screens/ReglagesScreen";
import DetailExerciceScreen from "../screens/DetailExerciceScreen";

// Le <RootStackParamList> entre chevrons dit à TypeScript : "cette pile de
// navigation ne connaît QUE les écrans définis dans ce type". Si on essaie
// de naviguer vers un écran mal orthographié, TypeScript nous le signalera.
const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        // Style d'en-tête commun à tous les écrans secondaires (sombre,
        // cohérent avec le thème PROG). Chaque écran affichera automatiquement
        // son titre + un bouton retour, sans qu'on ait à les coder nous-mêmes.
        headerStyle: { backgroundColor: theme.colors.surface },
        headerTintColor: theme.colors.textPrimary,
        headerTitleStyle: { fontWeight: "bold" },
        contentStyle: { backgroundColor: theme.colors.background },
      }}
    >
      {/* Les onglets n'ont pas besoin d'en-tête ici : c'est déjà géré
          à l'intérieur de MainTabs (headerShown: false dans ses options). */}
      <Stack.Screen
        name="Tabs"
        component={MainTabs}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="DemarrerSeance"
        component={DemarrerSeanceScreen}
        options={{ title: "Démarrer une séance" }}
      />
      <Stack.Screen
        name="SeanceForm"
        component={SeanceFormScreen}
        options={{ title: "Séance" }}
      />
      <Stack.Screen
        name="SeanceEnCours"
        component={SeanceEnCoursScreen}
        options={{ title: "Séance en cours" }}
      />
      <Stack.Screen
        name="SeanceLibre"
        component={SeanceLibreScreen}
        options={{ title: "Séance libre" }}
      />
      <Stack.Screen
        name="StatistiquesSeance"
        component={StatistiquesSeanceScreen}
        options={{ title: "Statistiques" }}
      />

      <Stack.Screen
        name="Historique"
        component={HistoriqueScreen}
        options={{ title: "Historique" }}
      />
      <Stack.Screen
        name="DetailSeance"
        component={DetailSeanceScreen}
        options={{ title: "Détail séance" }}
      />

      <Stack.Screen
        name="Objectifs"
        component={ObjectifsScreen}
        options={{ title: "Objectifs" }}
      />
      <Stack.Screen
        name="DetailObjectif"
        component={DetailObjectifScreen}
        options={{ title: "Objectif" }}
      />

      <Stack.Screen
        name="StreetWorkout"
        component={StreetWorkoutScreen}
        options={{ title: "Street Workout" }}
      />
      <Stack.Screen
        name="FicheFigure"
        component={FicheFigureScreen}
        options={{ title: "Figure" }}
      />

      <Stack.Screen
        name="Etirements"
        component={EtirementsScreen}
        options={{ title: "Étirements" }}
      />
      <Stack.Screen
        name="FicheEtirement"
        component={FicheEtirementScreen}
        options={{ title: "Étirement" }}
      />

      <Stack.Screen
        name="Reglages"
        component={ReglagesScreen}
        options={{ title: "Réglages" }}
      />
      <Stack.Screen
        name="DetailExercice"
        component={DetailExerciceScreen}
        options={{ title: "Exercice" }}
      />
    </Stack.Navigator>
  );
}
