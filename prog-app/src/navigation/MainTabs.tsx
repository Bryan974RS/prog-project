// src/navigation/MainTabs.tsx
//
// Ce fichier définit la barre de navigation du bas (les 5 onglets).

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { theme } from "../theme/theme";

import AccueilScreen from "../screens/AccueilScreen";
import SeancesScreen from "../screens/SeancesScreen";
import CalendrierScreen from "../screens/CalendrierScreen";
import ProgressionScreen from "../screens/ProgressionScreen";
import ProfilScreen from "../screens/ProfilScreen";

const Tab = createBottomTabNavigator();

export default function MainTabs() {
  // useSafeAreaInsets() retourne un objet { top, bottom, left, right } :
  // la taille en pixels des zones à éviter sur chaque bord de l'écran.
  // "insets.bottom" = la hauteur de la barre de gestes Android (ou l'indicateur
  // d'accueil iPhone). Sur certains téléphones ça vaut 0, sur d'autres ~34px.
  const insets = useSafeAreaInsets();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.textSecondary,
        tabBarStyle: {
          backgroundColor: theme.colors.surface,
          borderTopColor: theme.colors.border,
          // On ajoute insets.bottom à la hauteur de base ET au paddingBottom :
          // ça pousse le contenu de la barre (icônes/texte) au-dessus de la
          // zone système, au lieu de le laisser caché ou collé dessous.
          height: 60 + insets.bottom,
          paddingBottom: 8 + insets.bottom,
          paddingTop: 8,
        },
        tabBarLabelStyle: {
          fontSize: theme.fontSize.xs,
          fontWeight: "600",
        },
      }}
    >
      <Tab.Screen
        name="Accueil"
        component={AccueilScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Séances"
        component={SeancesScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="barbell" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Calendrier"
        component={CalendrierScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Progression"
        component={ProgressionScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="trending-up" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profil"
        component={ProfilScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
