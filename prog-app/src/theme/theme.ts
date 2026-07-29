// src/theme/theme.ts
//
// Ce fichier centralise toutes les valeurs visuelles de l'app (couleurs, tailles de texte, espacements).
// Objectif : ne jamais écrire une couleur "en dur" (ex: "#FF0000") directement dans un écran.
// À la place, on importe cet objet et on utilise theme.colors.primary partout.
// Avantage : un seul endroit à modifier si le design change.

export const theme = {
  colors: {
    // Couleur de fond principale de l'app (noir profond, pas un noir pur #000
    // pour rester un peu plus doux à l'œil)
    background: '#0A0A0A',

    // Fond des cartes/blocs (légèrement plus clair que le fond général,
    // pour créer de la profondeur sans utiliser de bordures partout)
    surface: '#161616',

    // Couleur d'accent principale, utilisée pour les boutons, icônes actives,
    // liens, et tout ce qui doit attirer l'œil (le rouge PROG)
    primary: '#E30613',

    // Variante plus sombre du rouge, utile pour les états "pressé" d'un bouton
    primaryDark: '#B00410',

    // Texte principal (titres, contenu important)
    textPrimary: '#FFFFFF',

    // Texte secondaire (sous-titres, descriptions, infos moins importantes)
    textSecondary: '#A0A0A0',

    // Couleur pour les indicateurs positifs (ex : "+7% progression")
    success: '#3DDC84',

    // Bordures discrètes entre sections
    border: '#2A2A2A',
  },

  // Tailles de police réutilisables, pour garder une hiérarchie visuelle cohérente
  fontSize: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 20,
    xl: 28,
    xxl: 36, // pour les gros titres façon "SURPASSE TOI."
  },

  // Espacements réutilisables (marges, paddings) — évite les chiffres random
  // du type padding: 13, padding: 17... on reste sur une échelle cohérente
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },

  // Rayon des coins arrondis, utilisé pour les cartes et boutons
  borderRadius: {
    sm: 8,
    md: 12,
    lg: 16,
  },
};

// On exporte aussi un type TypeScript généré automatiquement à partir de l'objet.
// Ça permet, plus tard, d'avoir l'autocomplétion quand on écrit "theme.colors."
// et TypeScript nous préviendra si on fait une faute de frappe.
export type Theme = typeof theme;