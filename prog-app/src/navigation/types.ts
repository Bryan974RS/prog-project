// src/navigation/types.ts
//
// Ce fichier liste tous les écrans du navigateur racine (RootStack) et,
// pour chacun, le type des paramètres qu'on peut lui passer en naviguant
// (ex: navigation.navigate('DetailSeance', { seanceId: '123' })).
// Pour l'instant, aucun écran ne reçoit de paramètre -> "undefined" partout.
// On complètera ça plus tard (ex: DetailSeance aura besoin d'un id de séance).

export type RootStackParamList = {
  Tabs: undefined;
  DemarrerSeance: undefined;
  SeanceForm: undefined;
  SeanceEnCours: undefined;
  SeanceLibre: undefined;
  StatistiquesSeance: undefined;
  Historique: undefined;
  DetailSeance: undefined;
  Objectifs: undefined;
  DetailObjectif: undefined;
  StreetWorkout: undefined;
  FicheFigure: undefined;
  Etirements: undefined;
  FicheEtirement: undefined;
  Reglages: undefined;
  DetailExercice: undefined;
};
